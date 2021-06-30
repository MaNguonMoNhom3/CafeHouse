import express from 'express';
import { CategoryController } from '../controllers/CategoriesController.js';

const router = express.Router();

router.get('/', CategoryController);

export default router;