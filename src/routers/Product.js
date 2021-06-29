import express from "express";
import { ProductController } from "../../controllers/Product.js";

const router = express.Router();

router.get("/::slug", ProductController);

export default router;
