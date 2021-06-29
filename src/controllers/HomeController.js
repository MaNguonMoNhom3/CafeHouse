export const AdminController = (req, res) => {
  res.render("backend/home", {
    singinup: true,
    showHeader: true,
    home: true,
    showCart: true,
    layout: "admin-layout.handlebars",
  });
};
export const HomeController = (req, res) => {
  res.render("frontend/home", {
    singinup: true,
    showHeader: true,
    home: true,
    showCart: true,
    layout: "home-layout.handlebars",
  });
};
