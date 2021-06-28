import express from 'express';
import {CheckoutController} from '../controllers/CheckoutController.js'

const router = express.Router();

router.get('/',CheckoutController);

export default router;