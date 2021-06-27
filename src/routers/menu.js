import express from 'express';
import { MenuController } from '../controllers/MenuController.js';

const router = express.Router();

router.get('/',MenuController);


export default router;