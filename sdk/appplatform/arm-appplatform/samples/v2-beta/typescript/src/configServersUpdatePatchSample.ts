/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ConfigServerResource,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update the config server.
 *
 * @summary Update the config server.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/ConfigServers_UpdatePatch.json
 */
async function configServersUpdatePatch() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const configServerResource: ConfigServerResource = {
    properties: {
      configServer: {
        gitProperty: {
          label: "master",
          searchPaths: ["/"],
          uri: "https://github.com/fake-user/fake-repository.git"
        }
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.configServers.beginUpdatePatchAndWait(
    resourceGroupName,
    serviceName,
    configServerResource
  );
  console.log(result);
}

configServersUpdatePatch().catch(console.error);