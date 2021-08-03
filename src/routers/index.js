import express from "express";
// router
import cart from "./cart.js";
import category from './category.js';
import home from './home.js';
import menu from './menu.js';
import signin from './signinUser.js';
import signup from './signupUser.js';
import profile from './profileUser.js';
import detailProduct from './detailProduct.js';
import order from './orderClient.js';
import contact from './contact.js';
//controllers
import { getProductForTodaySpecial } from '../controllers/ProductsController.js';
import { logout } from '../controllers/HomeController.js';

const router = express.Router();

router.use("/categories", category);

router.use("/", home);

router.use("/menu", menu);

router.get("/today-special", getProductForTodaySpecial);

router.use("/contact", contact);

router.use("/cart", cart);

router.use("/checkout", order);

router.use("/product", detailProduct);

router.use("/sign-in", signin);

router.use("/sign-up", signup);

router.use("/profile", profile);

router.use("/logout", logout);

export default router;
