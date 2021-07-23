import express from "express";
import {detailProduct} from '../controllers/ProductsController.js';
const router = express.Router();

router.get("/:name", detailProduct);


export default router;
