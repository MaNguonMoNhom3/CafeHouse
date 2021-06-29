import express from "express";
import {
  HomeController,
  AdminController,
} from "../controllers/HomeController.js";
const router = express.Router();

router.get("/", AdminController);

export default router;
