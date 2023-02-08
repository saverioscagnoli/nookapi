"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderRoute = void 0;
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const consts_1 = require("../consts");
const structs_1 = require("../structs");
const utils_1 = require("../utils");
const data_1 = require("./data");
const renderRoute = express_1.default.Router();
exports.renderRoute = renderRoute;
const renderBox = new structs_1.DataBox();
(0, utils_1.recursiveSearch)(consts_1.PATHS.RENDER, renderBox, { parse: false, encoding: null });
renderRoute.get("/fish/:id", (req, res) => {
    let render;
    if ((0, utils_1.isName)(req.params.id)) {
        let name = req.params.id.toLowerCase();
        let i = data_1.jsonBox.fish.findIndex(f => f.names.en == name);
        render = renderBox.fish[i];
    }
    else {
        let i = data_1.jsonBox.fish.findIndex(f => f.id == +req.params.id);
        render = renderBox.fish[i];
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
renderRoute.get("/bug/:id", (req, res) => {
    let render;
    if ((0, utils_1.isName)(req.params.id)) {
        let name = req.params.id.toLowerCase();
        let i = data_1.jsonBox.bug.findIndex(b => b.names.en == name);
        render = renderBox.bug[i];
    }
    else {
        let i = data_1.jsonBox.bug.findIndex(b => b.id == +req.params.id);
        render = renderBox.bug[i];
    }
    if (!render) {
        res.setHeader("Content-Type", "application/json");
        res
            .status(404)
            .send({ error: { code: 404, message: "that bug does not exist!" } });
        return;
    }
    res.setHeader("Content-Type", "image/png");
    res.send(render);
});
renderRoute.get("/sea-creature/:id", (req, res) => {
    let render;
    if ((0, utils_1.isName)(req.params.id)) {
        let name = req.params.id.toLowerCase();
        let i = data_1.jsonBox.sea_creature.findIndex(s => s.names.en == name);
        render = renderBox.sea_creature[i];
    }
    else {
        let i = data_1.jsonBox.sea_creature.findIndex(s => s.id == +req.params.id);
        render = renderBox.sea_creature[i];
    }
    if (!render) {
        res.setHeader("Content-Type", "application/json");
        res
            .status(404)
            .send({
            error: { code: 404, message: "that sea creature does not exist!" }
        });
        return;
    }
    res.setHeader("Content-Type", "image/png");
    res.send(render);
});
