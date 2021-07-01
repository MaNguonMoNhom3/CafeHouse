export const index = (req, res) => {
  res.render("frontend/home", {
    singinup: true,
    showHeader: true,
    home: true,
    showCart: true,
    layout: "home-layout.handlebars",
  });
};
