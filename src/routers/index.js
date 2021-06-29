import express from "express";
// router
import home from "./home.js";
import cart from "./cart.js";
//controllers
import { HomeController } from "../controllers/HomeController.js";
const app = express();
const router = express.Router();

router.get("/", HomeController);

router.use("/admin", home);

router.get("/menu", (req, res) => {
  res.render("frontend/menu", {
    singinup: true,
    showHeader: true,
    menu: true,
    showCart: true,
    layout: "home-layout.handlebars",
  });
});

router.use("/today-special", (req, res) => {
  res.render("frontend/today-special", {
    singinup: true,
    showHeader: true,
    todayspecial: true,
    showCart: true,
    layout: "home-layout",
  });
});

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

router.use("/sign-in", (req, res) => {
  res.render("frontend/signin", {
    singinup: false,
    showHeader: true,
    showSingInUp: true,
    flexCenter: "display-flex-center",
    layout: "home-layout",
  });
});

router.use("/sign-up", (req, res) => {
  res.render("frontend/signup", {
    singinup: false,
    showHeader: true,
    showSingInUp: true,
    flexCenter: "display-flex-center",
    layout: "home-layout",
  });
});
export default router;
