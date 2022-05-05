import cors from "cors";
import "dotenv/config";
import express from "express";
import { routes } from "./routes";

const PORT = process.env.PORT || 3333;

const app = express();

app.disable("x-powered-by");

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use(routes);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    server: "running!"
  });
});

app.listen(PORT, () => {
  console.log("HTTP server running!");
});
