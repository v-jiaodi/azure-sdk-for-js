/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Container } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageClient } from "../storageClient";
import {
  ContainerCreateOptionalParams,
  ContainerCreateResponse,
  ContainerGetPropertiesOptionalParams,
  ContainerGetPropertiesResponse,
  ContainerDeleteOptionalParams,
  ContainerDeleteResponse,
  ContainerSetMetadataOptionalParams,
  ContainerSetMetadataResponse,
  ContainerGetAccessPolicyOptionalParams,
  ContainerGetAccessPolicyResponse,
  ContainerSetAccessPolicyOptionalParams,
  ContainerSetAccessPolicyResponse,
  ContainerRestoreOptionalParams,
  ContainerRestoreResponse,
  ContainerRenameOptionalParams,
  ContainerRenameResponse,
  ContainerSubmitBatchOptionalParams,
  ContainerSubmitBatchResponse,
  ContainerFilterBlobsOptionalParams,
  ContainerFilterBlobsResponse,
  ContainerAcquireLeaseOptionalParams,
  ContainerAcquireLeaseResponse,
  ContainerReleaseLeaseOptionalParams,
  ContainerReleaseLeaseResponse,
  ContainerRenewLeaseOptionalParams,
  ContainerRenewLeaseResponse,
  ContainerBreakLeaseOptionalParams,
  ContainerBreakLeaseResponse,
  ContainerChangeLeaseOptionalParams,
  ContainerChangeLeaseResponse,
  ContainerListBlobFlatSegmentOptionalParams,
  ContainerListBlobFlatSegmentResponse,
  ContainerListBlobHierarchySegmentOptionalParams,
  ContainerListBlobHierarchySegmentResponse,
  ContainerGetAccountInfoOptionalParams,
  ContainerGetAccountInfoResponse,
} from "../models";

/** Class containing Container operations. */
export class ContainerImpl implements Container {
  private readonly client: StorageClient;

  /**
   * Initialize a new instance of the class Container class.
   * @param client Reference to the service client
   */
  constructor(client: StorageClient) {
    this.client = client;
  }

  /**
   * creates a new container under the specified account. If the container with the same name already
   * exists, the operation fails
   * @param options The options parameters.
   */
  create(
    options?: ContainerCreateOptionalParams,
  ): Promise<ContainerCreateResponse> {
    return this.client.sendOperationRequest({ options }, createOperationSpec);
  }

