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
export const getProducts = (req, res) => {
  try {
    const headers = req.headers;
    const perPage = 3;
    let page = headers.page;
    let pages = 1;
    // const listProducts = await ProductModel.find({ CategoryId: headers.id });
    // res.status(200).json(listProducts);
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