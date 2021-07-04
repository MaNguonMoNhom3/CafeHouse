import { Category } from '../models/Category.js';
import { Product } from "../models/Product.js";
import handlebars from "koa-handlebars";

export const index = async (req, res) => {
  try {
    res.render("backend/categories", {
      layout: "admin-layout",
      title: "Categoryy",
    });
  } catch (err) {
    res.status(500).json("error", err);
  }
};
const isEqualHelperHandlerbar = function (a, b, opts) {
  if (a == b) {
    return opts.fn(this)
  } else {
    return opts.inverse(this)
  }
}
export const getCategories = (req, res, next) => {
  let category = [];
  Category.find()
    .then(categories => categories = categories.map(item => item.toObject()))
    .then(categories => {
      Product.find({})
        .then(json => {
          json = json.map(item => item.toObject());
          return json;
        })
        .then(products => {
          res.render("frontend/menu", {
            singinup: true,
            showHeader: true,
            menu: true,
            showCart: true,
            layout: "home-layout.handlebars",
            categories: categories,
            products: products,
            idCurrent: categories[0]._id,
            helpers: {
              if_equal: isEqualHelperHandlerbar
            }
          });
        })
    })
    .catch(err => next(err));
  console.log(category);

};
