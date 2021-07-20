import { Product } from "../models/Product.js";
import { Category } from '../models/Category.js';

export const index = async (req, res) => {
  try {
    res.render("backend/products", { layout: "admin-layout" });
  } catch (err) {
    res.status(500).json("error", err);
  }
};

//get products by name category
export const getProductsByCategory = (req, res, next) => {
  Product
    .find({ CategoryId: req.params.id })
    .then(json => {
      json = json.map(item => item.toObject());
      return json;
    })
    .then(products => {
      Category.find()
        .then(json => {
          json = json.map(item => item.toObject());
          return json;
        })
        .then(categories => {
          res.render("frontend/menu", {
            singinup: true,
            showHeader: true,
            menu: true,
            showCart: true,
            showHeaderContent: true,
            layout: "home-layout.handlebars",
            categories: categories,
            products: products
          });
        })

    })
    .catch(next)
}

//get product by hot
export const getProductForHome = (req, res, next) => {
  let sess = req.session;
  let user = sess.user || "";
  Product.find()
    .sort({ "Hot": -1 })
    .limit(3)
    .then(products => {
      products = products.map(item => item.toObject());
      return products;
    })
    .then(products => {
      res.render("frontend/home", {
        singinup: true,
        showHeader: true,
        home: true,
        showCart: true,
        showHeaderContent: true,
        layout: "home-layout.handlebars",
        products: products,
        user: {user: user, isExist: user ? true : false},
      });
    })
    .catch(err => {
      next(err);
    });
}
export const getProductForTodaySpecial = (req, res, next) => {
  Product.find()
    .sort({ "Hot": -1 })
    .limit(6)
    .then(products => {
      let pro = products.map(item => item.toObject());
      return pro;
    })
    .then(products => {
      res.render("frontend/today-special", {
        singinup: true,
        showHeader: true,
        todayspecial: true,
        showCart: true,
        showHeaderContent: true,
        layout: "home-layout",
        products: products,
      });
    })
    .catch(err => {
      next(err);
    });
}
