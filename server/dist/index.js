"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const routes_1 = require("./routes");
require("dotenv/config");
const path_1 = require("path");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.static((0, path_1.resolve)("public/")));
app.use("/api/data", routes_1.dataRoute);
app.use("/api/render", routes_1.renderRoute);
app.use("/api/icon", routes_1.iconRoute);
app.get("/", (req, res) => {
    res.sendFile((0, path_1.resolve)("public/index.html"));
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
