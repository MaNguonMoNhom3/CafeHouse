import express from "express";
import { index } from "../controllers/BlogsController.js";

const router = express.Router();

router.get("/", index);

export default router;
