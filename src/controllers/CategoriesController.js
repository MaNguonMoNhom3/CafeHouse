import { Category } from "../models/Category.js";
import { Product } from "../models/Product.js";
import handlebars from "koa-handlebars";

export const index = async (req, res, next) => {
  try {
    CategoryModel.find({})
      .then((category) => {
        category = category.map((category) => category.toObject());
        return category;
      })
      .then((category) => {
        res.render("backend/categories", {
          layout: "admin-layout",
          title: "Category",
          category: category,
        });
      })
      .catch(next);
  } catch (err) {
    res.status(500).json("error", err);
  }
};
const isEqualHelperHandlerbar = function (a, b, opts) {
  if (a == b) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
};
export const getCategories = (req, res, next) => {
  Category.find()
    .then(
      (categories) => (categories = categories.map((item) => item.toObject()))
    )
    .then((categories) => {
      Product.find({})
        .then((json) => {
          json = json.map((item) => item.toObject());
          return json;
        })
        .then((products) => {
          let category = categories[0]._id;
          if (req.params.index) {
            category = categories[req.params.index]._id;
            res.render("frontend/menu.handlebars", {
              singinup: true,
              showHeader: true,
              menu: true,
              showCart: true,
              layout: "home-layout.handlebars",
              categories: categories,
              products: products,
              idCurrent: category,
              helpers: {
                if_equal: isEqualHelperHandlerbar,
              },
            });
          }
        });
    })
    .catch((err) => next(err));
};
