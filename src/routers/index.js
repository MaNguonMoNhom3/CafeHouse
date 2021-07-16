import express from "express";
import {check, validationResult} from 'express-validator';
// router
import cart from "./cart.js";
import category from './category.js';
import products from './product.js';
import home from './home.js';
import menu from './menu.js';
import signin from './signinUser.js';
import signup from './signupUser.js';
//controllers
import { getProductForTodaySpecial } from '../controllers/ProductsController.js';

const app = express();
const router = express.Router();

router.use("/categories", category);
router.use("/products", products);

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

router.use("/sign-in", signin);

router.use("/sign-up",[
  check('name', 'Tên của bạn phải có ít nhất 2 ký tự')
  .exists()
  .isLength({min:2}),
  check('email','Email không được để trống')
  .isEmail()
  .normalizeEmail(),
  check('pass', 'Vui lòng kiểm tra lại mật khẩu')
  .exists()
  .isLength({min:6}),
  check('re_pass', 'Vui lòng kiểm tra lại mật khẩu xác nhận')
  .exists()
  .isLength({min:6}),
], signup);

export default router;
