import express from 'express';
import {CartController} from '../controllers/CartsController.js'

const router = express.Router();

router.get('/',CartController);

export default router;