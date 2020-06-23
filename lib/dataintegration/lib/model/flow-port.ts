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
 * Each operator owns a set of InputPort and OutputPort objects (can scale to zero), which represent the ports that can be connected to/from the Operator.
 */
export interface FlowPort extends model.TypedObject {
  "modelType": string;
}

export namespace FlowPort {
  export function getJsonObj(obj: FlowPort, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TypedObject.getJsonObj(obj) as FlowPort)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "FLOW_PORT";
}