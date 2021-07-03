export const SignInController = (req, res) => {
  res.render("frontend/signin", {
    singinup: false,
    showHeader: true,
    showSingInUp: true,
    flexCenter: "display-flex-center",
    layout: "home-layout",
  });
};

export const SignUpController = (req, res) => {
  res.render("frontend/signup", {
    singinup: false,
    showHeader: true,
    showSingInUp: true,
    flexCenter: "display-flex-center",
    layout: "home-layout",
  });
};
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
