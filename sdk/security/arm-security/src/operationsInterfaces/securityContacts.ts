/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SecurityContact,
  SecurityContactsListOptionalParams,
  SecurityContactName,
  SecurityContactsGetOptionalParams,
  SecurityContactsGetResponse,
  SecurityContactsCreateOptionalParams,
  SecurityContactsCreateResponse,
  SecurityContactsDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SecurityContacts. */
export interface SecurityContacts {
  /**
   * List all security contact configurations for the subscription
   * @param options The options parameters.
   */
  list(
    options?: SecurityContactsListOptionalParams,
  ): PagedAsyncIterableIterator<SecurityContact>;
  /**
   * Get Default Security contact configurations for the subscription
   * @param securityContactName Name of the security contact object
   * @param options The options parameters.
   */
  get(
    securityContactName: SecurityContactName,
    options?: SecurityContactsGetOptionalParams,
  ): Promise<SecurityContactsGetResponse>;
  /**
   * Create security contact configurations for the subscription
   * @param securityContactName Name of the security contact object
   * @param securityContact Security contact object
   * @param options The options parameters.
   */
  create(
    securityContactName: SecurityContactName,
    securityContact: SecurityContact,
    options?: SecurityContactsCreateOptionalParams,
  ): Promise<SecurityContactsCreateResponse>;
  /**
   * Delete security contact configurations for the subscription
   * @param securityContactName Name of the security contact object
   * @param options The options parameters.
   */
  delete(
    securityContactName: SecurityContactName,
    options?: SecurityContactsDeleteOptionalParams,
  ): Promise<void>;
}
