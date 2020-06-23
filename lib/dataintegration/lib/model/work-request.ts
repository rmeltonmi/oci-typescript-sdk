/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The API operations used to create and configure Data Integration resources do not take effect immediately. In these cases, the operation spawns an asynchronous workflow to fulfill the request. Work requests provide visibility into the status of these in-progress, long-running asynchronous workflows.
 */
export interface WorkRequest {
  /**
   * The asynchronous operation tracked by this work request.
   */
  "operationType": WorkRequest.OperationType;
  /**
   * The status of this work request.
   */
  "status": WorkRequest.Status;
  /**
   * The id of the work request.
   */
  "id": string;
  /**
   * The ocid of the compartment that contains this work request. Work requests should be scoped to
   * the same compartment as the resource the work request affects. If the work request affects multiple resources that are not in the same compartment, then the system picks a primary
   * resource whose compartment should be used.
   *
   */
  "compartmentId": string;
  /**
   * The resources affected by this work request.
   */
  "resources": Array<model.WorkRequestResource>;
  /**
   * The completed percentage of the operation tracked by this work request.
   */
  "percentComplete": number;
  /**
   * The date and time this work request was accepted, in the timestamp format defined by
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   *
   */
  "timeAccepted": Date;
  /**
   * The date and time the work request transitioned from `ACCEPTED` to `IN_PROGRESS`, in the timestamp format defined by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time the work request reached a terminal state, either `FAILED` or `SUCCEEDED`, in the timestamp format defined by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   *
   */
  "timeFinished"?: Date;
}

export namespace WorkRequest {
  export enum OperationType {
    CREATEWORKSPACE = "CREATE_WORKSPACE",
    UPDATEWORKSPACE = "UPDATE_WORKSPACE",
    DELETEWORKSPACE = "DELETE_WORKSPACE",
    MOVEWORKSPACE = "MOVE_WORKSPACE",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum Status {
    ACCEPTED = "ACCEPTED",
    INPROGRESS = "IN_PROGRESS",
    FAILED = "FAILED",
    SUCCEEDED = "SUCCEEDED",
    CANCELING = "CANCELING",
    CANCELED = "CANCELED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}