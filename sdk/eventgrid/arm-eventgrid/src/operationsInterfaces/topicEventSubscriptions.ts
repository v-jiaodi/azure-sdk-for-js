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
  EventSubscription,
  TopicEventSubscriptionsListOptionalParams,
  TopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  TopicEventSubscriptionsGetDeliveryAttributesResponse,
  TopicEventSubscriptionsGetOptionalParams,
  TopicEventSubscriptionsGetResponse,
  TopicEventSubscriptionsCreateOrUpdateOptionalParams,
  TopicEventSubscriptionsCreateOrUpdateResponse,
  TopicEventSubscriptionsDeleteOptionalParams,
  EventSubscriptionUpdateParameters,
  TopicEventSubscriptionsUpdateOptionalParams,
  TopicEventSubscriptionsUpdateResponse,
  TopicEventSubscriptionsGetFullUrlOptionalParams,
  TopicEventSubscriptionsGetFullUrlResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TopicEventSubscriptions. */
export interface TopicEventSubscriptions {
  /**
   * List all event subscriptions that have been created for a specific topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    topicName: string,
    options?: TopicEventSubscriptionsListOptionalParams,
  ): PagedAsyncIterableIterator<EventSubscription>;
  /**
   * Get all delivery attributes for an event subscription for topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic.
   * @param eventSubscriptionName Name of the event subscription.
   * @param options The options parameters.
   */
  getDeliveryAttributes(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: TopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  ): Promise<TopicEventSubscriptionsGetDeliveryAttributesResponse>;
  /**
   * Get properties of an event subscription of a topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic.
   * @param eventSubscriptionName Name of the event subscription to be found.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: TopicEventSubscriptionsGetOptionalParams,
  ): Promise<TopicEventSubscriptionsGetResponse>;
  /**
   * Asynchronously creates a new event subscription or updates an existing event subscription.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 64 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the destination and filter
   *                              information.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: TopicEventSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TopicEventSubscriptionsCreateOrUpdateResponse>,
      TopicEventSubscriptionsCreateOrUpdateResponse
    >
  >;
  /**
   * Asynchronously creates a new event subscription or updates an existing event subscription.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 64 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the destination and filter
   *                              information.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: TopicEventSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<TopicEventSubscriptionsCreateOrUpdateResponse>;
  /**
   * Delete an existing event subscription for a topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic.
   * @param eventSubscriptionName Name of the event subscription to be deleted.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: TopicEventSubscriptionsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete an existing event subscription for a topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic.
   * @param eventSubscriptionName Name of the event subscription to be deleted.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: TopicEventSubscriptionsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Update an existing event subscription for a topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the domain.
   * @param eventSubscriptionName Name of the event subscription to be updated.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: TopicEventSubscriptionsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TopicEventSubscriptionsUpdateResponse>,
      TopicEventSubscriptionsUpdateResponse
    >
  >;
  /**
   * Update an existing event subscription for a topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the domain.
   * @param eventSubscriptionName Name of the event subscription to be updated.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: TopicEventSubscriptionsUpdateOptionalParams,
  ): Promise<TopicEventSubscriptionsUpdateResponse>;
  /**
   * Get the full endpoint URL for an event subscription for topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription.
   * @param options The options parameters.
   */
  getFullUrl(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: TopicEventSubscriptionsGetFullUrlOptionalParams,
  ): Promise<TopicEventSubscriptionsGetFullUrlResponse>;
}
