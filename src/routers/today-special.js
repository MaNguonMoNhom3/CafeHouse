import express from 'express';
import { TodaySpecialController } from '../controllers/TodaySpecialController.js';

const router = express.Router();

router.get('/',TodaySpecialController);


export default router;