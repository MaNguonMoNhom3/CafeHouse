import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import handlerbars from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import { connect } from "./config/database/index.js";
// router import
import router from "./routers/index.js";
import admin_router from "./routers/admin.js";
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 5500;

const app = express();
connect();
//add file css js img fonts
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
//
app.use("/admin", admin_router);
app.use("/", router);
// handlebars
app.set("view engine", "handlebars");
app.engine("handlebars", handlerbars({
  helpers: {
    math: function (lvalue, operator, rvalue) {
      lvalue = parseFloat(lvalue);
      rvalue = parseFloat(rvalue);
      return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
      }[operator];
    }
  },
  extname: "handlebars",
  defaultLayout: "admin-layout.handlebars",
}));
app.set("views", path.join(__dirname, "views"));

//run server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
