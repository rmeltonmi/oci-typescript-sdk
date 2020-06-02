/**
 * Data Science API
 * Use the Data Science APIs to organize your data science work, access data and computing resources, and build, train, deploy, and manage models on Oracle Cloud.

 * OpenAPI spec version: 20190101
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
 * Model provenance gives data scientists information about the origin of their model. This information allows data scientists to reproduce the development environment in which the model was trained.
 */
export interface CreateModelProvenanceDetails {
  /**
   * For model reproducibility purposes. URL of the git repository associated with model training.
   */
  "repositoryUrl"?: string;
  /**
   * For model reproducibility purposes. Branch of the git repository associated with model training.
   */
  "gitBranch"?: string;
  /**
   * For model reproducibility purposes. Commit ID of the git repository associated with model training.
   */
  "gitCommit"?: string;
  /**
   * For model reproducibility purposes. Path to model artifacts.
   */
  "scriptDir"?: string;
  /**
   * For model reproducibility purposes. Path to the python script or notebook in which the model was trained.\"
   *
   */
  "trainingScript"?: string;
}

export namespace CreateModelProvenanceDetails {
  export function getJsonObj(obj: CreateModelProvenanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}