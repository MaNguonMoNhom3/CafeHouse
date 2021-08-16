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
  const user = req.session.user || "";
  Category.find()
    .then((categories) => {
      categories = categories.map((item) => item.toObject());
      return categories;
    })
    .then((categories) => {
      let page = 1;
      let category = 0;
      let pageAsNumber = req.query.page;
      let categoryAsNumber = req.query.category;
      if (!isNaN(pageAsNumber) && pageAsNumber > 0) {
        page = pageAsNumber;
      }
      if (!isNaN(categoryAsNumber) && categoryAsNumber < categories.length && categoryAsNumber >= 0) {
        category = categoryAsNumber;
      }
      let categoryId = categories[category]._id;
      Product.find({ CategoryId: categoryId })
        .then(pro => {
          let count = Math.ceil(pro.length / 3);
          if (count == 0) count = 1;
          let pre = false; let next = false;
          if (page > 0 && page <= count) {
            if (page == 1) {
              pre = false;
              next = true;
            } else
              if (page == count) {
                pre = true;
                next = false;
              }
            if (count == 1) {
              pre = false;
              next = false;
            }
          }
          Product.find({ CategoryId: categoryId })
            .skip((3 * page) - 3)
            .limit(3)
            .then((json) => {
              json = json.map((item) => item.toObject());
              return json;
            })
            .then((products) => {

              res.render("frontend/menu", {
                singinup: true,
                showHeader: true,
                menu: true,
                showCart: true,
                showHeaderContent: true,
                layout: "home-layout",
                categories: categories,
                products: products,
                idCurrent: categoryId,
                countPage: count,
                currentCategory: category,
                currentPage: page - 1,
                previous: pre,
                next: next,
                helpers: {
                  if_equal: isEqualHelperHandlerbar,
                  times: times
                },
                user: { user: user, isExist: user ? true : false },
              });
            });
        })

    })
    .catch((err) => next(err));
};
