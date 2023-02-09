"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isName = exports.recursiveSearch = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
function recursiveSearch(dir, data, { key, parse, encoding } = { key: null, parse: true, encoding: "utf8" }) {
    for (let f of (0, fs_1.readdirSync)(dir)) {
        let j = (0, path_1.join)(dir, f);
        if ((0, fs_1.lstatSync)(j).isFile()) {
            let imp = (0, fs_1.readFileSync)(j, { encoding });
            data[key]?.push(parse ? JSON.parse(imp) : imp);
        }
        else {
            recursiveSearch(j, data, { key: f, parse, encoding });
        }
    }
}
exports.recursiveSearch = recursiveSearch;
function isName(str) {
    return isNaN(+str);
}
exports.isName = isName;
