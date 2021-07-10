import express from "express";
// router
import cart from "./cart.js";
import category from './category.js';
import products from './product.js';
import home from './home.js';
import menu from './menu.js';
//controllers
import { getProductForTodaySpecial } from '../controllers/ProductsController.js';

import {
  SignUpController,
  SignInController,
} from "../controllers/loginController.js";
const app = express();
const router = express.Router();

router.use("/categories", category);
router.use("/products", products);

//
//
//
//
router.use("/", home);
router.use("/menu", menu);

router.get("/today-special", getProductForTodaySpecial);

router.use("/contact", (req, res) => {
  res.render("frontend/contact", {
    singinup: true,
    showHeader: true,
    contact: true,
    showCart: true,
    layout: "home-layout",
  });
});

router.use("/cart", cart);

router.use("/checkout", (req, res) => {
  res.render("frontend/checkout", {
    showHeader: false,
    showCart: false,
    singinup: true,
    layout: "home-layout",
  });
});
router.use("/detail", (req, res) => {
  res.render("frontend/detail", {
    showHeader: false,
    showCart: false,
    singinup: true,
    layout: "home-layout",
  });
});

router.use("/sign-in", SignInController);

router.use("/sign-up", SignUpController);
//
//
//
//
//
//
// ADMIN
//

export default router;
