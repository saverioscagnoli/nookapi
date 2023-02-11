import express from "express";
import { dataRoute, iconRoute, renderRoute } from "./routes";
import "dotenv/config";
import { resolve } from "path";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(express.static(resolve(__dirname + "/../../client/dist")));

app.use("/api/data", dataRoute);
app.use("/api/render", renderRoute);
app.use("/api/icon", iconRoute);

app.get("*", (req, res) => {
  res.status(404).sendFile(resolve(__dirname + "/../../client/dist/404.html"));
});

app.get("/", (req, res) => {
  res.sendFile(resolve("dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
