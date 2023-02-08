import express from "express";
import { PATHS } from "../consts";
import { DataBox } from "../structs";
import { Fish, Bug, SeaCreature } from "../typings";
import { isName, recursiveSearch } from "../utils";

const dataRoute = express.Router();
const jsonBox = new DataBox();

recursiveSearch(PATHS.DATA, jsonBox);

dataRoute.get("/fish/:id", (req, res) => {
  let fish: Fish;
  if (isName(req.params.id)) {
    let name = req.params.id.toLowerCase();
    fish = jsonBox.fish.find(f => f.names.en == name);
  } else {
    fish = jsonBox.fish.find(f => f.id == +req.params.id);
  }

  if (!fish) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(404)
      .send({ error: { code: 404, message: "that fish does not exist!" } });

    return;
  }
  res.send(fish);
});

dataRoute.get("/bug/:id", (req, res) => {
  let bug: Bug;
  if (isName(req.params.id)) {
    let name = req.params.id.toLowerCase();
    bug = jsonBox.bug.find(b => b.names.en == name);
  } else {
    bug = jsonBox.bug.find(b => b.id == +req.params.id);
  }

  if (!bug) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(404)
      .send({ error: { code: 404, message: "that bug does not exist!" } });
    return;
  }
  res.send(bug);
});

dataRoute.get("/sea-creature/:id", (req, res) => {
  let sea: SeaCreature;
  if (isName(req.params.id)) {
    let name = req.params.id.toLowerCase();
    sea = jsonBox.sea_creature.find(s => s.names.en == name);
  } else {
    sea = jsonBox.sea_creature.find(s => s.id == +req.params.id);
  }

  if (!sea) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(404)
      .send({
        error: { code: 404, message: "that sea creature does not exist!" }
      });
    return;
  }
  res.send(sea);
});

export { dataRoute, jsonBox };
