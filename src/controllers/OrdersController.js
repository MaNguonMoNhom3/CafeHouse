import { Order } from '../models/Order.js';
export const index = async (req, res) => {
  try {
    res.render("backend/orders", { layout: "admin-layout" });
  } catch (err) {
    res.status(500).json("error", err);
  }
};
//
//
//front-end
export const checkout = (req, res) => {
  try {
    let sess = req.session;
    let user = sess.user || "";
    res.render("frontend/checkout", {
      showHeader: false,
      showCart: false,
      singinup: true,
      showHeaderContent: false,
      layout: "home-layout",
      user: { user: user, isExist: user ? true : false },
    });
  } catch (err) {
    res.status(500).json("error", err);
  }
}

export const createOrder = async (req, res) => {
  try {
    let body = req.body;
    let infOrder = {
      customer_id: body.customer_id,
      customer_name: body.name,
      customer_address: body.detail_address,
      customer_phone: body.phone,
      total_price: body.total,
      district: body.address_district,
      province: body.address_provinces,
    }
    const order = new Order(infOrder);
    await order.save();
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
