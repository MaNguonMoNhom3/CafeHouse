import express from 'express';
import home from './home.js';
import menu from './menu.js';
import todaySpecial from './today-special.js';
import contact from './contact.js';
import singin from './singin.js';
import singup from './singup.js';

// const router = express.Router();
const app = express();
const router = express.Router();

router.use('/home', home);
router.use('/menu', menu);
router.use('/today-special', todaySpecial);
router.use('/contact', contact);
router.use('/sing-in', singin);
router.use('/sing-up', singup);

export default router;
