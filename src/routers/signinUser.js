import express from 'express';
import {getLoginUser} from "../controllers/Login_SignupController.js";
const Router = express.Router();

Router.get("/", getLoginUser);

export default Router;