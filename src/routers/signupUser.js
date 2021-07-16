import express from "express";
import {getSignUpUser, createUser} from '../controllers/Login_SignupController.js';
const router = express.Router();

router.get("/", getSignUpUser);
router.post("/", createUser)

export default router;
