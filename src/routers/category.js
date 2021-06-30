import express from "express";
import { index } from "../controllers/CategoriesController.js";

const router = express.Router();

router.get("/", index);

export default router;
