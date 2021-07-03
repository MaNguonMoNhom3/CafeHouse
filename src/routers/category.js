import express from "express";
import { index, getCategories } from "../controllers/CategoriesController.js";

const router = express.Router();

router.get("/", index);
router.get("/DB", getCategories);

export default router;
