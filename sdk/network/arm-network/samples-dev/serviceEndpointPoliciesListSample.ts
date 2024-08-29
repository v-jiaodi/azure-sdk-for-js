/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets all the service endpoint policies in a subscription.
 *
 * @summary Gets all the service endpoint policies in a subscription.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-01-01/examples/ServiceEndpointPolicyListAll.json
 */
async function listAllServiceEndpointPolicy() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.serviceEndpointPolicies.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAllServiceEndpointPolicy();
}

main().catch(console.error);
