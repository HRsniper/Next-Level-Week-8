import cors from "cors";
import express from "express";
import { routes } from "./routes";

const PORT = process.env.PORT || 3333;

const app = express();

app.disable("x-powered-by");

app.use(cors());
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
