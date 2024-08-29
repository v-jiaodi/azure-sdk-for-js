/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const SendMessageRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendMessageRequest",
    modelProperties: {
      from: {
        serializedName: "from",
        required: true,
        type: {
          name: "String",
        },
      },
      smsRecipients: {
        serializedName: "smsRecipients",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SmsRecipient",
            },
          },
        },
      },
      message: {
        constraints: {
          MaxLength: 2048,
        },
        serializedName: "message",
        required: true,
        type: {
          name: "String",
        },
      },
      smsSendOptions: {
        serializedName: "smsSendOptions",
        type: {
          name: "Composite",
          className: "SmsSendOptions",
        },
      },
    },
  },
};

export const SmsRecipient: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SmsRecipient",
    modelProperties: {
      to: {
        serializedName: "to",
        required: true,
        type: {
          name: "String",
        },
      },
      repeatabilityRequestId: {
        serializedName: "repeatabilityRequestId",
        type: {
          name: "String",
        },
      },
      repeatabilityFirstSent: {
        serializedName: "repeatabilityFirstSent",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const SmsSendOptions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SmsSendOptions",
    modelProperties: {
      enableDeliveryReport: {
        serializedName: "enableDeliveryReport",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      tag: {
        serializedName: "tag",
        type: {
          name: "String",
        },
      },
      deliveryReportTimeoutInSeconds: {
        constraints: {
          InclusiveMaximum: 43200,
          InclusiveMinimum: 60,
        },
        serializedName: "deliveryReportTimeoutInSeconds",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const SmsSendResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SmsSendResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SmsSendResponseItem",
            },
          },
        },
      },
    },
  },
};

export const SmsSendResponseItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SmsSendResponseItem",
    modelProperties: {
      to: {
        serializedName: "to",
        required: true,
        type: {
          name: "String",
        },
      },
      messageId: {
        serializedName: "messageId",
        type: {
          name: "String",
        },
      },
      httpStatusCode: {
        serializedName: "httpStatusCode",
        required: true,
        type: {
          name: "Number",
        },
      },
      repeatabilityResult: {
        serializedName: "repeatabilityResult",
        type: {
          name: "String",
        },
      },
      successful: {
        serializedName: "successful",
        required: true,
        type: {
          name: "Boolean",
        },
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "String",
        },
      },
    },
  },
};
