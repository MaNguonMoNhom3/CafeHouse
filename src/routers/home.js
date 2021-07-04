import express from "express";
// router
import category from "./category.js";
import { getProductForHome } from "../controllers/ProductsController.js";
const app = express();
const router = express.Router();

router.get("/", getProductForHome);


export default router;
