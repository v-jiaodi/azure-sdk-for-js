// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "chai";
import PurviewDataMapClientFc, { PurviewDataMapClient, createFileFromStream } from "../../src/index";
import { DefaultAzureCredential } from "@azure/identity";
import fs from "fs";
import { Context } from "mocha";
describe("My test", () => {
  let client: PurviewDataMapClient;
  beforeEach(async function (this: Context) {
    client = PurviewDataMapClientFc("https://localhost:3000", new DefaultAzureCredential());
  });

  // afterEach(async function () {
  //   await client.stop();
  // });

  it.only("Upload from a Node stream", async function () {
    try {
      const response = await client.path("/atlas/v2/entity/businessmetadata/import").post({
        contentType: "multipart/form-data",
        body: {
          file: createFileFromStream(() => fs.createReadStream("file.txt"), "file.txt"),
        }
      });
      console.log(response)
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
