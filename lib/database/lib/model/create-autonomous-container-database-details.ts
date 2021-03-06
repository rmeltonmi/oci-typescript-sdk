/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Describes the required parameters for the creation of an Autonomous Container Database.
 *
 */
export interface CreateAutonomousContainerDatabaseDetails {
  /**
   * The display name for the Autonomous Container Database.
   */
  "displayName": string;
  /**
   * The `DB_UNIQUE_NAME` of the Oracle Database being backed up.
   */
  "dbUniqueName"?: string;
  /**
   * The service level agreement type of the Autonomous Container Database. The default is STANDARD. For an autonomous dataguard Autonomous Container Database, the specified Autonomous Exadata Infrastructure must be associated with a remote Autonomous Exadata Infrastructure.
   */
  "serviceLevelAgreementType"?: CreateAutonomousContainerDatabaseDetails.ServiceLevelAgreementType;
  /**
   * The OCID of the Autonomous Exadata Infrastructure.
   */
  "autonomousExadataInfrastructureId"?: string;
  /**
   * The OCID of the Autonomous VM Cluster.
   */
  "autonomousVmClusterId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment containing the Autonomous Container Database.
   */
  "compartmentId"?: string;
  /**
   * Database Patch model preference.
   */
  "patchModel": CreateAutonomousContainerDatabaseDetails.PatchModel;
  "maintenanceWindowDetails"?: model.MaintenanceWindow;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  "backupConfig"?: model.AutonomousContainerDatabaseBackupConfig;
}

export namespace CreateAutonomousContainerDatabaseDetails {
  export enum ServiceLevelAgreementType {
    STANDARD = "STANDARD"
  }

  export enum PatchModel {
    UPDATES = "RELEASE_UPDATES",
    UPDATEREVISIONS = "RELEASE_UPDATE_REVISIONS"
  }

  export function getJsonObj(obj: CreateAutonomousContainerDatabaseDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenanceWindowDetails": obj.maintenanceWindowDetails
          ? model.MaintenanceWindow.getJsonObj(obj.maintenanceWindowDetails)
          : undefined,

        "backupConfig": obj.backupConfig
          ? model.AutonomousContainerDatabaseBackupConfig.getJsonObj(obj.backupConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
