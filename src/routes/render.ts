import express from "express";
import { PATHS } from "../consts";
import { DataBox } from "../structs";
import { isName, recursiveSearch } from "../utils";
import { jsonBox } from "./data";

const renderRoute = express.Router();
const renderBox = new DataBox();

recursiveSearch(PATHS.RENDER, renderBox, { parse: false, encoding: null });

renderRoute.get("/fish/:id", (req, res) => {
  let render: Buffer;

  if (isName(req.params.id)) {
    let name = req.params.id.toLowerCase();
    let i = jsonBox.fish.findIndex(f => f.names.en == name);
    render = renderBox.fish[i] as unknown as Buffer;
  } else {
    let i = jsonBox.fish.findIndex(f => f.id == +req.params.id);
    render = renderBox.fish[i] as unknown as Buffer;
  }
  if (!render) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(404)
      .send({ error: { code: 404, message: "that fish does not exist!" } });
    return;
  }
  res.setHeader("Content-Type", "image/png");
  res.send(render);
});

export { renderRoute };
