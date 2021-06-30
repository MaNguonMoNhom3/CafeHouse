import express from "express";
// router
import cart from "./cart.js";
import category from "./category.js";
//controllers
import { HomeController } from "../controllers/HomeController.js";
import {
  SignUpController,
  SignInController,
} from "../controllers/loginController.js";
const app = express();
const router = express.Router();

router.use("/admin", (req, res) => {
  res.render("backend/home", { layout: "admin-layout" });
});
router.use("/category", category);
export default router;
