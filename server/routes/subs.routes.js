import express from "express";
import { uploadFile } from "../controller/subs.controller.js";

const router = express.Router();

router.post("/", uploadFile);

export default router;
