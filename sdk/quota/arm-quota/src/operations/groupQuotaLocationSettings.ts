/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { GroupQuotaLocationSettings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureQuotaExtensionAPI } from "../azureQuotaExtensionAPI";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  GroupQuotasEnforcementResponse,
  GroupQuotaLocationSettingsListNextOptionalParams,
  GroupQuotaLocationSettingsListOptionalParams,
  GroupQuotaLocationSettingsListResponse,
  GroupQuotaLocationSettingsCreateOrUpdateOptionalParams,
  GroupQuotaLocationSettingsCreateOrUpdateResponse,
  GroupQuotaLocationSettingsUpdateOptionalParams,
  GroupQuotaLocationSettingsUpdateResponse,
  GroupQuotaLocationSettingsGetOptionalParams,
  GroupQuotaLocationSettingsGetResponse,
  GroupQuotaLocationSettingsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GroupQuotaLocationSettings operations. */
export class GroupQuotaLocationSettingsImpl
  implements GroupQuotaLocationSettings
{
  private readonly client: AzureQuotaExtensionAPI;

  /**
   * Initialize a new instance of the class GroupQuotaLocationSettings class.
   * @param client Reference to the service client
   */
  constructor(client: AzureQuotaExtensionAPI) {
    this.client = client;
  }

  /**
   * Returns only the list of the Azure regions settings, where the GroupQuotas enforcement is enabled.
   * The locations not included in GroupQuota Enforcement will not be listed, the regions in failed
   * status with listed as status Failed.
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param options The options parameters.
   */
  public list(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    options?: GroupQuotaLocationSettingsListOptionalParams,
  ): PagedAsyncIterableIterator<GroupQuotasEnforcementResponse> {
    const iter = this.listPagingAll(
      managementGroupId,
      groupQuotaName,
      resourceProviderName,
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
        return this.listPagingPage(
          managementGroupId,
          groupQuotaName,
          resourceProviderName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    options?: GroupQuotaLocationSettingsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<GroupQuotasEnforcementResponse[]> {
    let result: GroupQuotaLocationSettingsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        managementGroupId,
        groupQuotaName,
        resourceProviderName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        managementGroupId,
        groupQuotaName,
        resourceProviderName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    options?: GroupQuotaLocationSettingsListOptionalParams,
  ): AsyncIterableIterator<GroupQuotasEnforcementResponse> {
    for await (const page of this.listPagingPage(
      managementGroupId,
      groupQuotaName,
      resourceProviderName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Enables the GroupQuotas enforcement for the resource provider and the location specified. The
   * resource provider will start using the group quotas as the overall quota for the subscriptions
   * included in the GroupQuota. The subscriptions cannot request quota at subscription level.
   * The subscriptions share the GroupQuotaLimits assigned to the GroupQuota. If the GroupQuotaLimits is
   * used, then submit a groupQuotaLimit request for the specific resource - provider/location/resource.
   * Once the GroupQuota Enforcement is enabled then, it cannot be deleted or reverted back. To disable
   * GroupQuota Enforcement -
   *  1. Remove all the subscriptions from the groupQuota using the delete API for Subscriptions (Check
   * the example - GroupQuotaSubscriptions_Delete).
   *  2. Ten delete the GroupQuota (Check the example - GroupQuotas_Delete).
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLocationSettingsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GroupQuotaLocationSettingsCreateOrUpdateResponse>,
      GroupQuotaLocationSettingsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<GroupQuotaLocationSettingsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        managementGroupId,
        groupQuotaName,
        resourceProviderName,
        location,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      GroupQuotaLocationSettingsCreateOrUpdateResponse,
      OperationState<GroupQuotaLocationSettingsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Enables the GroupQuotas enforcement for the resource provider and the location specified. The
   * resource provider will start using the group quotas as the overall quota for the subscriptions
   * included in the GroupQuota. The subscriptions cannot request quota at subscription level.
   * The subscriptions share the GroupQuotaLimits assigned to the GroupQuota. If the GroupQuotaLimits is
   * used, then submit a groupQuotaLimit request for the specific resource - provider/location/resource.
   * Once the GroupQuota Enforcement is enabled then, it cannot be deleted or reverted back. To disable
   * GroupQuota Enforcement -
   *  1. Remove all the subscriptions from the groupQuota using the delete API for Subscriptions (Check
   * the example - GroupQuotaSubscriptions_Delete).
   *  2. Ten delete the GroupQuota (Check the example - GroupQuotas_Delete).
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLocationSettingsCreateOrUpdateOptionalParams,
  ): Promise<GroupQuotaLocationSettingsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      managementGroupId,
      groupQuotaName,
      resourceProviderName,
      location,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Enables the GroupQuotas enforcement for the resource provider and the location specified. The
   * resource provider will start using the group quotas as the overall quota for the subscriptions
   * included in the GroupQuota. The subscriptions cannot request quota at subscription level.
   * The subscriptions share the GroupQuotaLimits assigned to the GroupQuota. If the GroupQuotaLimits is
   * used, then submit a groupQuotaLimit request for the specific resource - provider/location/resource.
   * Once the GroupQuota Enforcement is enabled then, it cannot be deleted or reverted back. To disable
   * GroupQuota Enforcement -
   *  1. Remove all the subscriptions from the groupQuota using the delete API for Subscriptions (Check
   * the example - GroupQuotaSubscriptions_Delete).
   *  2. Ten delete the GroupQuota (Check the example - GroupQuotas_Delete).
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  async beginUpdate(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLocationSettingsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GroupQuotaLocationSettingsUpdateResponse>,
      GroupQuotaLocationSettingsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<GroupQuotaLocationSettingsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        managementGroupId,
        groupQuotaName,
        resourceProviderName,
        location,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      GroupQuotaLocationSettingsUpdateResponse,
      OperationState<GroupQuotaLocationSettingsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Enables the GroupQuotas enforcement for the resource provider and the location specified. The
   * resource provider will start using the group quotas as the overall quota for the subscriptions
   * included in the GroupQuota. The subscriptions cannot request quota at subscription level.
   * The subscriptions share the GroupQuotaLimits assigned to the GroupQuota. If the GroupQuotaLimits is
   * used, then submit a groupQuotaLimit request for the specific resource - provider/location/resource.
   * Once the GroupQuota Enforcement is enabled then, it cannot be deleted or reverted back. To disable
   * GroupQuota Enforcement -
   *  1. Remove all the subscriptions from the groupQuota using the delete API for Subscriptions (Check
   * the example - GroupQuotaSubscriptions_Delete).
   *  2. Ten delete the GroupQuota (Check the example - GroupQuotas_Delete).
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLocationSettingsUpdateOptionalParams,
  ): Promise<GroupQuotaLocationSettingsUpdateResponse> {
    const poller = await this.beginUpdate(
      managementGroupId,
      groupQuotaName,
      resourceProviderName,
      location,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the GroupQuotas enforcement settings for the ResourceProvider/location. The locations, where
   * GroupQuota enforcement is not enabled will return Not Found.
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  get(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLocationSettingsGetOptionalParams,
  ): Promise<GroupQuotaLocationSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        managementGroupId,
        groupQuotaName,
        resourceProviderName,
        location,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Returns only the list of the Azure regions settings, where the GroupQuotas enforcement is enabled.
   * The locations not included in GroupQuota Enforcement will not be listed, the regions in failed
   * status with listed as status Failed.
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param options The options parameters.
   */
  private _list(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    options?: GroupQuotaLocationSettingsListOptionalParams,
  ): Promise<GroupQuotaLocationSettingsListResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, groupQuotaName, resourceProviderName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    nextLink: string,
    options?: GroupQuotaLocationSettingsListNextOptionalParams,
  ): Promise<GroupQuotaLocationSettingsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        managementGroupId,
        groupQuotaName,
        resourceProviderName,
        nextLink,
        options,
      },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/locationSettings/{location}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GroupQuotasEnforcementResponse,
    },
    201: {
      bodyMapper: Mappers.GroupQuotasEnforcementResponse,
    },
    202: {
      bodyMapper: Mappers.GroupQuotasEnforcementResponse,
    },
    204: {
      bodyMapper: Mappers.GroupQuotasEnforcementResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.locationSettings,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.groupQuotaName,
    Parameters.resourceProviderName,
    Parameters.location,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/locationSettings/{location}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.GroupQuotasEnforcementResponse,
    },
    201: {
      bodyMapper: Mappers.GroupQuotasEnforcementResponse,
    },
    202: {
      bodyMapper: Mappers.GroupQuotasEnforcementResponse,
    },
    204: {
      bodyMapper: Mappers.GroupQuotasEnforcementResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.locationSettings,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.groupQuotaName,
    Parameters.resourceProviderName,
    Parameters.location,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/locationSettings/{location}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupQuotasEnforcementResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.groupQuotaName,
    Parameters.resourceProviderName,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/locationSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupQuotasEnforcementListResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.groupQuotaName,
    Parameters.resourceProviderName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupQuotasEnforcementListResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.groupQuotaName,
    Parameters.nextLink,
    Parameters.resourceProviderName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
