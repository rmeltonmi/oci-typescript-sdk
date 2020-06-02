/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * Information about a single backend server health check result reported by a load balancer.
 *
 */
export interface HealthCheckResult {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet hosting the load balancer that reported this health check status.
   *
   */
  "subnetId": string;
  /**
    * The IP address of the health check status report provider. This identifier helps you differentiate same-subnet
* load balancers that report health check status.
* <p>
Example: `10.0.0.7`
* 
    */
  "sourceIpAddress": string;
  /**
    * The date and time the data was retrieved, in the format defined by RFC3339.
* <p>
Example: `2017-06-02T18:28:11+00:00`
* 
    */
  "timestamp": Date;
  /**
   * The result of the most recent health check.
   *
   */
  "healthCheckStatus": HealthCheckResult.HealthCheckStatus;
}

export namespace HealthCheckResult {
  export enum HealthCheckStatus {
    OK = "OK",
    INVALIDSTATUSCODE = "INVALID_STATUS_CODE",
    TIMEDOUT = "TIMED_OUT",
    REGEXMISMATCH = "REGEX_MISMATCH",
    CONNECTFAILED = "CONNECT_FAILED",
    IOERROR = "IO_ERROR",
    OFFLINE = "OFFLINE",
    UNKNOWN = "UNKNOWN",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: HealthCheckResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}