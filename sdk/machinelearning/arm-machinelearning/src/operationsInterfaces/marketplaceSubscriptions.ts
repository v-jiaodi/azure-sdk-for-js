/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  MarketplaceSubscription,
  MarketplaceSubscriptionsListOptionalParams,
  MarketplaceSubscriptionsDeleteOptionalParams,
  MarketplaceSubscriptionsDeleteResponse,
  MarketplaceSubscriptionsGetOptionalParams,
  MarketplaceSubscriptionsGetResponse,
  MarketplaceSubscriptionsCreateOrUpdateOptionalParams,
  MarketplaceSubscriptionsCreateOrUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a MarketplaceSubscriptions. */
export interface MarketplaceSubscriptions {
  /**
   * List containers.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: MarketplaceSubscriptionsListOptionalParams,
  ): PagedAsyncIterableIterator<MarketplaceSubscription>;
  /**
   * Delete Marketplace Subscription (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Marketplace Subscription name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: MarketplaceSubscriptionsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<MarketplaceSubscriptionsDeleteResponse>,
      MarketplaceSubscriptionsDeleteResponse
    >
  >;
  /**
   * Delete Marketplace Subscription (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Marketplace Subscription name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: MarketplaceSubscriptionsDeleteOptionalParams,
  ): Promise<MarketplaceSubscriptionsDeleteResponse>;
  /**
   * Get container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: MarketplaceSubscriptionsGetOptionalParams,
  ): Promise<MarketplaceSubscriptionsGetResponse>;
  /**
   * Create or update Marketplace Subscription (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Marketplace Subscription name.
   * @param body Marketplace Subscription entity to apply during operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: MarketplaceSubscription,
    options?: MarketplaceSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<MarketplaceSubscriptionsCreateOrUpdateResponse>,
      MarketplaceSubscriptionsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update Marketplace Subscription (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Marketplace Subscription name.
   * @param body Marketplace Subscription entity to apply during operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: MarketplaceSubscription,
    options?: MarketplaceSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<MarketplaceSubscriptionsCreateOrUpdateResponse>;
}
