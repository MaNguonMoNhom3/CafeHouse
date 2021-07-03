import { json } from "express";
import { ProductModel } from "../models/Product.js";

export const index = async (req, res) => {
  try {
    res.render("backend/products", { layout: "admin-layout" });
  } catch (err) {
    res.status(500).json("error", err);
  }
};

//get products by name category
export const getProductsByCategory = (req, res) => {
  try {
    const headers = req.headers;
    const perPage = 3;
    let page = headers.page;
    ProductModel
      .find({ CategoryId: headers.id })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, products) => {
        ProductModel.countDocuments({ CategoryId: headers.id }, (err, count) => {
          if (err) return next(err);
          if (count == 0) count = 1;
          res.status(200).json({ products: products, pages: count / perPage });
        });
      });
  } catch (err) {
    res.status(500).json("error", err);
  }
}

//get product by hot
export const getProductByHot = (req, res, next) => {
  try {
    ProductModel.find()
      .sort({ "Hot": -1 })
      .limit(6)
      .exec((err, products) => {
        if (err) return next(err);
        res.status(200).json(products);
      });
  } catch (err) {
    res.status(500).json("error", err);
  }

}