import express from "express";
import { index } from "../controllers/OrdersController.js";

const router = express.Router();

router.get("/", index);

export default router;
