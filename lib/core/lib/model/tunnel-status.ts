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
 * Deprecated. For tunnel information, instead see {@link IPSecConnectionTunnel}.
 *
 */
export interface TunnelStatus {
  /**
    * The IP address of Oracle's VPN headend.
* <p>
Example: `129.146.17.50`
* 
    */
  "ipAddress": string;
  /**
   * The tunnel's current state.
   */
  "lifecycleState"?: TunnelStatus.LifecycleState;
  /**
    * The date and time the IPSec connection was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
    * When the state of the tunnel last changed, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeStateModified"?: Date;
}

export namespace TunnelStatus {
  export enum LifecycleState {
    UP = "UP",
    DOWN = "DOWN",
    DOWNFORMAINTENANCE = "DOWN_FOR_MAINTENANCE",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TunnelStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}