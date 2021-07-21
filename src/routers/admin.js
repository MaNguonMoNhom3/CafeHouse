import express from "express";
// router
import category from "./category.js";
import { login, signUp } from "../controllers/Login_SignupController.js";
import product from "./product.js";
import order from "./order.js";
import customer from "./customer.js";
import blog from "./blog.js";
const app = express();
const router = express.Router();
// ngon ngu rac vcl
// Rác rưởi
router.get("/", (req, res) => {
  res.render("backend/home", { layout: "admin-layout" });
});
router.use("/category", category);
router.use("/product", product);
router.use("/order", order);
router.use("/customer", customer);
router.use("/blog", blog);
router.use("/login", login);
router.use("/signup", signUp);
export default router;
