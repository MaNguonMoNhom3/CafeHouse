import { Order } from '../models/Order.js';
import { OrderDetail } from '../models/OrderDetail.js';

export const index = async (req, res, next) => {
  try {
    Order.find({})
      .then((order) => {
        order = order.map((order) => order.toObject());
        return order;
      })
      .then((order) => {
        res.render("backend/categories", {
          layout: "admin-layout",
          title: "order",
          order: order,
        });
      })
      .catch(next);
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

export const createOrder = (req, res) => {
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
    let infOrderDetail = JSON.parse(body.order_detail);
    const order = new Order(infOrder);
    order.save()
      .then(item => {
        infOrderDetail.map(value => {
          const dt = new OrderDetail({
            product_id: value.id,
            order_id: item._id,
            quantity: value.quantity,
            sugar: value.percentSugar,
            size: value.size,
          });
          dt.save();
        });
        res.redirect("http://localhost:5500");
      })
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
