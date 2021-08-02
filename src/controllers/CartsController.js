export const CartController = (req, res) => {
  try {
    let sess = req.session;
    let user = sess.user || "";
    res.render("FrontEnd/cart", {
      showHeader: false,
      showCart: false,
      showHeaderContent: false,
      singinup: true,
      layout: 'home-layout',
      user: { user: user, isExist: user ? true : false },
    });
  } catch (err) {
    res.status(500).json("error", err);
  }
};
