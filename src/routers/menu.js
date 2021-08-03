import express from "express";
import { getCategories } from "../controllers/CategoriesController.js";
// import { getProductsByCategory } from "../controllers/ProductsController.js";
const router = express.Router();

router.get("/", getCategories);

export default router;
