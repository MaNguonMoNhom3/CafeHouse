export const CartController = (req, res) => {
  res.render("FrontEnd/cart", {
    showHeader: false,
    showCart: false,
    showHeaderContent: false,
    singinup: true,
    layout: 'home-layout'
  });
};
