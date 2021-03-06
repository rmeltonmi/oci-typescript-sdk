/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
 * An ISCSI volume attachment.
 */
export interface IScsiVolumeAttachment extends model.VolumeAttachment {
  /**
    * The Challenge-Handshake-Authentication-Protocol (CHAP) secret valid for the associated CHAP user name.
* (Also called the \"CHAP password\".)
* <p>

    */
  "chapSecret"?: string;
  /**
    * The volume's system-generated Challenge-Handshake-Authentication-Protocol (CHAP) user name. See [RFC 1994](https://tools.ietf.org/html/rfc1994) for more on CHAP.
* <p>
Example: `ocid1.volume.oc1.phx.<unique_ID>`
* 
    */
  "chapUsername"?: string;
  /**
    * The volume's iSCSI IP address.
* <p>
Example: `169.254.0.2`
* 
    */
  "ipv4": string;
  /**
    * The target volume's iSCSI Qualified Name in the format defined by [RFC 3720](https://tools.ietf.org/html/rfc3720#page-32).
* <p>
Example: `iqn.2015-12.us.oracle.com:<CHAP_username>`
* 
    */
  "iqn": string;
  /**
    * The volume's iSCSI port, usually port 860 or 3260.
* <p>
Example: `3260`
* 
    */
  "port": number;

  "attachmentType": string;
}

export namespace IScsiVolumeAttachment {
  export function getJsonObj(obj: IScsiVolumeAttachment, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.VolumeAttachment.getJsonObj(obj) as IScsiVolumeAttachment)),
      ...{}
    };

    return jsonObj;
  }
  export const attachmentType = "iscsi";
}
