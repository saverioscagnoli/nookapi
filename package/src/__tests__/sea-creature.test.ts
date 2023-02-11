import { expect, it, jest } from "@jest/globals";
import { SeaCreatureClient } from "../structs";

jest.setTimeout(2e5);

const seaClient = new SeaCreatureClient();

it("Name of first fish and last names of fish to be seaweed and venus' flower basket", async () => {
  const st = await seaClient.SeaCreatureById(1);
  const nd = await seaClient.SeaCreatureById(40);
  const rd = await seaClient.SeaCreatureByName("seaweed");
  const th = await seaClient.SeaCreatureByName("venus' flower basket");
  expect(st.names.en).toBe("seaweed");
  expect(nd.names.en).toBe("venus' flower basket");
  expect(rd.names.en).toBe("seaweed");
  expect(th.names.en).toBe("venus' flower basket");
});

it("Expect errors for wrong ids", async () => {
  expect(async () => await seaClient.SeaCreatureById(-1)).rejects.toThrow(
    Error
  );
  expect(async () => await seaClient.SeaCreatureById(41)).rejects.toThrow(
    Error
  );
});

it("Expect blob of png image type", async () => {
  const st = await seaClient.renderById(1);
  const nd = await seaClient.iconById(1);
  const rd = await seaClient.renderByName("seaweed");
  const th = await seaClient.iconByName("venus' flower basket");
  expect(st.type).toBe("image/png");
  expect(nd.type).toBe("image/png");
  expect(rd.type).toBe("image/png");
  expect(th.type).toBe("image/png");
});
