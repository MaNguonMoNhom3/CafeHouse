import passport from "passport";
import passportLocal from "passport-local";
import { CustomersModel } from "../models/Customer.js";

const LocalStrategy = passportLocal.Strategy;

export const index = async (req, res) => {
  try {
    res.render("backend/customers", { layout: "admin-layout" });
  } catch (err) {
    res.status(500).json("error", err);
  }
};

export const initPassportLocal = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true,
      },
      async (req, username, password, done) => {
        try {
          let user = await CustomersModel.findByEmail(username);
          if (!user) {
            return done(null, false);
          }

          let checkPassword = await user.comparePassword(password);

          if (!checkPassword) {
            return done(null, false);
          }
          console.log("ok nha");
          return done(null, user);
        } catch (error) {
          console.log(error);
          return done(nill, false);
        }
      }
    )
  );
};

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

export const CreateUser = async (req, res) => {
  try {
    const newUser = req.body;
    console.log(newUser);
    const user = new CustomersModel(newUser);
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};