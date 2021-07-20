import express from 'express';
import {getProfile, updateProfile} from "../controllers/CustomersController.js";
const Router = express.Router();

Router.get("/", getProfile);
Router.post("/", updateProfile);

export default Router;