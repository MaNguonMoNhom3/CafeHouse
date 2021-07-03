import express from "express";
import { index, getProductsByCategory, getProductByHot } from "../controllers/ProductsController.js";

const router = express.Router();

router.get("/", index);

router.post('/ByCategory', getProductsByCategory);

router.get("/ByHot", getProductByHot);

export default router;
