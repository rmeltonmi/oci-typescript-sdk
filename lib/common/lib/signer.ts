/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import auth = require("./auth/auth");
import { getStringFromRequestBody } from "./helper";
import jssha = require("jssha");
import { parsePrivateKey } from "sshpk";
import UrlParser = require("url");
import { Readable } from "stream";
import { Method } from "./request-generator";
import { HttpRequest } from "./http-request";

// tslint:disable-next-line:no-var-requires
const httpSignature: any = require("http-signature");
const HEADER_CONTENT_SHA = "x-content-sha256";
const HEADER_CONTENT_LEN = "Content-Length";
const HEADER_CONTENT_TYPE = "Content-Type";
// The Subtle crypto implementation in IE11 will silently fail to digest an empty string.
// We have to manually define that value here to avoid hanging forever
const EMPTY_SHA = "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=";

export class SignerRequest {
  method: string;
  path?: string | null;
  constructor(method: Method, url: string, private headers: Headers) {
    this.method = method;
    this.path = UrlParser.parse(url).path;
  }

  public getHeader(name: string): string | null {
    return this.headers.get(name);
  }

  public setHeader(name: string, value: any) {
    this.headers.set(name, value);
  }
}
/**
 * An interface signs the http request.
 */
export interface RequestSigner {
  /**
   * Sign the http request.
   * @param request http request .
   * @param forceExcludeBody exclude body or not.
   */
  signHttpRequest(request: HttpRequest, forceExcludeBody?: boolean): void;
}

/**
 * The default implementation of [[RequestSigner]].
 */
export class DefaultRequestSigner implements RequestSigner {
  private static readonly headersToSign = ["x-date", "(request-target)", "host"];
  private static readonly methodsThatRequireExtraHeaders = ["POST", "PUT", "PATCH"];

  private privateKeyBuffer: Buffer;

  /**
   * Construct an instance of [[DefaultRequestSigner]].
   * @param authenticationDetailsProvider the authentication details provider.
   */
  constructor(private authenticationDetailsProvider: auth.AuthenticationDetailsProvider) {
    let options = {};
    if (this.authenticationDetailsProvider.getPassphrase()) {
      Object.assign(options, { passphrase: this.authenticationDetailsProvider.getPassphrase() });
    }

    this.privateKeyBuffer = parsePrivateKey(
      this.authenticationDetailsProvider.getPrivateKey(),
      "auto",
      options
    ).toBuffer("pem", {});
  }

  /**
   * Sign the http request.
   * @param request http request.
   * @param forceExcludeBody exclude body or not.
   */
  async signHttpRequest(request: HttpRequest, forceExcludeBody: boolean = false) {
    // Populate missing headers required for signing
    let options = {};
    if (this.authenticationDetailsProvider.getPassphrase()) {
      Object.assign(options, { passphrase: this.authenticationDetailsProvider.getPassphrase() });
    }

    if (!request.headers.has("host")) {
      const url = UrlParser.parse(request.uri);
      if (url.host) {
        request.headers.set("host", url.host);
      } else {
        throw new Error("Cannot parse host from url");
      }
    }

    if (!request.headers.has("x-date")) {
      request.headers.set("x-date", new Date().toUTCString());
    }

    var headersToSign = DefaultRequestSigner.headersToSign;
    if (
      !forceExcludeBody &&
      DefaultRequestSigner.methodsThatRequireExtraHeaders.indexOf(request.method.toUpperCase()) !==
        -1
    ) {
      if (!request.headers.has(HEADER_CONTENT_TYPE)) {
        request.headers.set(HEADER_CONTENT_TYPE, "application/json");
      }

      let contentLen = 0;
      const shaObj = new jssha("SHA-256", "TEXT");
      if (request.body) {
        const bodyStringContent: string = await getStringFromRequestBody(request.body);
        shaObj.update(bodyStringContent);
        request.headers.set(HEADER_CONTENT_SHA, shaObj.getHash("B64"));
        contentLen = bodyStringContent.length;
      }

      if (contentLen == 0) {
        // if buffer is empty, it can only be an empty string payload
        request.headers.set(HEADER_CONTENT_SHA, EMPTY_SHA);
      }

      if (!request.headers.has(HEADER_CONTENT_LEN)) {
        request.headers.set(HEADER_CONTENT_LEN, `${contentLen}`);
      }

      headersToSign = headersToSign.concat(
        HEADER_CONTENT_TYPE,
        HEADER_CONTENT_LEN,
        HEADER_CONTENT_SHA
      );
    }
    const keyId = await this.authenticationDetailsProvider.getKeyId();
    this.privateKeyBuffer = parsePrivateKey(
      this.authenticationDetailsProvider.getPrivateKey(),
      "auto",
      options
    ).toBuffer("pem", {});

    httpSignature.sign(new SignerRequest(request.method, request.uri, request.headers), {
      key: this.privateKeyBuffer,
      keyId: keyId,
      headers: headersToSign
    });

    const authorizationHeader = request.headers.get("authorization");
    if (authorizationHeader) {
      request.headers.set(
        "authorization",
        authorizationHeader.replace("Signature ", 'Signature version="1",')
      );
    } else {
      throw new Error("Unable to sign request");
    }
  }
}
