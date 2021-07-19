import express from 'express';
import {getLoginUser, Login} from "../controllers/Login_SignupController.js";
const Router = express.Router();

Router.get("/", getLoginUser);
Router.post("/", Login);

export default Router;