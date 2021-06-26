import express from 'express';
import { CategoryController } from '../controllers/menu.js';

const router = express.Router();

router.get('/',CategoryController);


export default router;