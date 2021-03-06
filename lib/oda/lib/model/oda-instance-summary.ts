/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Summary of the Digital Assistant instance.
 */
export interface OdaInstanceSummary {
  /**
   * Unique identifier of the Digital Assistant instance.
   */
  "id": string;
  /**
   * User-defined name for the Digital Assistant instance. You can change this value.
   */
  "displayName"?: string;
  /**
   * Description of the Digital Assistant instance.
   */
  "description"?: string;
  /**
   * Identifier of the compartment that the instance belongs to.
   */
  "compartmentId": string;
  /**
   * Shape or size of the instance.
   */
  "shapeName"?: OdaInstanceSummary.ShapeName;
  /**
   * When the Digital Assistant instance was created. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeCreated"?: Date;
  /**
   * When the Digital Assistant instance was last updated. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the instance.
   */
  "lifecycleState": OdaInstanceSummary.LifecycleState;
  /**
   * The current sub-state of the Digital Assistant instance.
   */
  "lifecycleSubState"?: OdaInstanceSummary.LifecycleSubState;
  /**
   * A message describing the current state in more detail. For example, actionable
   * information about an instance that's in the `FAILED` state.
   *
   */
  "stateMessage"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace OdaInstanceSummary {
  export enum ShapeName {
    DEVELOPMENT = "DEVELOPMENT",
    PRODUCTION = "PRODUCTION",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    CREATING = "CREATING",
    UPDATING = "UPDATING",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    DELETING = "DELETING",
    DELETED = "DELETED",
    FAILED = "FAILED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum LifecycleSubState {
    CREATING = "CREATING",
    STARTING = "STARTING",
    STOPPING = "STOPPING",
    CHANGINGCOMPARTMENT = "CHANGING_COMPARTMENT",
    DELETING = "DELETING",
    DELETEPENDING = "DELETE_PENDING",
    RECOVERING = "RECOVERING",
    PURGING = "PURGING",
    QUEUED = "QUEUED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OdaInstanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
