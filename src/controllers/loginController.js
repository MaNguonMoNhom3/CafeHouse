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
