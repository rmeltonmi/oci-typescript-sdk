/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * A summary of the work request status.
 */
export interface WorkRequestSummary {
  /**
   * The asynchronous operation tracked by this work request.
   */
  "operationType": WorkRequestSummary.OperationType;
  /**
   * The status of the work request.
   */
  "status": WorkRequestSummary.Status;
  /**
   * The OCID of the work request.
   */
  "id": string;
  /**
   * The OCID of the compartment containing this work request.
   *
   */
  "compartmentId": string;
  /**
   * The resources impacted by the work request.
   */
  "resources": Array<model.WorkRequestResource>;
  /**
   * Progress of the request in percentage.
   */
  "percentComplete": number;
  /**
   * The date and time the work request was created, in the format defined by RFC3339.
   *
   */
  "timeAccepted": Date;
  /**
   * The date and time the work request transitioned from ACCEPTED to IN_PROGRESS, in the format defined by RFC3339.
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time the work request reached a terminal state, either FAILED or SUCCEEDED, in the format defined by RFC3339.
   *
   */
  "timeFinished"?: Date;
}

export namespace WorkRequestSummary {
  export enum OperationType {
    ENABLEDATASAFECONFIGURATION = "ENABLE_DATA_SAFE_CONFIGURATION",
    CREATEPRIVATEENDPOINT = "CREATE_PRIVATE_ENDPOINT",
    UPDATEPRIVATEENDPOINT = "UPDATE_PRIVATE_ENDPOINT",
    DELETEPRIVATEENDPOINT = "DELETE_PRIVATE_ENDPOINT",
    CHANGEPRIVATEENDPOINTCOMPARTMENT = "CHANGE_PRIVATE_ENDPOINT_COMPARTMENT",

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

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequestSummary): object {
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