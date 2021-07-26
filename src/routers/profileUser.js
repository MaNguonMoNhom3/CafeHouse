import express from 'express';
import {check} from 'express-validator';
import {getProfile} from "../controllers/HomeController.js";
import {updateCustomers} from '../controllers/CustomersController.js';
const Router = express.Router();

Router.get("/", getProfile);
Router.post("/", [
    check("pass", "Invalid password")
        .custom((value,{req, loc, path}) => {
            if (value !== req.body.re_pass || value.length < 4 && value !== "") {
                throw new Error("Passwords don't match");
            } else {
                return true;
            }
        }),
  ],
  updateCustomers);

export default Router;