import passport from "passport";
import bcrypt from 'bcryptjs';
import passportLocal from "passport-local";
import { Customers } from "../models/Customer.js";

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
          let user = await Customers.findByEmail(username);
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
    const user = new Customers(newUser);
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getProfile = (req, res) => {
  try {
    let sess = req.session;
    let user = sess.user || "";
    res.render("frontend/profile", {
      singinup: true,
      showHeader: true,
      showHeaderContent: false,
      showCart: true,
      layout: "home-layout",
      user: {user: user, isExist: user ? true : false},
    });
  } catch (err) {
    res.status(500).json("error", err);
  }
}

export const updateProfile = async (req, res) => {
  const profile = req.body;
  try{
    var salt = bcrypt.genSaltSync(10);
    let pass = bcrypt.hashSync(profile.pass, salt)
    let strAddress = `${profile.address}(${profile.address_district}-${profile.address_provinces})`
    const up = {
      name: profile.name,
      password: pass,
      phone: profile.phone,
      address: strAddress
    }
    const update = await Customers.findOneAndUpdate({email: profile.email}, up )
    await update.save();
    let sess = req.session;
    let proUpdate = {email: profile.email, ...up};
    sess.user = proUpdate;
    res.render("frontend/profile", {
      singinup: true,
      showHeader: true,
      showHeaderContent: false,
      showCart: true,
      layout: "home-layout",
      user: {user: proUpdate, isExist: proUpdate ? true : false},
    });
  } catch(err){
    res.status(500).json("error", err);
  }
}