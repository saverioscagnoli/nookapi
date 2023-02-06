import express from "express";
import { dataRoute, renderRoute } from "./routes";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/data", dataRoute);
app.use("/api/render", renderRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the nOOk-api!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
