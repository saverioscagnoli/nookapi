import { expect, it, jest } from "@jest/globals";
import { BugClient } from "../structs";

jest.setTimeout(2e5);

const bugClient = new BugClient();

it("Name of first fish and last names of fish to be common butterfly and scorpion", async () => {
  const st = await bugClient.BugById(1);
  const nd = await bugClient.BugById(80);
  const rd = await bugClient.BugByName("common butterfly");
  const th = await bugClient.BugByName("scorpion");
  expect(st.names.en).toBe("common butterfly");
  expect(nd.names.en).toBe("scorpion");
  expect(rd.names.en).toBe("common butterfly");
  expect(th.names.en).toBe("scorpion");
});

it("Expect errors for wrong ids", async () => {
  expect(async () => await bugClient.BugById(-1)).rejects.toThrow(Error);
  expect(async () => await bugClient.BugById(81)).rejects.toThrow(Error);
});

it("Expect blob of png image type", async () => {
  const st = await bugClient.renderById(1);
  const nd = await bugClient.iconById(1);
  const rd = await bugClient.renderByName("common butterfly");
  const th = await bugClient.iconByName("scorpion");
  expect(st.type).toBe("image/png");
  expect(nd.type).toBe("image/png");
  expect(rd.type).toBe("image/png");
  expect(th.type).toBe("image/png");
});
