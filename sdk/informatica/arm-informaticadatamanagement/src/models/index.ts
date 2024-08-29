/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** The response of a InformaticaOrganizationResource list operation. */
export interface InformaticaOrganizationResourceListResult {
  /** The InformaticaOrganizationResource items on this page */
  value: InformaticaOrganizationResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Properties specific to the Informatica DataManagement Organization resource. */
export interface OrganizationProperties {
  /**
   * Provisioning State of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** Informatica Organization properties. */
  informaticaProperties?: InformaticaProperties;
  /** Marketplace details. */
  marketplaceDetails?: MarketplaceDetails;
  /** User details */
  userDetails?: UserDetails;
  /** Company details. */
  companyDetails?: CompanyDetails;
  /** Link Organization */
  linkOrganization?: LinkOrganization;
}

/** Properties of the Informatica organization. */
export interface InformaticaProperties {
  /** Organization id */
  organizationId?: string;
  /** Organization name */
  organizationName?: string;
  /** Informatica organization region */
  informaticaRegion?: string;
  /** Single sing on URL for informatica organization */
  singleSignOnUrl?: string;
}

/** Marketplace details. */
export interface MarketplaceDetails {
  /** Marketplace Subscription Id */
  marketplaceSubscriptionId?: string;
  /** Marketplace offer details. */
  offerDetails: OfferDetails;
}

/** Details of the product offering. */
export interface OfferDetails {
  /** Id of the product publisher. */
  publisherId: string;
  /** Id of the product offering. */
  offerId: string;
  /** Id of the product offer plan. */
  planId: string;
  /** Name of the product offer plan. */
  planName: string;
  /** Offer plan term unit. */
  termUnit?: string;
  /** Offer plan term id. */
  termId: string;
}

/** User Info of Informatica Organization resource. */
export interface UserDetails {
  /** User first name. */
  firstName?: string;
  /** User last name. */
  lastName?: string;
  /** User email address. */
  emailAddress?: string;
  /** UPN of user */
  upn?: string;
  /** Phone number of the user used by for contacting them if needed */
  phoneNumber?: string;
}

/** Company Details. */
export interface CompanyDetails {
  /** company Name */
  companyName?: string;
  /** Office Address */
  officeAddress?: string;
  /** Country name */
  country?: string;
  /** Domain name */
  domain?: string;
  /** Business phone number */
  business?: string;
  /** Number Of Employees */
  numberOfEmployees?: number;
}

/** Link Organization */
export interface LinkOrganization {
  /** Link organization token */
  token?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** The template for adding optional properties. */
export interface InformaticaOrganizationResourceUpdate {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** Patchable PropertieInformaticaOrganizationPropertiesUpdates of the Organization observability resource */
  properties?: OrganizationPropertiesCustomUpdate;
}

/** Patchable Properties of the Informatica Organization resource */
export interface OrganizationPropertiesCustomUpdate {
  /** Informatica Organization properties */
  informaticaOrganizationProperties?: InformaticaOrganizationResourceUpdate;
  /** Marketplace details */
  marketplaceDetails?: MarketplaceDetailsUpdate;
  /** User details */
  userDetails?: UserDetailsUpdate;
  /** Company Details */
  companyDetails?: CompanyDetailsUpdate;
  /** Existing Resource Id */
  existingResourceId?: string;
}

/** Marketplace details */
export interface MarketplaceDetailsUpdate {
  /** Marketplace Subscription Id */
  marketplaceSubscriptionId?: string;
  /** Marketplace offer details. */
  offerDetails?: OfferDetailsUpdate;
}

/** Details of the product offering */
export interface OfferDetailsUpdate {
  /** Id of the product publisher. */
  publisherId?: string;
  /** Id of the product offering. */
  offerId?: string;
  /** Id of the product offer plan. */
  planId?: string;
  /** Name of the product offer plan. */
  planName?: string;
  /** Offer plan term unit. */
  termUnit?: string;
  /** Offer plan term id. */
  termId?: string;
}

/** User Info of Informatica Organization resource */
export interface UserDetailsUpdate {
  /** User first name. */
  firstName?: string;
  /** User last name. */
  lastName?: string;
  /** User email address. */
  emailAddress?: string;
  /** UPN of user */
  upn?: string;
  /** Phone number of the user used by for contacting them if needed */
  phoneNumber?: string;
}

/** Company details of Informatica Organization resource */
export interface CompanyDetailsUpdate {
  /** company Name */
  companyName?: string;
  /** Office Address */
  officeAddress?: string;
  /** Country name */
  country?: string;
  /** Domain name */
  domain?: string;
  /** Business phone number */
  business?: string;
  /** Number Of Employees */
  numberOfEmployees?: number;
}

/** A list of serverless runtime resources as fetched using the informatica APIs */
export interface InformaticaServerlessRuntimeResourceList {
  /** List of runtime resources for the fetch all API */
  informaticaRuntimeResources: InfaRuntimeResourceFetchMetaData[];
}

/** Informatica runtime resource metadata as received via the informatica fetch all runtime environments API */
export interface InfaRuntimeResourceFetchMetaData {
  /** Environment name */
  name: string;
  /** Created time */
  createdTime: string;
  /** Updated Time */
  updatedTime: string;
  /** Created by */
  createdBy: string;
  /** Last Updated by */
  updatedBy: string;
  /** Informatica serverless runtime id */
  id: string;
  /** Environment Type */
  type: RuntimeType;
  /** Status of the environment */
  status: string;
  /** Display message for the given status */
  statusLocalized: string;
  /** status message */
  statusMessage: string;
  /** Serverless Config Properties */
  serverlessConfigProperties: InfaServerlessFetchConfigProperties;
  /** Description of the runtime resource */
  description?: string;
}

/** InfaServerlessFetchConfigProperties for the fetch all serverless API as received from informatica API response */
export interface InfaServerlessFetchConfigProperties {
  /** subnet name */
  subnet?: string;
  /** applicationType name */
  applicationType?: string;
  /** Resource group name */
  resourceGroupName?: string;
  /** Advanced custom properties */
  advancedCustomProperties?: string;
  /** Supplementary File location */
  supplementaryFileLocation?: string;
  /** Serverless Account Platform */
  platform?: string;
  /** Tags for the resource */
  tags?: string;
  /** virtual network */
  vnet?: string;
  /** Execution timeout */
  executionTimeout?: string;
  /** Compute Units */
  computeUnits?: string;
  /** Tenant ID */
  tenantId?: string;
  /** subscription ID */
  subscriptionId?: string;
  /** region name for the runtime environment */
  region?: string;
  /** Serverless Arm Resource ID */
  serverlessArmResourceId?: string;
}

/** Serverless Runtime environment Metadata response. */
export interface ServerlessMetadataResponse {
  /** type of the runtime environment. */
  type?: RuntimeType;
  /** serverless config properties */
  serverlessConfigProperties?: ServerlessConfigProperties;
  /** serverless runtime config properties */
  serverlessRuntimeConfigProperties?: ServerlessRuntimeConfigProperties;
}

/** Metadata Serverless Config Properties */
export interface ServerlessConfigProperties {
  /** Platform types */
  platform?: PlatformType;
  /** List of application types supported by informatica */
  applicationTypes?: ApplicationTypeMetadata[];
  /** The list of compute units with possible array of values */
  computeUnits?: ComputeUnitsMetadata[];
  /** Serverless Runtime execution timeout */
  executionTimeout?: string;
  /** List of supported serverless informatica regions */
  regions?: RegionsMetadata[];
}

/** Informatica Serverless Runtime Application type Metadata */
export interface ApplicationTypeMetadata {
  /** Application type name */
  name?: string;
  /** Application type value */
  value?: string;
}

/** Informatica Serverless Runtime Application type Metadata */
export interface ComputeUnitsMetadata {
  /** ComputeUnit name */
  name?: string;
  /** ComputeUnit value */
  value?: string[];
}

/** Informatica Serverless Runtime Regions Metadata */
export interface RegionsMetadata {
  /** Region Id */
  id?: string;
  /** Region name */
  name?: string;
}

/** Serverless Runtime config properties. */
export interface ServerlessRuntimeConfigProperties {
  /** The List of Informatica Serverless Runtime CDI Config Properties. */
  cdiConfigProps?: CdiConfigProps[];
  /** The List of Informatica Serverless Runtime CDIE Config Properties. */
  cdieConfigProps?: CdiConfigProps[];
}

/** Informatica CDI Configuration Properties. */
export interface CdiConfigProps {
  /** EngineName of the application config. */
  engineName: string;
  /** EngineVersion of the application config. */
  engineVersion: string;
  /** ApplicationConfigs of the CDI or CDIE. */
  applicationConfigs: ApplicationConfigs[];
}

/** Application configs */
export interface ApplicationConfigs {
  /** Type of the application config. */
  type: string;
  /** Name of the application config. */
  name: string;
  /** Value of the application config. */
  value: string;
  /** Platform type of the application config. */
  platform: string;
  /** Customized value of the application config. */
  customized: string;
  /** Default value of the application config. */
  defaultValue: string;
}

/** The response of a InformaticaServerlessRuntimeResource list operation. */
export interface InformaticaServerlessRuntimeResourceListResult {
  /** The InformaticaServerlessRuntimeResource items on this page */
  value: InformaticaServerlessRuntimeResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Serverless Runtime properties. */
export interface InformaticaServerlessRuntimeProperties {
  /**
   * Provisioning State of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** description of the serverless runtime. */
  description?: string;
  /** Platform type of the Serverless Runtime. */
  platform?: PlatformType;
  /** Application type of the Serverless Runtime environment. */
  applicationType?: ApplicationType;
  /** Compute units of the serverless runtime. */
  computeUnits?: string;
  /** Serverless Execution timeout */
  executionTimeout?: string;
  /** Serverless account creation location */
  serverlessAccountLocation: string;
  /** Informatica Serverless Network profile properties. */
  serverlessRuntimeNetworkProfile?: ServerlessRuntimeNetworkProfile;
  /** String KV pairs indicating Advanced custom properties. */
  advancedCustomProperties?: AdvancedCustomProperties[];
  /** Supplementary file location. */
  supplementaryFileLocation?: string;
  /** Serverless config properties */
  serverlessRuntimeConfig?: ServerlessRuntimeConfigProperties;
  /** Serverless Runtime Tags */
  serverlessRuntimeTags?: ServerlessRuntimeTag[];
  /** Serverless runtime user context properties */
  serverlessRuntimeUserContextProperties?: ServerlessRuntimeUserContextProperties;
}

/** Informatica Serverless Runtime Network Profile. */
export interface ServerlessRuntimeNetworkProfile {
  /** Network Interface Configuration Profile */
  networkInterfaceConfiguration: NetworkInterfaceConfiguration;
}

/** Informatica Serverless Runtime Network Interface configurations. */
export interface NetworkInterfaceConfiguration {
  /** Virtual network resource id */
  vnetId: string;
  /** Virtual network subnet resource id */
  subnetId: string;
  /** Virtual network resource guid */
  vnetResourceGuid?: string;
}

/** Informatica Serverless advanced custom properties */
export interface AdvancedCustomProperties {
  /** advanced custom properties key */
  key?: string;
  /** advanced custom properties value */
  value?: string;
}

/** Serverless Runtime Tags */
export interface ServerlessRuntimeTag {
  /** The name (also known as the key) of the tag. */
  name?: string;
  /** The value of the tag. */
  value?: string;
}

/** Informatica Serverless Runtime User context properties */
export interface ServerlessRuntimeUserContextProperties {
  /** User context token for OBO flow. */
  userContextToken: string;
}

/** The template for adding optional properties. */
export interface InformaticaServerlessRuntimeResourceUpdate {
  /** Patchable PropertieInformaticaOrganizationPropertiesUpdates of the Organization observability resource */
  properties?: ServerlessRuntimePropertiesCustomUpdate;
}

/** Patchable Properties of the Informatica Serverless Runtime resource */
export interface ServerlessRuntimePropertiesCustomUpdate {
  /** description of the serverless runtime. */
  description?: string;
  /** Platform type of the Serverless Runtime. */
  platform?: PlatformType;
  /** Application type of the Serverless Runtime environment. */
  applicationType?: ApplicationType;
  /** Compute units of the serverless runtime. */
  computeUnits?: string;
  /** Serverless Execution timeout */
  executionTimeout?: string;
  /** Serverless account creation location */
  serverlessAccountLocation?: string;
  /** Informatica Serverless Network profile properties. */
  serverlessRuntimeNetworkProfile?: ServerlessRuntimeNetworkProfileUpdate;
  /** String KV pairs indicating Advanced custom properties. */
  advancedCustomProperties?: AdvancedCustomProperties[];
  /** Supplementary file location. */
  supplementaryFileLocation?: string;
  /** Serverless config properties */
  serverlessRuntimeConfig?: ServerlessRuntimeConfigPropertiesUpdate;
  /** Serverless Runtime Tags */
  serverlessRuntimeTags?: ServerlessRuntimeTag[];
  /** Serverless runtime user context properties */
  serverlessRuntimeUserContextProperties?: ServerlessRuntimeUserContextPropertiesUpdate;
}

/** Informatica Serverless Network profile properties update. */
export interface ServerlessRuntimeNetworkProfileUpdate {
  /** Network Interface Configuration Profile Update */
  networkInterfaceConfiguration?: NetworkInterfaceConfigurationUpdate;
}

/** The template for adding optional properties. */
export interface NetworkInterfaceConfigurationUpdate {
  /** Virtual network resource id */
  vnetId?: string;
  /** Virtual network subnet resource id */
  subnetId?: string;
  /** Virtual network resource guid */
  vnetResourceGuid?: string;
}

/** The template for adding optional properties. */
export interface ServerlessRuntimeConfigPropertiesUpdate {
  /** The List of Informatica Serverless Runtime CDI Config Properties. */
  cdiConfigProps?: CdiConfigProps[];
  /** The List of Informatica Serverless Runtime CDIE Config Properties. */
  cdieConfigProps?: CdiConfigProps[];
}

/** The template for adding optional properties. */
export interface ServerlessRuntimeUserContextPropertiesUpdate {
  /** User context token for OBO flow. */
  userContextToken?: string;
}

/** Model for the check dependencies API for an informatica serverless runtime resource */
export interface CheckDependenciesResponse {
  /** Count of dependencies */
  count: number;
  /** id of resource */
  id: string;
  /** List of dependencies */
  references: ServerlessRuntimeDependency[];
}

/** Dependency reference for a serverless runtime resource */
export interface ServerlessRuntimeDependency {
  /** Dependency ID */
  id: string;
  /** Application context ID */
  appContextId: string;
  /** Dependency path */
  path: string;
  /** document type */
  documentType: string;
  /** description of Dependency */
  description: string;
  /** Last Update Time */
  lastUpdatedTime: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** An Organization Resource by Informatica. */
export interface InformaticaOrganizationResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: OrganizationProperties;
}

/** A Serverless Runtime environment  resource by Informatica. */
export interface InformaticaServerlessRuntimeResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: InformaticaServerlessRuntimeProperties;
}

/** Defines headers for Organizations_createOrUpdate operation. */
export interface OrganizationsCreateOrUpdateHeaders {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  retryAfter?: number;
}

/** Defines headers for Organizations_delete operation. */
export interface OrganizationsDeleteHeaders {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  retryAfter?: number;
}

/** Defines headers for ServerlessRuntimes_createOrUpdate operation. */
export interface ServerlessRuntimesCreateOrUpdateHeaders {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  retryAfter?: number;
}

/** Defines headers for ServerlessRuntimes_delete operation. */
export interface ServerlessRuntimesDeleteHeaders {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  retryAfter?: number;
}

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** User */
  User = "user",
  /** System */
  System = "system",
  /** UserSystem */
  UserSystem = "user,system",
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal",
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Organization resource creation request accepted */
  Accepted = "Accepted",
  /** Organization resource creation started */
  Creating = "Creating",
  /** Organization resource is being updated */
  Updating = "Updating",
  /** Organization resource deletion started */
  Deleting = "Deleting",
  /** Organization resource creation successful */
  Succeeded = "Succeeded",
  /** Organization resource creation failed */
  Failed = "Failed",
  /** Organization resource creation canceled */
  Canceled = "Canceled",
  /** Organization resource is deleted */
  Deleted = "Deleted",
  /** Organization resource state is unknown */
  NotSpecified = "NotSpecified",
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted**: Organization resource creation request accepted \
 * **Creating**: Organization resource creation started \
 * **Updating**: Organization resource is being updated \
 * **Deleting**: Organization resource deletion started \
 * **Succeeded**: Organization resource creation successful \
 * **Failed**: Organization resource creation failed \
 * **Canceled**: Organization resource creation canceled \
 * **Deleted**: Organization resource is deleted \
 * **NotSpecified**: Organization resource state is unknown
 */
export type ProvisioningState = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key",
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link RuntimeType} that the service accepts. */
export enum KnownRuntimeType {
  /** Serverless Runtime type */
  Serverless = "SERVERLESS",
}

/**
 * Defines values for RuntimeType. \
 * {@link KnownRuntimeType} can be used interchangeably with RuntimeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SERVERLESS**: Serverless Runtime type
 */
export type RuntimeType = string;

/** Known values of {@link PlatformType} that the service accepts. */
export enum KnownPlatformType {
  /** Azure platform type */
  Azure = "AZURE",
}

/**
 * Defines values for PlatformType. \
 * {@link KnownPlatformType} can be used interchangeably with PlatformType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AZURE**: Azure platform type
 */
export type PlatformType = string;

/** Known values of {@link ApplicationType} that the service accepts. */
export enum KnownApplicationType {
  /** Data Integration */
  CDI = "CDI",
  /** Advanced Data Integration */
  Cdie = "CDIE",
}

/**
 * Defines values for ApplicationType. \
 * {@link KnownApplicationType} can be used interchangeably with ApplicationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **CDI**: Data Integration \
 * **CDIE**: Advanced Data Integration
 */
export type ApplicationType = string;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface OrganizationsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type OrganizationsListBySubscriptionResponse =
  InformaticaOrganizationResourceListResult;

/** Optional parameters. */
export interface OrganizationsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type OrganizationsListByResourceGroupResponse =
  InformaticaOrganizationResourceListResult;

/** Optional parameters. */
export interface OrganizationsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type OrganizationsGetResponse = InformaticaOrganizationResource;

/** Optional parameters. */
export interface OrganizationsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type OrganizationsCreateOrUpdateResponse =
  InformaticaOrganizationResource;

/** Optional parameters. */
export interface OrganizationsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type OrganizationsUpdateResponse = InformaticaOrganizationResource;

/** Optional parameters. */
export interface OrganizationsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the delete operation. */
export type OrganizationsDeleteResponse = OrganizationsDeleteHeaders;

/** Optional parameters. */
export interface OrganizationsGetAllServerlessRuntimesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllServerlessRuntimes operation. */
export type OrganizationsGetAllServerlessRuntimesResponse =
  InformaticaServerlessRuntimeResourceList;

/** Optional parameters. */
export interface OrganizationsGetServerlessMetadataOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getServerlessMetadata operation. */
export type OrganizationsGetServerlessMetadataResponse =
  ServerlessMetadataResponse;

/** Optional parameters. */
export interface OrganizationsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type OrganizationsListBySubscriptionNextResponse =
  InformaticaOrganizationResourceListResult;

/** Optional parameters. */
export interface OrganizationsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type OrganizationsListByResourceGroupNextResponse =
  InformaticaOrganizationResourceListResult;

/** Optional parameters. */
export interface ServerlessRuntimesListByInformaticaOrganizationResourceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByInformaticaOrganizationResource operation. */
export type ServerlessRuntimesListByInformaticaOrganizationResourceResponse =
  InformaticaServerlessRuntimeResourceListResult;

/** Optional parameters. */
export interface ServerlessRuntimesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ServerlessRuntimesGetResponse =
  InformaticaServerlessRuntimeResource;

/** Optional parameters. */
export interface ServerlessRuntimesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type ServerlessRuntimesCreateOrUpdateResponse =
  InformaticaServerlessRuntimeResource;

/** Optional parameters. */
export interface ServerlessRuntimesUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type ServerlessRuntimesUpdateResponse =
  InformaticaServerlessRuntimeResource;

/** Optional parameters. */
export interface ServerlessRuntimesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the delete operation. */
export type ServerlessRuntimesDeleteResponse = ServerlessRuntimesDeleteHeaders;

/** Optional parameters. */
export interface ServerlessRuntimesCheckDependenciesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkDependencies operation. */
export type ServerlessRuntimesCheckDependenciesResponse =
  CheckDependenciesResponse;

/** Optional parameters. */
export interface ServerlessRuntimesServerlessResourceByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the serverlessResourceById operation. */
export type ServerlessRuntimesServerlessResourceByIdResponse =
  InformaticaServerlessRuntimeResource;

/** Optional parameters. */
export interface ServerlessRuntimesStartFailedServerlessRuntimeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ServerlessRuntimesListByInformaticaOrganizationResourceNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByInformaticaOrganizationResourceNext operation. */
export type ServerlessRuntimesListByInformaticaOrganizationResourceNextResponse =
  InformaticaServerlessRuntimeResourceListResult;

/** Optional parameters. */
export interface InformaticaDataManagementOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
