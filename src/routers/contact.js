import express from 'express';
import { ContactController } from '../controllers/ContactController.js';

const router = express.Router();

router.get('/',ContactController);


export default router;