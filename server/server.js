import express from "express";
import { configDotenv } from "dotenv";
import fileUpload from "express-fileupload";
import subRoutes from "./routes/subs.routes.js";
import cors from "cors";

const app = express();

configDotenv();
app.use(fileUpload());
app.use(express.json());
app.use(cors());

app.use("/api/subs", subRoutes);

app.listen(process.env.PORT, () => {
  console.log("server started");
});
