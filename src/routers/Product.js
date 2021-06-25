import express from 'express';
import {ProductController} from '../../controllers/Product.js';

const router = express.Router();

router.get('/', ProductController);

export default router;
