import express from 'express';
import { SingInController } from '../controllers/SingInController.js';

const router = express.Router();

router.get('/',SingInController);


export default router;