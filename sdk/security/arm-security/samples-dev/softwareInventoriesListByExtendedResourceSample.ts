/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the software inventory of the virtual machine.
 *
 * @summary Gets the software inventory of the virtual machine.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2021-05-01-preview/examples/SoftwareInventories/ListByExtendedResourceSoftwareInventories_example.json
 */
async function getsTheSoftwareInventoryOfTheVirtualMachine() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "e5d1b86c-3051-44d5-8802-aa65d45a279b";
  const resourceGroupName =
    process.env["SECURITY_RESOURCE_GROUP"] || "EITAN-TESTS";
  const resourceNamespace = "Microsoft.Compute";
  const resourceType = "virtualMachines";
  const resourceName = "Eitan-Test1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.softwareInventories.listByExtendedResource(
    resourceGroupName,
    resourceNamespace,
    resourceType,
    resourceName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getsTheSoftwareInventoryOfTheVirtualMachine();
}

main().catch(console.error);
