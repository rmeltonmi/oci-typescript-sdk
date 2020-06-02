/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetric, use the `telemetry-ingestion` endpoints; for all other operations, use the `telemetry` endpoints.
For information about monitoring, see [Monitoring Overview](/iaas/Content/Monitoring/Concepts/monitoringoverview.htm).

 * OpenAPI spec version: 20180401
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as models from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { MonitoringWaiter } from "./monitoring-waiter";
import { composeResponse, composeRequest } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum MonitoringApiKeys {}

export class MonitoringClient {
  protected static serviceEndpointTemplate = "https://telemetry.{region}.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": MonitoringWaiter;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    this._httpClient = params.httpClient || new common.FetchHttpClient(requestSigner);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20180401";
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      MonitoringClient.serviceEndpointTemplate,
      region
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      MonitoringClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new MonitoringWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): MonitoringWaiter {
    this._waiters = new MonitoringWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): MonitoringWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
     * Moves an alarm into a different compartment within the same tenancy.
* <p>
For information about moving resources between compartments, see [Moving Resources Between Compartments](https://docs.cloud.oracle.com/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).
* 
     * @param ChangeAlarmCompartmentRequest
     * @return ChangeAlarmCompartmentResponse
     * @throws OciError when an error occurs
     */
  public async changeAlarmCompartment(
    changeAlarmCompartmentRequest: requests.ChangeAlarmCompartmentRequest
  ): Promise<responses.ChangeAlarmCompartmentResponse> {
    const pathParams = {
      "{alarmId}": changeAlarmCompartmentRequest.alarmId
    };

    const queryParams = {};

    let headerParams = {
      "if-match": changeAlarmCompartmentRequest.ifMatch,
      "opc-request-id": changeAlarmCompartmentRequest.opcRequestId,
      "opc-retry-token": changeAlarmCompartmentRequest.opcRetryToken
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/alarms/{alarmId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeAlarmCompartmentRequest.changeAlarmCompartmentDetails,
        "ChangeAlarmCompartmentDetails",
        models.ChangeAlarmCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeAlarmCompartmentResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
     * Creates a new alarm in the specified compartment.
* For important limits information, see [Limits on Monitoring](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#Limits).
* <p>
This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations. 
* Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests, 
* or transactions, per second (TPS) for a given tenancy.
* 
     * @param CreateAlarmRequest
     * @return CreateAlarmResponse
     * @throws OciError when an error occurs
     */
  public async createAlarm(
    createAlarmRequest: requests.CreateAlarmRequest
  ): Promise<responses.CreateAlarmResponse> {
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "opc-request-id": createAlarmRequest.opcRequestId,
      "opc-retry-token": createAlarmRequest.opcRetryToken
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/alarms",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createAlarmRequest.createAlarmDetails,
        "CreateAlarmDetails",
        models.CreateAlarmDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateAlarmResponse>{},
        body: await response.json(),
        bodyKey: "alarm",
        bodyModel: "model.Alarm",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
     * Deletes the specified alarm.
* For important limits information, see [Limits on Monitoring](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#Limits).
* <p>
This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations. 
* Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests, 
* or transactions, per second (TPS) for a given tenancy.
* 
     * @param DeleteAlarmRequest
     * @return DeleteAlarmResponse
     * @throws OciError when an error occurs
     */
  public async deleteAlarm(
    deleteAlarmRequest: requests.DeleteAlarmRequest
  ): Promise<responses.DeleteAlarmResponse> {
    const pathParams = {
      "{alarmId}": deleteAlarmRequest.alarmId
    };

    const queryParams = {};

    let headerParams = {
      "if-match": deleteAlarmRequest.ifMatch,
      "opc-request-id": deleteAlarmRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/alarms/{alarmId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteAlarmResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
     * Gets the specified alarm.
* For important limits information, see [Limits on Monitoring](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#Limits).
* <p>
This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations. 
* Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests, 
* or transactions, per second (TPS) for a given tenancy.
* 
     * @param GetAlarmRequest
     * @return GetAlarmResponse
     * @throws OciError when an error occurs
     */
  public async getAlarm(
    getAlarmRequest: requests.GetAlarmRequest
  ): Promise<responses.GetAlarmResponse> {
    const pathParams = {
      "{alarmId}": getAlarmRequest.alarmId
    };

    const queryParams = {};

    let headerParams = {
      "opc-request-id": getAlarmRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/alarms/{alarmId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.GetAlarmResponse>{},
        body: await response.json(),
        bodyKey: "alarm",
        bodyModel: "model.Alarm",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
     * Get the history of the specified alarm.
* For important limits information, see [Limits on Monitoring](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#Limits).
* <p>
This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations. 
* Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests, 
* or transactions, per second (TPS) for a given tenancy.
* 
     * @param GetAlarmHistoryRequest
     * @return GetAlarmHistoryResponse
     * @throws OciError when an error occurs
     */
  public async getAlarmHistory(
    getAlarmHistoryRequest: requests.GetAlarmHistoryRequest
  ): Promise<responses.GetAlarmHistoryResponse> {
    const pathParams = {
      "{alarmId}": getAlarmHistoryRequest.alarmId
    };

    const queryParams = {
      "alarmHistorytype": getAlarmHistoryRequest.alarmHistorytype,
      "page": getAlarmHistoryRequest.page,
      "limit": getAlarmHistoryRequest.limit,
      "timestampGreaterThanOrEqualTo": getAlarmHistoryRequest.timestampGreaterThanOrEqualTo,
      "timestampLessThan": getAlarmHistoryRequest.timestampLessThan
    };

    let headerParams = {
      "opc-request-id": getAlarmHistoryRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/alarms/{alarmId}/history",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.GetAlarmHistoryResponse>{},
        body: await response.json(),
        bodyKey: "alarmHistoryCollection",
        bodyModel: "model.AlarmHistoryCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
     * Lists the alarms for the specified compartment.
* For important limits information, see [Limits on Monitoring](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#Limits).
* <p>
This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations. 
* Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests, 
* or transactions, per second (TPS) for a given tenancy.
* 
     * @param ListAlarmsRequest
     * @return ListAlarmsResponse
     * @throws OciError when an error occurs
     */
  public async listAlarms(
    listAlarmsRequest: requests.ListAlarmsRequest
  ): Promise<responses.ListAlarmsResponse> {
    const pathParams = {};

    const queryParams = {
      "compartmentId": listAlarmsRequest.compartmentId,
      "page": listAlarmsRequest.page,
      "limit": listAlarmsRequest.limit,
      "displayName": listAlarmsRequest.displayName,
      "lifecycleState": listAlarmsRequest.lifecycleState,
      "sortBy": listAlarmsRequest.sortBy,
      "sortOrder": listAlarmsRequest.sortOrder,
      "compartmentIdInSubtree": listAlarmsRequest.compartmentIdInSubtree
    };

    let headerParams = {
      "opc-request-id": listAlarmsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/alarms",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ListAlarmsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "AlarmSummary[]",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.AlarmSummary objects
   * contained in responses from the listAlarms operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllAlarms(
    request: requests.ListAlarmsRequest
  ): AsyncIterableIterator<models.AlarmSummary> {
    return paginateRecords(request, req => this.listAlarms(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listAlarms operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllAlarmsResponses(
    request: requests.ListAlarmsRequest
  ): AsyncIterableIterator<responses.ListAlarmsResponse> {
    return paginateResponses(request, req => this.listAlarms(req));
  }

  /**
     * List the status of each alarm in the specified compartment.
* For important limits information, see [Limits on Monitoring](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#Limits).
* <p>
This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations. 
* Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests, 
* or transactions, per second (TPS) for a given tenancy.
* 
     * @param ListAlarmsStatusRequest
     * @return ListAlarmsStatusResponse
     * @throws OciError when an error occurs
     */
  public async listAlarmsStatus(
    listAlarmsStatusRequest: requests.ListAlarmsStatusRequest
  ): Promise<responses.ListAlarmsStatusResponse> {
    const pathParams = {};

    const queryParams = {
      "compartmentId": listAlarmsStatusRequest.compartmentId,
      "compartmentIdInSubtree": listAlarmsStatusRequest.compartmentIdInSubtree,
      "page": listAlarmsStatusRequest.page,
      "limit": listAlarmsStatusRequest.limit,
      "displayName": listAlarmsStatusRequest.displayName,
      "sortBy": listAlarmsStatusRequest.sortBy,
      "sortOrder": listAlarmsStatusRequest.sortOrder
    };

    let headerParams = {
      "opc-request-id": listAlarmsStatusRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/alarms/status",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ListAlarmsStatusResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "AlarmStatusSummary[]",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.AlarmStatusSummary objects
   * contained in responses from the listAlarmsStatus operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllAlarmsStatus(
    request: requests.ListAlarmsStatusRequest
  ): AsyncIterableIterator<models.AlarmStatusSummary> {
    return paginateRecords(request, req => this.listAlarmsStatus(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listAlarmsStatus operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllAlarmsStatusResponses(
    request: requests.ListAlarmsStatusRequest
  ): AsyncIterableIterator<responses.ListAlarmsStatusResponse> {
    return paginateResponses(request, req => this.listAlarmsStatus(req));
  }

  /**
     * Returns metric definitions that match the criteria specified in the request. Compartment OCID required.
* For information about metrics, see [Metrics Overview](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#MetricsOverview).
* For important limits information, see [Limits on Monitoring](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#Limits).
* <p>
Transactions Per Second (TPS) per-tenancy limit for this operation: 10.
* 
     * @param ListMetricsRequest
     * @return ListMetricsResponse
     * @throws OciError when an error occurs
     */
  public async listMetrics(
    listMetricsRequest: requests.ListMetricsRequest
  ): Promise<responses.ListMetricsResponse> {
    const pathParams = {};

    const queryParams = {
      "compartmentId": listMetricsRequest.compartmentId,
      "page": listMetricsRequest.page,
      "limit": listMetricsRequest.limit,
      "compartmentIdInSubtree": listMetricsRequest.compartmentIdInSubtree
    };

    let headerParams = {
      "opc-request-id": listMetricsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/metrics/actions/listMetrics",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        listMetricsRequest.listMetricsDetails,
        "ListMetricsDetails",
        models.ListMetricsDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.ListMetricsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "Metric[]",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.Metric objects
   * contained in responses from the listMetrics operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllMetrics(
    request: requests.ListMetricsRequest
  ): AsyncIterableIterator<models.Metric> {
    return paginateRecords(request, req => this.listMetrics(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listMetrics operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllMetricsResponses(
    request: requests.ListMetricsRequest
  ): AsyncIterableIterator<responses.ListMetricsResponse> {
    return paginateResponses(request, req => this.listMetrics(req));
  }

  /**
     * Publishes raw metric data points to the Monitoring service.
* For more information about publishing metrics, see [Publishing Custom Metrics](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Tasks/publishingcustommetrics.htm).
* For important limits information, see [Limits on Monitoring](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#Limits).
* <p>
Per-call limits information follows. 
* <p>
* Dimensions per metric group*. Maximum: 20. Minimum: 1.
* * Unique metric streams*. Maximum: 50.
* * Transactions Per Second (TPS) per-tenancy limit for this operation: 50.
* <p>
*A metric group is the combination of a given metric, metric namespace, and tenancy for the purpose of determining limits. 
* A dimension is a qualifier provided in a metric definition. 
* A metric stream is an individual set of aggregated data for a metric, typically specific to a resource. 
* For more information about metric-related concepts, see [Monitoring Concepts](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#concepts).
* <p>
The endpoints for this operation differ from other Monitoring operations. Replace the string `telemetry` with `telemetry-ingestion` in the endpoint, as in the following example: 
* <p>
https://telemetry-ingestion.eu-frankfurt-1.oraclecloud.com
* 
     * @param PostMetricDataRequest
     * @return PostMetricDataResponse
     * @throws OciError when an error occurs
     */
  public async postMetricData(
    postMetricDataRequest: requests.PostMetricDataRequest
  ): Promise<responses.PostMetricDataResponse> {
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "opc-request-id": postMetricDataRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/metrics",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        postMetricDataRequest.postMetricDataDetails,
        "PostMetricDataDetails",
        models.PostMetricDataDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.PostMetricDataResponse>{},
        body: await response.json(),
        bodyKey: "postMetricDataResponseDetails",
        bodyModel: "model.PostMetricDataResponseDetails",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
     * Removes any existing suppression for the specified alarm.
* For important limits information, see [Limits on Monitoring](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#Limits).
* <p>
This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations. 
* Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests, 
* or transactions, per second (TPS) for a given tenancy.
* 
     * @param RemoveAlarmSuppressionRequest
     * @return RemoveAlarmSuppressionResponse
     * @throws OciError when an error occurs
     */
  public async removeAlarmSuppression(
    removeAlarmSuppressionRequest: requests.RemoveAlarmSuppressionRequest
  ): Promise<responses.RemoveAlarmSuppressionResponse> {
    const pathParams = {
      "{alarmId}": removeAlarmSuppressionRequest.alarmId
    };

    const queryParams = {};

    let headerParams = {
      "if-match": removeAlarmSuppressionRequest.ifMatch,
      "opc-request-id": removeAlarmSuppressionRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/alarms/{alarmId}/actions/removeSuppression",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.RemoveAlarmSuppressionResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
     * Returns aggregated data that match the criteria specified in the request. Compartment OCID required.
* For information on metric queries, see [Building Metric Queries](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Tasks/buildingqueries.htm).
* For important limits information, see [Limits on Monitoring](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#Limits).
* <p>
Transactions Per Second (TPS) per-tenancy limit for this operation: 10.
* 
     * @param SummarizeMetricsDataRequest
     * @return SummarizeMetricsDataResponse
     * @throws OciError when an error occurs
     */
  public async summarizeMetricsData(
    summarizeMetricsDataRequest: requests.SummarizeMetricsDataRequest
  ): Promise<responses.SummarizeMetricsDataResponse> {
    const pathParams = {};

    const queryParams = {
      "compartmentId": summarizeMetricsDataRequest.compartmentId,
      "compartmentIdInSubtree": summarizeMetricsDataRequest.compartmentIdInSubtree
    };

    let headerParams = {
      "opc-request-id": summarizeMetricsDataRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/metrics/actions/summarizeMetricsData",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        summarizeMetricsDataRequest.summarizeMetricsDataDetails,
        "SummarizeMetricsDataDetails",
        models.SummarizeMetricsDataDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.SummarizeMetricsDataResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: "MetricData[]",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }

  /**
     * Updates the specified alarm.
* For important limits information, see [Limits on Monitoring](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#Limits).
* <p>
This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations. 
* Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests, 
* or transactions, per second (TPS) for a given tenancy.
* 
     * @param UpdateAlarmRequest
     * @return UpdateAlarmResponse
     * @throws OciError when an error occurs
     */
  public async updateAlarm(
    updateAlarmRequest: requests.UpdateAlarmRequest
  ): Promise<responses.UpdateAlarmResponse> {
    const pathParams = {
      "{alarmId}": updateAlarmRequest.alarmId
    };

    const queryParams = {};

    let headerParams = {
      "if-match": updateAlarmRequest.ifMatch,
      "opc-request-id": updateAlarmRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/alarms/{alarmId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateAlarmRequest.updateAlarmDetails,
        "UpdateAlarmDetails",
        models.UpdateAlarmDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });

    const response = await this._httpClient.send(request);
    if (response.status && response.status >= 200 && response.status <= 299) {
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateAlarmResponse>{},
        body: await response.json(),
        bodyKey: "alarm",
        bodyModel: "model.Alarm",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } else {
      const errBody = await common.handleErrorBody(response);
      throw common.handleErrorResponse(response, errBody);
    }
  }
}