import express from "express";
import { PATHS } from "../consts";
import { DataBox } from "../structs";
import { isName, recursiveSearch } from "../utils";
import { jsonBox } from "./data";

const iconRoute = express.Router();
const iconBox = new DataBox();

recursiveSearch(PATHS.ICON, iconBox, { parse: false, encoding: null });

iconRoute.get("/fish/:id", (req, res) => {
  let icon: Buffer;
  if (isName(req.params.id)) {
    let name = req.params.id.toLowerCase();
    let i = jsonBox.fish.findIndex(f => f.names.en == name);
    icon = iconBox.fish[i] as unknown as Buffer;
  } else {
    let i = jsonBox.fish.findIndex(f => f.id == +req.params.id);
    icon = iconBox.fish[i] as unknown as Buffer;
  }
  if (!icon) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(404)
      .send({ error: { code: 404, message: "that fish does not exist!" } });
    return;
  }
  res.setHeader("Content-Type", "image/png");
  res.send(icon);
});

iconRoute.get("/bug/:id", (req, res) => {
  let icon: Buffer;
  if (isName(req.params.id)) {
    let name = req.params.id.toLowerCase();
    let i = jsonBox.bug.findIndex(b => b.names.en == name);
    icon = iconBox.bug[i] as unknown as Buffer;
  } else {
    let i = jsonBox.bug.findIndex(b => b.id == +req.params.id);
    icon = iconBox.bug[i] as unknown as Buffer;
  }
  if (!icon) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(404)
      .send({ error: { code: 404, message: "that bug does not exist!" } });
    return;
  }
  res.setHeader("Content-Type", "image/png");
  res.send(icon);
});

export { iconRoute };
