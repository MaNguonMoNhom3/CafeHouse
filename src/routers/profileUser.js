import express from 'express';
import {getProfile} from "../controllers/CustomersController.js";
const Router = express.Router();

Router.get("/", getProfile);

export default Router;