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
  ManagedCluster,
  ManagedClustersListByResourceGroupOptionalParams,
  ManagedClustersListBySubscriptionOptionalParams,
  ManagedClustersGetOptionalParams,
  ManagedClustersGetResponse,
  ManagedClustersCreateOrUpdateOptionalParams,
  ManagedClustersCreateOrUpdateResponse,
  ManagedClusterUpdateParameters,
  ManagedClustersUpdateOptionalParams,
  ManagedClustersUpdateResponse,
  ManagedClustersDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedClusters. */
export interface ManagedClusters {
  /**
   * Gets all Service Fabric cluster resources created or in the process of being created in the resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ManagedClustersListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ManagedCluster>;
  /**
   * Gets all Service Fabric cluster resources created or in the process of being created in the
   * subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ManagedClustersListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<ManagedCluster>;
  /**
   * Get a Service Fabric managed cluster resource created or in the process of being created in the
   * specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    options?: ManagedClustersGetOptionalParams,
  ): Promise<ManagedClustersGetResponse>;
  /**
   * Create or update a Service Fabric managed cluster resource with the specified name.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param parameters The cluster resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    parameters: ManagedCluster,
    options?: ManagedClustersCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedClustersCreateOrUpdateResponse>,
      ManagedClustersCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a Service Fabric managed cluster resource with the specified name.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param parameters The cluster resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    parameters: ManagedCluster,
    options?: ManagedClustersCreateOrUpdateOptionalParams,
  ): Promise<ManagedClustersCreateOrUpdateResponse>;
  /**
   * Update the tags of of a Service Fabric managed cluster resource with the specified name.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param parameters The managed cluster resource updated tags.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    clusterName: string,
    parameters: ManagedClusterUpdateParameters,
    options?: ManagedClustersUpdateOptionalParams,
  ): Promise<ManagedClustersUpdateResponse>;
  /**
   * Delete a Service Fabric managed cluster resource with the specified name.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    options?: ManagedClustersDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a Service Fabric managed cluster resource with the specified name.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: ManagedClustersDeleteOptionalParams,
  ): Promise<void>;
}
