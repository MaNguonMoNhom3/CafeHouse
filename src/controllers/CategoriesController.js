import { Category } from "../models/Category.js";
import { Product } from "../models/Product.js";
import handlebars from "koa-handlebars";

export const index = async (req, res, next) => {
  try {
    Category.find({})
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
const times = function (n, block) {
  var accum = '';
  for (var i = 0; i < n; ++i) {
    block.data.index = i;
    block.data.first = i === 0;
    block.data.last = i === (n - 1);
    accum += block.fn(this);
  }
  return accum;
}

export const getCategories = (req, res, next) => {
  Category.find()
    .then((categories) => {
      categories = categories.map((item) => item.toObject());
      return categories;
    })
    .then((categories) => {
      let page = req.params.page || 1;
      let category = categories[0]._id;
      if (req.params.index)
        category = categories[req.params.index]._id;
      Product.find({ CategoryId: category })
        .then(pro => {
          let count = Math.ceil(pro.length / 3);
          if (count == 0) count = 1;
          Product.find({ CategoryId: category })
            .skip((3 * page) - 3)
            .limit(3)
            .then((json) => {
              json = json.map((item) => item.toObject());
              return json;
            })
            .then((products) => {

              res.render("frontend/menu.handlebars", {
                singinup: true,
                showHeader: true,
                menu: true,
                showCart: true,
                layout: "home-layout.handlebars",
                categories: categories,
                products: products,
                idCurrent: category,
                countPage: count,
                current: req.params.index,
                helpers: {
                  if_equal: isEqualHelperHandlerbar,
                  times: times
                },
              });
            });
        })

    })
    .catch((err) => next(err));
};
