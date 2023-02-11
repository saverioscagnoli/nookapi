import { expect, it, jest } from "@jest/globals";
import { FishClient } from "../structs";

jest.setTimeout(2e5);

const fishClient = new FishClient();

it("Name of first fish and last names of fish to be bitterling and coelacanth", async () => {
  const st = await fishClient.FishById(1);
  const nd = await fishClient.FishById(80);
  const rd = await fishClient.FishByName("bitterling");
  const th = await fishClient.FishByName("coelacanth");
  expect(st.names.en).toBe("bitterling");
  expect(nd.names.en).toBe("coelacanth");
  expect(rd.names.en).toBe("bitterling");
  expect(th.names.en).toBe("coelacanth");
});

it("Expect errors for wrong ids", async () => {
  expect(async () => await fishClient.FishById(-1)).rejects.toThrow(Error);
  expect(async () => await fishClient.FishById(81)).rejects.toThrow(Error);
});

it("Expect blob of png image type", async () => {
  const st = await fishClient.renderById(1);
  const nd = await fishClient.iconById(1);
  const rd = await fishClient.renderByName("bitterling");
  const th = await fishClient.iconByName("bitterling");
  expect(st.type).toBe("image/png");
  expect(nd.type).toBe("image/png");
  expect(rd.type).toBe("image/png");
  expect(th.type).toBe("image/png");
});
