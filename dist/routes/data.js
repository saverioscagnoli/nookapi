"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonBox = exports.dataRoute = void 0;
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const consts_1 = require("../consts");
const structs_1 = require("../structs");
const utils_1 = require("../utils");
const dataRoute = express_1.default.Router();
exports.dataRoute = dataRoute;
const jsonBox = new structs_1.DataBox();
exports.jsonBox = jsonBox;
(0, utils_1.recursiveSearch)(consts_1.PATHS.DATA, jsonBox);
dataRoute.get("/fish/:id", (req, res) => {
    let fish;
    if ((0, utils_1.isName)(req.params.id)) {
        let name = req.params.id.toLowerCase();
        fish = jsonBox.fish.find(f => f.names.en == name);
    }
    else {
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
    let bug;
    if ((0, utils_1.isName)(req.params.id)) {
        let name = req.params.id.toLowerCase();
        bug = jsonBox.bug.find(b => b.names.en == name);
    }
    else {
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
