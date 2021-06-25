import express from "express";
import { SingIn, CreateUser } from "../controllers/Customers.js";
import passport from "passport";

const router = express.Router();

//   router.get("/", index);
  router.get("/login", SingIn);
  router.post("/login", passport.authenticate('local',{
    failureRedirect: "/login",
    successRedirect: '/'
  }));
  router.post("/SingUp", CreateUser);

export default router;
