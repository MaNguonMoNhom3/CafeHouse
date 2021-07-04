import express from "express";
import { index, getProductsByCategory } from "../controllers/ProductsController.js";

const router = express.Router();

router.get("/", index);

router.post('/ByCategory', getProductsByCategory);


export default router;
