import express from "express";
import { index, getProducts } from "../controllers/ProductsController.js";

const router = express.Router();

router.get("/", index);

router.post('/DB', getProducts);

export default router;
