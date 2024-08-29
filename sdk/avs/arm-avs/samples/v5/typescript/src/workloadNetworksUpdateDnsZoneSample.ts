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
  WorkloadNetworkDnsZoneUpdate,
  AzureVMwareSolutionAPI,
} from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update a WorkloadNetworkDnsZone
 *
 * @summary Update a WorkloadNetworkDnsZone
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/WorkloadNetworks_UpdateDnsZone.json
 */
async function workloadNetworksUpdateDnsZone() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const dnsZoneId = "dnsZone1";
  const workloadNetworkDnsZone: WorkloadNetworkDnsZoneUpdate = {
    displayName: "dnsZone1",
    dnsServerIps: ["1.1.1.1"],
    domain: [],
    revision: 1,
    sourceIp: "8.8.8.8",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.beginUpdateDnsZoneAndWait(
    resourceGroupName,
    privateCloudName,
    dnsZoneId,
    workloadNetworkDnsZone,
  );
  console.log(result);
}

async function main() {
  workloadNetworksUpdateDnsZone();
}

main().catch(console.error);
