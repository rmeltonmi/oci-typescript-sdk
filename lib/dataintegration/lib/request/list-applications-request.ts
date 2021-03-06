/**
 *
 *
 * OpenAPI spec version: 20200430
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
export interface ListApplicationsRequest {
  /**
   * DIS workspace id
   */
  "workspaceId": string;
  /**
   * This filter parameter can be used to filter by the name of the object.
   */
  "name"?: string;
  /**
   * This filter parameter can be used to filter by the identifier of the published object.
   *
   */
  "identifier"?: Array<string>;
  /**
   * This parameter allows users to specify which fields to get for an object.
   */
  "fields"?: Array<string>;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   *
   */
  "page"?: string;
  /**
   * This parameter is used to control the sort order.  Supported values are `ASC` (ascending) and `DESC` (descending).
   */
  "sortOrder"?: ListApplicationsRequest.SortOrder;
  /**
   * This parameter allows users to specify a sort field.  Supported sort fields are `name`, `identifier`, `timeCreated`, and `timeUpdated`.  Default sort order is the descending order of `timeCreated` (most recently created objects at the top).  Sorting related parameters are ignored when parameter `query` is present (search operation and sorting order is by relevance score in descending order).
   */
  "sortBy"?: ListApplicationsRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request. If
   * you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListApplicationsRequest {
  export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
  }

  export enum SortBy {
    TIMECREATED = "TIME_CREATED",
    DISPLAYNAME = "DISPLAY_NAME"
  }
}
