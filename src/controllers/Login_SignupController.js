import {check, validationResult} from 'express-validator';
export const getLoginUser = (req, res) => {
  res.render("frontend/signin", {
    singinup: false,
    showHeader: true,
    showSingInUp: true,
    flexCenter: "display-flex-center",
    layout: "home-layout",
  });
};

export const createUser = (req, res)=> {
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
    });
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
