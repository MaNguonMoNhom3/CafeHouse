import express from "express";
import { index, getProductsByCategory } from "../controllers/ProductsController.js";

const router = express.Router();

router.get("/", index);


export default router;
