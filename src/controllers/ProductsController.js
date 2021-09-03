import { Product } from "../models/Product.js";
import { Category } from '../models/Category.js';

export const index = async (req, res, next) => {
  try {
    Product.find({})
      .then((product) => {
        product = product.map((product) => product.toObject());
        return product;
      })
      .then((product) => {
        res.render("backend/products", {
          layout: "admin-layout",
          title: "product",
          product: product,
        });
      })
      .catch(next);
  } catch (err) {
    console.log(err);
  }
};


//get product by hot
export const getProductForHome = (req, res, next) => {
  const user = req.session.user || "";
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
        user: { user: user, isExist: user ? true : false },
      });
    })
    .catch(err => {
      next(err);
    });
}
export const getProductForTodaySpecial = (req, res, next) => {
  const user = req.session.user || "";
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
        user: { user: user, isExist: user ? true : false },
      });
    })
    .catch(err => {
      next(err);
    });
}

export const detailProduct = async (req, res, next) => {
  const product = await Product.findOne({ Name: req.params.name });
  let price2 = product.Price - product.Price * (product.Discount / 100);
  const user = req.session.user || "";
  await res.render("frontend/detail", {
    showHeader: false,
    showCart: true,
    singinup: true,
    showHeaderContent: false,
    layout: "home-layout",
    product: product,
    priceDiscount: Math.round(price2),
    user: { user: user, isExist: user ? true : false },
  });
}