import express from "express";
import { configDotenv } from "dotenv";

const app = express();

configDotenv();

app.listen(process.env.PORT, () => {
  console.log("server started");
});
