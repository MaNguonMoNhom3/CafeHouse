import express from 'express';
import {getProfile} from "../controllers/HomeController.js";
import {updateCustomers} from '../controllers/CustomersController.js';
const Router = express.Router();

Router.get("/", getProfile);
Router.post("/", updateCustomers);

export default Router;