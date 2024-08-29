/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { GuestConfigurationClient } = require("@azure/arm-guestconfiguration");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get information about a guest configuration assignment
 *
 * @summary Get information about a guest configuration assignment
 * x-ms-original-file: specification/guestconfiguration/resource-manager/Microsoft.GuestConfiguration/stable/2022-01-25/examples/getGuestConfigurationHCRPAssignment.json
 */
async function getAGuestConfigurationAssignment() {
  const subscriptionId = process.env["GUESTCONFIGURATION_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const resourceGroupName =
    process.env["GUESTCONFIGURATION_RESOURCE_GROUP"] || "myResourceGroupName";
  const guestConfigurationAssignmentName = "SecureProtocol";
  const machineName = "myMachineName";
  const credential = new DefaultAzureCredential();
  const client = new GuestConfigurationClient(credential, subscriptionId);
  const result = await client.guestConfigurationHcrpAssignments.get(
    resourceGroupName,
    guestConfigurationAssignmentName,
    machineName,
  );
  console.log(result);
}

async function main() {
  getAGuestConfigurationAssignment();
}

main().catch(console.error);
