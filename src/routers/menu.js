import express from "express";
import { getCategories } from "../controllers/CategoriesController.js";
import { getProductsByCategory } from "../controllers/ProductsController.js";
const router = express.Router();

router.get("/", getCategories);
router.get("/:index", getCategories);
router.get("/:index/:page", getCategories);

export default router;
