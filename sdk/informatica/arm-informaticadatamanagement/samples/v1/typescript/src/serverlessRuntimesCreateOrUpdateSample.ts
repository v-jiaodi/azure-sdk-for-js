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
  InformaticaServerlessRuntimeResource,
  InformaticaDataManagement,
} from "@azure/arm-informaticadatamanagement";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a InformaticaServerlessRuntimeResource
 *
 * @summary Create a InformaticaServerlessRuntimeResource
 * x-ms-original-file: specification/informatica/resource-manager/Informatica.DataManagement/stable/2024-05-08/examples/ServerlessRuntimes_CreateOrUpdate_MaximumSet_Gen.json
 */
async function serverlessRuntimesCreateOrUpdate() {
  const subscriptionId =
    process.env["INFORMATICA_SUBSCRIPTION_ID"] ||
    "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const resourceGroupName =
    process.env["INFORMATICA_RESOURCE_GROUP"] || "rgopenapi";
  const organizationName = "__C";
  const serverlessRuntimeName = "0j-__";
  const resource: InformaticaServerlessRuntimeResource = {
    properties: {
      description: "mqkaenjmxakvzrwmirelmhgiedto",
      advancedCustomProperties: [{ key: "qcmc", value: "unraxmnohdmvutt" }],
      applicationType: "CDI",
      computeUnits: "bsctukmndvowse",
      executionTimeout: "ruiougpypny",
      platform: "AZURE",
      provisioningState: "Accepted",
      serverlessAccountLocation: "bkxdfopapbqucyhduewrubjpaei",
      serverlessRuntimeConfig: {
        cdiConfigProps: [
          {
            applicationConfigs: [
              {
                name: "upfvjrqcrwwedfujkmsodeinw",
                type: "lw",
                customized: "j",
                defaultValue: "zvgkqwmi",
                platform: "dixfyeobngivyvf",
                value: "mozgsetpwjmtyl",
              },
            ],
            engineName: "hngsdqvtjdhwqlbqfotipaiwjuys",
            engineVersion: "zlrlbg",
          },
        ],
        cdieConfigProps: [
          {
            applicationConfigs: [
              {
                name: "upfvjrqcrwwedfujkmsodeinw",
                type: "lw",
                customized: "j",
                defaultValue: "zvgkqwmi",
                platform: "dixfyeobngivyvf",
                value: "mozgsetpwjmtyl",
              },
            ],
            engineName: "hngsdqvtjdhwqlbqfotipaiwjuys",
            engineVersion: "zlrlbg",
          },
        ],
      },
      serverlessRuntimeNetworkProfile: {
        networkInterfaceConfiguration: {
          subnetId:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/subnet1",
          vnetId:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/HypernetVnet1",
          vnetResourceGuid: "5328d299-1462-4be0-bef1-303a28e556a0",
        },
      },
      serverlessRuntimeTags: [{ name: "korveuycuwhs", value: "uyiuegxnkgp" }],
      serverlessRuntimeUserContextProperties: { userContextToken: "oludf" },
      supplementaryFileLocation: "zmlqtkncwgqhhupsnqluumz",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new InformaticaDataManagement(credential, subscriptionId);
  const result = await client.serverlessRuntimes.beginCreateOrUpdateAndWait(
    resourceGroupName,
    organizationName,
    serverlessRuntimeName,
    resource,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a InformaticaServerlessRuntimeResource
 *
 * @summary Create a InformaticaServerlessRuntimeResource
 * x-ms-original-file: specification/informatica/resource-manager/Informatica.DataManagement/stable/2024-05-08/examples/ServerlessRuntimes_CreateOrUpdate_MinimumSet_Gen.json
 */
async function serverlessRuntimesCreateOrUpdateMin() {
  const subscriptionId =
    process.env["INFORMATICA_SUBSCRIPTION_ID"] ||
    "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const resourceGroupName =
    process.env["INFORMATICA_RESOURCE_GROUP"] || "rgopenapi";
  const organizationName = "-4Z__7";
  const serverlessRuntimeName = "J";
  const resource: InformaticaServerlessRuntimeResource = {};
  const credential = new DefaultAzureCredential();
  const client = new InformaticaDataManagement(credential, subscriptionId);
  const result = await client.serverlessRuntimes.beginCreateOrUpdateAndWait(
    resourceGroupName,
    organizationName,
    serverlessRuntimeName,
    resource,
  );
  console.log(result);
}

async function main() {
  serverlessRuntimesCreateOrUpdate();
  serverlessRuntimesCreateOrUpdateMin();
}

main().catch(console.error);
