import {check, validationResult} from 'express-validator';
import bcrypt from 'bcryptjs';
import {Customers} from '../models/Customer.js';
import { Location } from '../models/Location.js';

export const getLoginUser = (req, res) => {
  res.render("frontend/signin", {
    singinup: false,
    showHeader: true,
    showSingInUp: true,
    flexCenter: "display-flex-center",
    layout: "home-layout",
  });
};

export const getSignUpUser = (req, res) => {
  res.render("frontend/signup", {
    singinup: false,
    showHeader: true,
    showSingInUp: true,
    flexCenter: "display-flex-center",
    layout: "home-layout",
  });
};

export const SignUp = (req, res, next)=> {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
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
    var salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(req.body.pass, salt)
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
      )
      .catch(
        (error) => {
          res.status(500)
          .render("frontend/signup", {
            singinup: false,
            showHeader: true,
            showSingInUp: true,
            flexCenter: "display-flex-center",
            layout: "home-layout",
            errorEmail: true,
            dataRequest: req.body
          });
        }
      );
    }
}

export const Login = async (req, res, next) => {
  let {your_pass, email} = req.body;
  try{
    const user = await Customers.find({email: email});
    if(bcrypt.compareSync(your_pass, user[0].password))
    {
      let sess = req.session;
      sess.user = user[0];
      res.redirect("http://localhost:5500");
      res.end("done");
    }else{
      res.render("frontend/signin", {
        singinup: false,
        showHeader: true,
        showSingInUp: true,
        flexCenter: "display-flex-center",
        layout: "home-layout",
        email: email,
        errorEmailOrPass: true
      });
    }
  } catch(err){
    res.render("frontend/signin", {
      singinup: false,
      showHeader: true,
      showSingInUp: true,
      flexCenter: "display-flex-center",
      layout: "home-layout",
      email: email,
      errorEmailOrPass: true
    });
  }
}
//
//
//profile
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