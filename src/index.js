import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";
import session from "express-session";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// router import
import Home from "./routers/index.js";
const URI =
  "mongodb+srv://admin:YsMgkjmq9rV85jJP@cluster0.y3awn.mongodb.net/CafeHouse?retryWrites=true&w=majority";

const app = express();

const port = 3000;

app.use("/",Home);

//add file css js img fonts
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
// app.get("/login", (req, res) => {
//   res.sendFile(__dirname + "/src/views/frontend/" + "SingIn.html");
// });
// app.get("/register", (req, res) => {
//   res.sendFile(__dirname + "/src/views/frontend/" + "SingUp.html");
// });
// app.get("/cart", (req, res) => {
//   res.sendFile(__dirname + "/src/views/frontend/" + "cart.html");
// });
// app.get("/contact", (req, res) => {
//   res.sendFile(__dirname + "/src/views/frontend/" + "contact.html");
// });
// app.get("/detail", (req, res) => {
//   res.sendFile(__dirname + "/src/views/frontend/" + "detail.html");
// });
// app.get("/menu", (req, res) => {
//   res.sendFile(__dirname + "/src/views/frontend/" + "menu.html");
// });
// app.get("/today-special", (req, res) => {
//   res.sendFile(__dirname + "/src/views/frontend/" + "today-special.html");
// });

// app.use('/SingIn', customers);
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// app.use('/SingUp',customers);
//connet DB + run server
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
