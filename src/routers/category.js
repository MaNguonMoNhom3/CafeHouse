import express from "express";
import { index, getCategories } from "../controllers/CategoriesController.js";

const router = express.Router();

router.get("/", index);

export default router;
