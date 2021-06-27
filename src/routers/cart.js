import express from 'express';
import {CartController} from '../controllers/CartController.js'

const router = express.Router();

router.get('/',CartController);

export default router;