  /**
   * returns all user-defined metadata and system properties for the specified container. The data
   * returned does not include the container's list of blobs
   * @param options The options parameters.
   */
  getProperties(
    options?: ContainerGetPropertiesOptionalParams,
  ): Promise<ContainerGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getPropertiesOperationSpec,
    );
  }

  /**
   * operation marks the specified container for deletion. The container and any blobs contained within
   * it are later deleted during garbage collection
   * @param options The options parameters.
   */
  delete(
    options?: ContainerDeleteOptionalParams,
  ): Promise<ContainerDeleteResponse> {
    return this.client.sendOperationRequest({ options }, deleteOperationSpec);
  }

  /**
   * operation sets one or more user-defined name-value pairs for the specified container.
   * @param options The options parameters.
   */
  setMetadata(
    options?: ContainerSetMetadataOptionalParams,
  ): Promise<ContainerSetMetadataResponse> {
    return this.client.sendOperationRequest(
      { options },
      setMetadataOperationSpec,
    );
  }

  /**
   * gets the permissions for the specified container. The permissions indicate whether container data
   * may be accessed publicly.
   * @param options The options parameters.
   */
  getAccessPolicy(
    options?: ContainerGetAccessPolicyOptionalParams,
  ): Promise<ContainerGetAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      { options },
      getAccessPolicyOperationSpec,
    );
  }

  /**
   * sets the permissions for the specified container. The permissions indicate whether blobs in a
   * container may be accessed publicly.
   * @param options The options parameters.
   */
  setAccessPolicy(
    options?: ContainerSetAccessPolicyOptionalParams,
  ): Promise<ContainerSetAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      { options },
      setAccessPolicyOperationSpec,
    );
  }

  /**
   * Restores a previously-deleted container.
   * @param options The options parameters.
   */
  restore(
    options?: ContainerRestoreOptionalParams,
  ): Promise<ContainerRestoreResponse> {
    return this.client.sendOperationRequest({ options }, restoreOperationSpec);
  }

  /**
   * Renames an existing container.
   * @param sourceContainerName Required.  Specifies the name of the container to rename.
   * @param options The options parameters.
   */
  rename(
    sourceContainerName: string,
    options?: ContainerRenameOptionalParams,
  ): Promise<ContainerRenameResponse> {
    return this.client.sendOperationRequest(
      { sourceContainerName, options },
      renameOperationSpec,
    );
  }

  /**
   * The Batch operation allows multiple API calls to be embedded into a single HTTP request.
   * @param contentLength The length of the request.
   * @param multipartContentType Required. The value of this header must be multipart/mixed with a batch
   *                             boundary. Example header value: multipart/mixed; boundary=batch_<GUID>
   * @param body Initial data
   * @param options The options parameters.
   */
  submitBatch(
    contentLength: number,
    multipartContentType: string,
    body: coreRestPipeline.RequestBodyType,
    options?: ContainerSubmitBatchOptionalParams,
  ): Promise<ContainerSubmitBatchResponse> {
    return this.client.sendOperationRequest(
      { contentLength, multipartContentType, body, options },
      submitBatchOperationSpec,
    );
  }

  /**
   * The Filter Blobs operation enables callers to list blobs in a container whose tags match a given
   * search expression.  Filter blobs searches within the given container.
   * @param options The options parameters.
   */
  filterBlobs(
    options?: ContainerFilterBlobsOptionalParams,
  ): Promise<ContainerFilterBlobsResponse> {
    return this.client.sendOperationRequest(
      { options },
      filterBlobsOperationSpec,
    );
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration can
   * be 15 to 60 seconds, or can be infinite
   * @param options The options parameters.
   */
  acquireLease(
    options?: ContainerAcquireLeaseOptionalParams,
  ): Promise<ContainerAcquireLeaseResponse> {
    return this.client.sendOperationRequest(
      { options },
      acquireLeaseOperationSpec,
    );
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration can
   * be 15 to 60 seconds, or can be infinite
   * @param leaseId Specifies the current lease ID on the resource.
   * @param options The options parameters.
   */
  releaseLease(
    leaseId: string,
    options?: ContainerReleaseLeaseOptionalParams,
  ): Promise<ContainerReleaseLeaseResponse> {
    return this.client.sendOperationRequest(
      { leaseId, options },
      releaseLeaseOperationSpec,
    );
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration can
   * be 15 to 60 seconds, or can be infinite
   * @param leaseId Specifies the current lease ID on the resource.
   * @param options The options parameters.
   */
  renewLease(
    leaseId: string,
    options?: ContainerRenewLeaseOptionalParams,
  ): Promise<ContainerRenewLeaseResponse> {
    return this.client.sendOperationRequest(
      { leaseId, options },
      renewLeaseOperationSpec,
    );
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration can
   * be 15 to 60 seconds, or can be infinite
   * @param options The options parameters.
   */
  breakLease(
    options?: ContainerBreakLeaseOptionalParams,
  ): Promise<ContainerBreakLeaseResponse> {
    return this.client.sendOperationRequest(
      { options },
      breakLeaseOperationSpec,
    );
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration can
   * be 15 to 60 seconds, or can be infinite
   * @param leaseId Specifies the current lease ID on the resource.
   * @param proposedLeaseId Proposed lease ID, in a GUID string format. The Blob service returns 400
   *                        (Invalid request) if the proposed lease ID is not in the correct format. See Guid Constructor
   *                        (String) for a list of valid GUID string formats.
   * @param options The options parameters.
   */
  changeLease(
    leaseId: string,
    proposedLeaseId: string,
    options?: ContainerChangeLeaseOptionalParams,
  ): Promise<ContainerChangeLeaseResponse> {
    return this.client.sendOperationRequest(
      { leaseId, proposedLeaseId, options },
      changeLeaseOperationSpec,
    );
  }

  /**
   * [Update] The List Blobs operation returns a list of the blobs under the specified container
   * @param options The options parameters.
   */
  listBlobFlatSegment(
    options?: ContainerListBlobFlatSegmentOptionalParams,
  ): Promise<ContainerListBlobFlatSegmentResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBlobFlatSegmentOperationSpec,
    );
  }

  /**
   * [Update] The List Blobs operation returns a list of the blobs under the specified container
   * @param delimiter When the request includes this parameter, the operation returns a BlobPrefix
   *                  element in the response body that acts as a placeholder for all blobs whose names begin with the
   *                  same substring up to the appearance of the delimiter character. The delimiter may be a single
   *                  character or a string.
   * @param options The options parameters.
   */
  listBlobHierarchySegment(
    delimiter: string,
    options?: ContainerListBlobHierarchySegmentOptionalParams,
  ): Promise<ContainerListBlobHierarchySegmentResponse> {
    return this.client.sendOperationRequest(
      { delimiter, options },
      listBlobHierarchySegmentOperationSpec,
    );
  }

  /**
   * Returns the sku name and account kind
   * @param options The options parameters.
   */
  getAccountInfo(
    options?: ContainerGetAccountInfoOptionalParams,
  ): Promise<ContainerGetAccountInfoResponse> {
    return this.client.sendOperationRequest(
      { options },
      getAccountInfoOperationSpec,
    );
  }
}
// Operation Specifications
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.ContainerCreateHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerCreateExceptionHeaders,
    },
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.restype2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.access,
    Parameters.defaultEncryptionScope,
    Parameters.preventEncryptionScopeOverride,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const getPropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "GET",
  responses: {
    200: {
      headersMapper: Mappers.ContainerGetPropertiesHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerGetPropertiesExceptionHeaders,
    },
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.restype2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "DELETE",
  responses: {
    202: {
      headersMapper: Mappers.ContainerDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerDeleteExceptionHeaders,
    },
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.restype2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const setMetadataOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ContainerSetMetadataHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerSetMetadataExceptionHeaders,
    },
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp6,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const getAccessPolicyOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "SignedIdentifier" },
          },
        },
        serializedName: "SignedIdentifiers",
        xmlName: "SignedIdentifiers",
        xmlIsWrapped: true,
        xmlElementName: "SignedIdentifier",
      },
      headersMapper: Mappers.ContainerGetAccessPolicyHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerGetAccessPolicyExceptionHeaders,
    },
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp7,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.leaseId,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const setAccessPolicyOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ContainerSetAccessPolicyHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerSetAccessPolicyExceptionHeaders,
    },
  },
  requestBody: Parameters.containerAcl,
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp7,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.version,
    Parameters.requestId,
    Parameters.access,
    Parameters.leaseId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer,
};
const restoreOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.ContainerRestoreHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerRestoreExceptionHeaders,
    },
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp8,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.deletedContainerName,
    Parameters.deletedContainerVersion,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const renameOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ContainerRenameHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerRenameExceptionHeaders,
    },
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp9,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.sourceContainerName,
    Parameters.sourceLeaseId,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const submitBatchOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: {
        type: { name: "Stream" },
        serializedName: "parsedResponse",
      },
      headersMapper: Mappers.ContainerSubmitBatchHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerSubmitBatchExceptionHeaders,
    },
  },
  requestBody: Parameters.body,
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp4,
    Parameters.restype2,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.version,
    Parameters.requestId,
    Parameters.contentLength,
    Parameters.multipartContentType,
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer,
};
const filterBlobsOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FilterBlobSegment,
      headersMapper: Mappers.ContainerFilterBlobsHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerFilterBlobsExceptionHeaders,
    },
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.marker,
    Parameters.maxPageSize,
    Parameters.comp5,
    Parameters.where,
    Parameters.restype2,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const acquireLeaseOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.ContainerAcquireLeaseHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerAcquireLeaseExceptionHeaders,
    },
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp10,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.action,
    Parameters.duration,
    Parameters.proposedLeaseId,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const releaseLeaseOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ContainerReleaseLeaseHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerReleaseLeaseExceptionHeaders,
    },
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp10,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.action1,
    Parameters.leaseId1,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const renewLeaseOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ContainerRenewLeaseHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerRenewLeaseExceptionHeaders,
    },
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp10,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.leaseId1,
    Parameters.action2,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const breakLeaseOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    202: {
      headersMapper: Mappers.ContainerBreakLeaseHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerBreakLeaseExceptionHeaders,
    },
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp10,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.action3,
    Parameters.breakPeriod,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const changeLeaseOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.ContainerChangeLeaseHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerChangeLeaseExceptionHeaders,
    },
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp10,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.leaseId1,
    Parameters.action4,
    Parameters.proposedLeaseId1,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const listBlobFlatSegmentOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListBlobsFlatSegmentResponse,
      headersMapper: Mappers.ContainerListBlobFlatSegmentHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerListBlobFlatSegmentExceptionHeaders,
    },
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp2,
    Parameters.prefix,
    Parameters.marker,
    Parameters.maxPageSize,
    Parameters.restype2,
    Parameters.include1,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const listBlobHierarchySegmentOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListBlobsHierarchySegmentResponse,
      headersMapper: Mappers.ContainerListBlobHierarchySegmentHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerListBlobHierarchySegmentExceptionHeaders,
    },
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp2,
    Parameters.prefix,
    Parameters.marker,
    Parameters.maxPageSize,
    Parameters.restype2,
    Parameters.include1,
    Parameters.delimiter,
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
  ],
  isXML: true,
  serializer: xmlSerializer,
};
const getAccountInfoOperationSpec: coreClient.OperationSpec = {
  path: "/{containerName}",
  httpMethod: "GET",
  responses: {
    200: {
      headersMapper: Mappers.ContainerGetAccountInfoHeaders,
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerGetAccountInfoExceptionHeaders,
    },
  },
  queryParameters: [Parameters.comp, Parameters.restype1],
  urlParameters: [Parameters.url],
  headerParameters: [Parameters.version, Parameters.accept1],
  isXML: true,
  serializer: xmlSerializer,
};
