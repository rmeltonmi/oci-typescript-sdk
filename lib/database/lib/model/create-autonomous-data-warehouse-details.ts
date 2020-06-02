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
 * **Deprecated.** See {@link #createAutonomousDatabaseDetails(CreateAutonomousDatabaseDetailsRequest) createAutonomousDatabaseDetails} for reference information about creating an Oracle Autonomous Data Warehouse.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface CreateAutonomousDataWarehouseDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment of the Autonomous Data Warehouse.
   */
  "compartmentId": string;
  /**
   * The database name. The name must begin with an alphabetic character and can contain a maximum of 14 alphanumeric characters. Special characters are not permitted. The database name must be unique in the tenancy.
   */
  "dbName": string;
  /**
   * The number of CPU Cores to be made available to the database.
   */
  "cpuCoreCount": number;
  /**
   * Size, in terabytes, of the data volume that will be created and attached to the database. This storage can later be scaled up if needed.
   *
   */
  "dataStorageSizeInTBs": number;
  /**
   * The password must be between 12 and 30 characters long, and must contain at least 1 uppercase, 1 lowercase, and 1 numeric character. It cannot contain the double quote symbol (\") or the username \"admin\", regardless of casing.
   */
  "adminPassword": string;
  /**
   * The user-friendly name for the Autonomous Data Warehouse. The name does not have to be unique.
   */
  "displayName"?: string;
  /**
   * The Oracle license model that applies to the Oracle Autonomous Data Warehouse. The default is BRING_YOUR_OWN_LICENSE.
   *
   */
  "licenseModel"?: CreateAutonomousDataWarehouseDetails.LicenseModel;
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
}

export namespace CreateAutonomousDataWarehouseDetails {
  export enum LicenseModel {
    LICENSEINCLUDED = "LICENSE_INCLUDED",
    BRINGYOUROWNLICENSE = "BRING_YOUR_OWN_LICENSE"
  }

  export function getJsonObj(obj: CreateAutonomousDataWarehouseDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}