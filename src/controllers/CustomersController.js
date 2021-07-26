import {check, validationResult} from 'express-validator';
import bcrypt from 'bcryptjs';
import { Customers } from "../models/Customer.js";

export const index = async (req, res) => {
  try {
    res.render("backend/customers", { layout: "admin-layout" });
  } catch (err) {
    res.status(500).json("error", err);
  }
};

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


export const updateCustomers = async (req, res) => {
  const profile = req.body;
  let sess = req.session;
  try{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.render("frontend/profile", {
        singinup: true,
        showHeader: true,
        showHeaderContent: false,
        showCart: true,
        layout: "home-layout",
        errorPass: true,
        user: {user: sess.user, isExist: sess.user ? true : false},
      });
    }else {
      let passwordChange;
      let User = {
        province: profile.address_provinces,
        district: profile.address_district,
        detail: profile.address,
      }
      if(profile.pass !== "" && profile.re_pass !== ""){
        let salt = bcrypt.genSaltSync(10);
        passwordChange = bcrypt.hashSync(profile.pass, salt);
        User = {...User, password: passwordChange};
      }
      await Customers.findOneAndUpdate({email: profile.email}, {name: profile.name, phone: profile.phone, ...User});
      let proUpdate = {name: profile.name, email: profile.email, phone: profile.phone ,...User};
      sess.user = proUpdate;
      res.render("frontend/profile", {
        singinup: true,
        showHeader: true,
        showHeaderContent: false,
        showCart: true,
        layout: "home-layout",
        user: {user: proUpdate, isExist: proUpdate ? true : false},
      });
    }
  } catch(err){
    res.status(500).json("error", err);
  }
}
