"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBox = void 0;
class DataBox {
    art;
    bug;
    fish;
    sea_creature;
    song;
    villager;
    shadow_size;
    constructor(p) {
        for (let prop in this) {
            this[prop] = [];
        }
        if (p) {
            for (let k of p.del) {
                delete this[k];
            }
        }
    }
}
exports.DataBox = DataBox;
