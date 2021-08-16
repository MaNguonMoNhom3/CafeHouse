import express from "express";
import { checkout, createOrder } from "../controllers/OrdersController.js";

const router = express.Router();

router.get("/", checkout);
router.post("/", createOrder)

export default router;
