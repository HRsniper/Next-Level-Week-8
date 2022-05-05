import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    server: "running!"
  });
});

app.listen(PORT, () => {
  console.log("HTTP server running!");
});
