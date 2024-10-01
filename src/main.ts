import express from "express";
import morgan from "morgan";
import { errorHandler } from "express-async-errors";

const PORT = 3000;

const app = express();

app.use(morgan("dev"));

app.get("/api/hello", async (req, res) => {
  res.json({
    message: "Hello Express!",
  });
});

app.get("/api/error", async (req, res) => {
  throw new Error("Internal Server Error");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Reversi application started: http://localhost:${PORT}`);
});

function errorHandler(err: any, req: any, res: any, next: any) {
  console.error(err);
  res.status(500).json({
    message: "Internal Server Error",
  });
}
