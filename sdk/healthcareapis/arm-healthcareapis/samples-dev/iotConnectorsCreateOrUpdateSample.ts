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
  IotConnector,
  HealthcareApisManagementClient,
} from "@azure/arm-healthcareapis";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an IoT Connector resource with the specified parameters.
 *
 * @summary Creates or updates an IoT Connector resource with the specified parameters.
 * x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2024-03-31/examples/iotconnectors/iotconnector_Create.json
 */
async function createAnIoTConnector() {
  const subscriptionId =
    process.env["HEALTHCAREAPIS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["HEALTHCAREAPIS_RESOURCE_GROUP"] || "testRG";
  const workspaceName = "workspace1";
  const iotConnectorName = "blue";
  const iotConnector: IotConnector = {
    deviceMapping: {
      content: {
        template: [
          {
            template: {
              deviceIdExpression: "$.deviceid",
              timestampExpression: "$.measurementdatetime",
              typeMatchExpression: "$..[?(@heartrate)]",
              typeName: "heartrate",
              values: [
                {
                  required: "true",
                  valueExpression: "$.heartrate",
                  valueName: "hr",
                },
              ],
            },
            templateType: "JsonPathContent",
          },
        ],
        templateType: "CollectionContent",
      },
    },
    identity: { type: "SystemAssigned" },
    ingestionEndpointConfiguration: {
      consumerGroup: "ConsumerGroupA",
      eventHubName: "MyEventHubName",
      fullyQualifiedEventHubNamespace: "myeventhub.servicesbus.windows.net",
    },
    location: "westus",
    tags: {
      additionalProp1: "string",
      additionalProp2: "string",
      additionalProp3: "string",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HealthcareApisManagementClient(credential, subscriptionId);
  const result = await client.iotConnectors.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    iotConnectorName,
    iotConnector,
  );
  console.log(result);
}

async function main() {
  createAnIoTConnector();
}

main().catch(console.error);
