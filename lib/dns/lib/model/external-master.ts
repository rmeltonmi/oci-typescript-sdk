/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * An external master name server used as the source of zone data.
 * May either have a zone-embedded TSIG or reference a TSIG key by OCID,
 * but not both.
 *
 */
export interface ExternalMaster {
  /**
   * The server's IP address (IPv4 or IPv6).
   */
  "address": string;
  /**
   * The server's port. Port value must be a value of 53, otherwise omit
   * the port value.
   *
   */
  "port"?: number;
  "tsig"?: model.TSIG;
  /**
   * The OCID of the TSIG key.
   */
  "tsigKeyId"?: string;
}

export namespace ExternalMaster {
  export function getJsonObj(obj: ExternalMaster): object {
    const jsonObj = {
      ...obj,
      ...{
        "tsig": obj.tsig ? model.TSIG.getJsonObj(obj.tsig) : undefined
      }
    };

    return jsonObj;
  }
}