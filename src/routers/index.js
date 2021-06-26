import home from './home.js';
import express from 'express';

// const router = express.Router();
const app = express();
const router = express.Router();

router.use('/home', home);
router.use('/menu',(req, res) => {
    res.send('menu');
});

export default router;
