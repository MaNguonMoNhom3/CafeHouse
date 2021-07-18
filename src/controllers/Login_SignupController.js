import {check, validationResult} from 'express-validator';
import bcrypt from 'bcryptjs';
import {Customers} from '../models/Customer.js'
export const getLoginUser = (req, res) => {
  res.render("frontend/signin", {
    singinup: false,
    showHeader: true,
    showSingInUp: true,
    flexCenter: "display-flex-center",
    layout: "home-layout",
  });
};

export const createUser = (req, res, next)=> {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    // return res.status(422).json(errors.array());
    const alert = errors.array();
    res.render("frontend/signup", {
      singinup: false,
      showHeader: true,
      showSingInUp: true,
      flexCenter: "display-flex-center",
      layout: "home-layout",
      alert,
      dataRequest: req.body
    });
  }else{
    bcrypt.hash(req.body.pass, 10)
    .then((hash) => {
        const customer = new Customers({
          email: req.body.email,
          password: hash,
          name: req.body.name
        });
        customer.save()
        .then(() => {
          res.status(201)
          .render("frontend/signin", {
            singinup: false,
            showHeader: true,
            showSingInUp: true,
            flexCenter: "display-flex-center",
            layout: "home-layout",
            email: req.body.email
          });
          }
        ).catch(
          (error) => {
            res.status(500)
            .render("frontend/signup", {
              singinup: false,
              showHeader: true,
              showSingInUp: true,
              flexCenter: "display-flex-center",
              layout: "home-layout",
              // errorEmail: true,
              dataRequest: req.body
            });
          }
        );
      }
    );
  }
}

export const getSignUpUser = (req, res) => {
  res.render("frontend/signup", {
    singinup: false,
    showHeader: true,
    showSingInUp: true,
    flexCenter: "display-flex-center",
    layout: "home-layout",
  });
};
//
//
//admin
// get Login
export const login = async (req, res) => {
  try {
    res.render("backend/login", { layout: false });
  } catch (err) {
    res.status(500).json("error", err);
  }
};
// get SignUp
export const signUp = async (req, res) => {
  try {
    res.render("backend/signup", { layout: false });
  } catch (err) {
    res.status(500).json("error", err);
  }
};
