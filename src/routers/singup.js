import express from 'express';
import { SingUpController } from '../controllers/SingUpController.js';

const router = express.Router();

router.get('/',SingUpController);


export default router;