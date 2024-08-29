// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { TokenCredential } from "@azure/core-auth";
import { StorageContextClient } from "./StorageContextClient";
import { StorageClient as StorageClientContext } from "./generated/src";
import { Pipeline, PipelineLike, StoragePipelineOptions } from "./Pipeline";
import { BlobServiceClient, AnonymousCredential } from "@azure/storage-blob";
import { StorageSharedKeyCredential } from "@azure/storage-blob";
import { toBlobEndpointUrl, toDfsEndpointUrl } from "./transforms";
import { escapeURLPath, getAccountNameFromUrl, getURLScheme, iEqual } from "./utils/utils.common";
import { ExtendedServiceClientOptions } from "@azure/core-http-compat";
import { HttpClient, Pipeline as CorePipeline } from "@azure/core-rest-pipeline";
import { OperationTracingOptions } from "@azure/core-tracing";

/**
 * An interface for options common to every remote operation.
 */
export interface CommonOptions {
  tracingOptions?: OperationTracingOptions;
}

// This function relies on the Pipeline already being initialized by a storage-blob client
function getCoreClientOptions(pipeline: Pipeline): ExtendedServiceClientOptions {
  const { httpClient: v1Client, ...restOptions } = pipeline.options as StoragePipelineOptions;
  const httpClient: HttpClient = (pipeline as any)._coreHttpClient;
  if (!httpClient) {
    throw new Error("Pipeline not correctly initialized; missing V2 HttpClient");
  }

  const corePipeline: CorePipeline = (pipeline as any)._corePipeline;
  if (!corePipeline) {
    throw new Error("Pipeline not correctly initialized; missing V2 Pipeline");
  }
  return {
    ...restOptions,
    allowInsecureConnection: true,
    httpClient,
    pipeline: corePipeline,
  };
}

/**
 * A StorageClient represents a based URL class for {@link BlobServiceClient}, {@link ContainerClient}
 * and etc.
 */
export abstract class StorageClient {
  /**
   * Encoded URL string value.
   */
  public readonly url: string;

  public readonly accountName: string;

  /**
   * Encoded URL string value for corresponding blob endpoint.
   */
  protected readonly blobEndpointUrl: string;

  /**
   * Encoded URL string value for corresponding dfs endpoint.
   */
  protected readonly dfsEndpointUrl: string;

  /**
   * Request policy pipeline.
   *
   * @internal
   */
  protected readonly pipeline: Pipeline;

  /**
   * Such as AnonymousCredential, StorageSharedKeyCredential or any credential from the `@azure/identity` package to authenticate requests to the service. You can also provide an object that implements the TokenCredential interface. If not specified, AnonymousCredential is used.
   */
  public readonly credential: StorageSharedKeyCredential | AnonymousCredential | TokenCredential;

  /**
   * StorageClient is a reference to protocol layer operations entry, which is
   * generated by AutoRest generator.
   */
  protected readonly storageClientContext: StorageClientContext;

  /**
   * storageClientContextWithBlobEndpoint is a reference to protocol layer operations entry, which is
   * generated by AutoRest generator, with its url pointing to the Blob endpoint.
   */
  protected readonly storageClientContextToBlobEndpoint: StorageClientContext;

  /**
   */
  protected readonly isHttps: boolean;

  /**
   * Creates an instance of StorageClient.
   * @param url - url to resource
   * @param pipeline - request policy pipeline.
   */
  protected constructor(url: string, pipeline: PipelineLike) {
    // URL should be encoded and only once, protocol layer shouldn't encode URL again
    this.url = escapeURLPath(url);
    this.blobEndpointUrl = toBlobEndpointUrl(this.url);
    this.dfsEndpointUrl = toDfsEndpointUrl(this.url);
    this.accountName = getAccountNameFromUrl(this.blobEndpointUrl);
    this.pipeline = pipeline;
    // creating this BlobServiceClient allows us to use the converted V2 Pipeline attached to `pipeline`.
    const blobClient = new BlobServiceClient(url, pipeline);
    this.storageClientContext = new StorageContextClient(
      this.dfsEndpointUrl,
      getCoreClientOptions(pipeline),
    );

    this.storageClientContextToBlobEndpoint = new StorageContextClient(
      this.blobEndpointUrl,
      getCoreClientOptions(pipeline),
    );

    this.isHttps = iEqual(getURLScheme(this.url) || "", "https");

    this.credential = (blobClient as any).credential;

    // Override protocol layer's default content-type
    const storageClientContext = this.storageClientContext as any;
    storageClientContext.requestContentType = undefined;
    const storageClientContextWithBlobEndpoint = this.storageClientContextToBlobEndpoint as any;
    storageClientContextWithBlobEndpoint.requestContentType = undefined;
  }
}
