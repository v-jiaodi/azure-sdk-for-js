/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { JitNetworkAccessPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  JitNetworkAccessPolicy,
  JitNetworkAccessPoliciesListNextOptionalParams,
  JitNetworkAccessPoliciesListOptionalParams,
  JitNetworkAccessPoliciesListResponse,
  JitNetworkAccessPoliciesListByRegionNextOptionalParams,
  JitNetworkAccessPoliciesListByRegionOptionalParams,
  JitNetworkAccessPoliciesListByRegionResponse,
  JitNetworkAccessPoliciesListByResourceGroupNextOptionalParams,
  JitNetworkAccessPoliciesListByResourceGroupOptionalParams,
  JitNetworkAccessPoliciesListByResourceGroupResponse,
  JitNetworkAccessPoliciesListByResourceGroupAndRegionNextOptionalParams,
  JitNetworkAccessPoliciesListByResourceGroupAndRegionOptionalParams,
  JitNetworkAccessPoliciesListByResourceGroupAndRegionResponse,
  JitNetworkAccessPoliciesGetOptionalParams,
  JitNetworkAccessPoliciesGetResponse,
  JitNetworkAccessPoliciesCreateOrUpdateOptionalParams,
  JitNetworkAccessPoliciesCreateOrUpdateResponse,
  JitNetworkAccessPoliciesDeleteOptionalParams,
  JitNetworkAccessPolicyInitiateRequest,
  JitNetworkAccessPoliciesInitiateOptionalParams,
  JitNetworkAccessPoliciesInitiateResponse,
  JitNetworkAccessPoliciesListNextResponse,
  JitNetworkAccessPoliciesListByRegionNextResponse,
  JitNetworkAccessPoliciesListByResourceGroupNextResponse,
  JitNetworkAccessPoliciesListByResourceGroupAndRegionNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing JitNetworkAccessPolicies operations. */
export class JitNetworkAccessPoliciesImpl implements JitNetworkAccessPolicies {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class JitNetworkAccessPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Policies for protecting resources using Just-in-Time access control.
   * @param options The options parameters.
   */
  public list(
    options?: JitNetworkAccessPoliciesListOptionalParams,
  ): PagedAsyncIterableIterator<JitNetworkAccessPolicy> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: JitNetworkAccessPoliciesListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<JitNetworkAccessPolicy[]> {
    let result: JitNetworkAccessPoliciesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: JitNetworkAccessPoliciesListOptionalParams,
  ): AsyncIterableIterator<JitNetworkAccessPolicy> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Policies for protecting resources using Just-in-Time access control for the subscription, location
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  public listByRegion(
    ascLocation: string,
    options?: JitNetworkAccessPoliciesListByRegionOptionalParams,
  ): PagedAsyncIterableIterator<JitNetworkAccessPolicy> {
    const iter = this.listByRegionPagingAll(ascLocation, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByRegionPagingPage(ascLocation, options, settings);
      },
    };
  }

  private async *listByRegionPagingPage(
    ascLocation: string,
    options?: JitNetworkAccessPoliciesListByRegionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<JitNetworkAccessPolicy[]> {
    let result: JitNetworkAccessPoliciesListByRegionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByRegion(ascLocation, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByRegionNext(
        ascLocation,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByRegionPagingAll(
    ascLocation: string,
    options?: JitNetworkAccessPoliciesListByRegionOptionalParams,
  ): AsyncIterableIterator<JitNetworkAccessPolicy> {
    for await (const page of this.listByRegionPagingPage(
      ascLocation,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Policies for protecting resources using Just-in-Time access control for the subscription, location
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: JitNetworkAccessPoliciesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<JitNetworkAccessPolicy> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: JitNetworkAccessPoliciesListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<JitNetworkAccessPolicy[]> {
    let result: JitNetworkAccessPoliciesListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: JitNetworkAccessPoliciesListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<JitNetworkAccessPolicy> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Policies for protecting resources using Just-in-Time access control for the subscription, location
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  public listByResourceGroupAndRegion(
    resourceGroupName: string,
    ascLocation: string,
    options?: JitNetworkAccessPoliciesListByResourceGroupAndRegionOptionalParams,
  ): PagedAsyncIterableIterator<JitNetworkAccessPolicy> {
    const iter = this.listByResourceGroupAndRegionPagingAll(
      resourceGroupName,
      ascLocation,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByResourceGroupAndRegionPagingPage(
          resourceGroupName,
          ascLocation,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupAndRegionPagingPage(
    resourceGroupName: string,
    ascLocation: string,
    options?: JitNetworkAccessPoliciesListByResourceGroupAndRegionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<JitNetworkAccessPolicy[]> {
    let result: JitNetworkAccessPoliciesListByResourceGroupAndRegionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroupAndRegion(
        resourceGroupName,
        ascLocation,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupAndRegionNext(
        resourceGroupName,
        ascLocation,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupAndRegionPagingAll(
    resourceGroupName: string,
    ascLocation: string,
    options?: JitNetworkAccessPoliciesListByResourceGroupAndRegionOptionalParams,
  ): AsyncIterableIterator<JitNetworkAccessPolicy> {
    for await (const page of this.listByResourceGroupAndRegionPagingPage(
      resourceGroupName,
      ascLocation,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Policies for protecting resources using Just-in-Time access control.
   * @param options The options parameters.
   */
  private _list(
    options?: JitNetworkAccessPoliciesListOptionalParams,
  ): Promise<JitNetworkAccessPoliciesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Policies for protecting resources using Just-in-Time access control for the subscription, location
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  private _listByRegion(
    ascLocation: string,
    options?: JitNetworkAccessPoliciesListByRegionOptionalParams,
  ): Promise<JitNetworkAccessPoliciesListByRegionResponse> {
    return this.client.sendOperationRequest(
      { ascLocation, options },
      listByRegionOperationSpec,
    );
  }

  /**
   * Policies for protecting resources using Just-in-Time access control for the subscription, location
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: JitNetworkAccessPoliciesListByResourceGroupOptionalParams,
  ): Promise<JitNetworkAccessPoliciesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Policies for protecting resources using Just-in-Time access control for the subscription, location
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  private _listByResourceGroupAndRegion(
    resourceGroupName: string,
    ascLocation: string,
    options?: JitNetworkAccessPoliciesListByResourceGroupAndRegionOptionalParams,
  ): Promise<JitNetworkAccessPoliciesListByResourceGroupAndRegionResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ascLocation, options },
      listByResourceGroupAndRegionOperationSpec,
    );
  }

  /**
   * Policies for protecting resources using Just-in-Time access control for the subscription, location
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ascLocation: string,
    jitNetworkAccessPolicyName: string,
    options?: JitNetworkAccessPoliciesGetOptionalParams,
  ): Promise<JitNetworkAccessPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ascLocation, jitNetworkAccessPolicyName, options },
      getOperationSpec,
    );
  }

  /**
   * Create a policy for protecting resources using Just-in-Time access control
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param body
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    ascLocation: string,
    jitNetworkAccessPolicyName: string,
    body: JitNetworkAccessPolicy,
    options?: JitNetworkAccessPoliciesCreateOrUpdateOptionalParams,
  ): Promise<JitNetworkAccessPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ascLocation,
        jitNetworkAccessPolicyName,
        body,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Delete a Just-in-Time access control policy.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    ascLocation: string,
    jitNetworkAccessPolicyName: string,
    options?: JitNetworkAccessPoliciesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ascLocation, jitNetworkAccessPolicyName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Initiate a JIT access from a specific Just-in-Time policy configuration.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param jitNetworkAccessPolicyName Name of a Just-in-Time access configuration policy.
   * @param body
   * @param options The options parameters.
   */
  initiate(
    resourceGroupName: string,
    ascLocation: string,
    jitNetworkAccessPolicyName: string,
    body: JitNetworkAccessPolicyInitiateRequest,
    options?: JitNetworkAccessPoliciesInitiateOptionalParams,
  ): Promise<JitNetworkAccessPoliciesInitiateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ascLocation,
        jitNetworkAccessPolicyName,
        body,
        options,
      },
      initiateOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: JitNetworkAccessPoliciesListNextOptionalParams,
  ): Promise<JitNetworkAccessPoliciesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListByRegionNext
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param nextLink The nextLink from the previous successful call to the ListByRegion method.
   * @param options The options parameters.
   */
  private _listByRegionNext(
    ascLocation: string,
    nextLink: string,
    options?: JitNetworkAccessPoliciesListByRegionNextOptionalParams,
  ): Promise<JitNetworkAccessPoliciesListByRegionNextResponse> {
    return this.client.sendOperationRequest(
      { ascLocation, nextLink, options },
      listByRegionNextOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: JitNetworkAccessPoliciesListByResourceGroupNextOptionalParams,
  ): Promise<JitNetworkAccessPoliciesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }

  /**
   * ListByResourceGroupAndRegionNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroupAndRegion
   *                 method.
   * @param options The options parameters.
   */
  private _listByResourceGroupAndRegionNext(
    resourceGroupName: string,
    ascLocation: string,
    nextLink: string,
    options?: JitNetworkAccessPoliciesListByResourceGroupAndRegionNextOptionalParams,
  ): Promise<JitNetworkAccessPoliciesListByResourceGroupAndRegionNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ascLocation, nextLink, options },
      listByResourceGroupAndRegionNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/jitNetworkAccessPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JitNetworkAccessPoliciesList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByRegionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JitNetworkAccessPoliciesList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/jitNetworkAccessPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JitNetworkAccessPoliciesList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupAndRegionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JitNetworkAccessPoliciesList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies/{jitNetworkAccessPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JitNetworkAccessPolicy,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.resourceGroupName,
    Parameters.jitNetworkAccessPolicyName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies/{jitNetworkAccessPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.JitNetworkAccessPolicy,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.resourceGroupName,
    Parameters.jitNetworkAccessPolicyName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies/{jitNetworkAccessPolicyName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.resourceGroupName,
    Parameters.jitNetworkAccessPolicyName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const initiateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/jitNetworkAccessPolicies/{jitNetworkAccessPolicyName}/{jitNetworkAccessPolicyInitiateType}",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: Mappers.JitNetworkAccessRequest,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.body5,
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.resourceGroupName,
    Parameters.jitNetworkAccessPolicyName,
    Parameters.jitNetworkAccessPolicyInitiateType,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JitNetworkAccessPoliciesList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByRegionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JitNetworkAccessPoliciesList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JitNetworkAccessPoliciesList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupAndRegionNextOperationSpec: coreClient.OperationSpec =
  {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.JitNetworkAccessPoliciesList,
      },
      default: {
        bodyMapper: Mappers.CloudError,
      },
    },
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.ascLocation,
      Parameters.nextLink,
      Parameters.resourceGroupName,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
