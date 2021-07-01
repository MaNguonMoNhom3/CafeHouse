import { ProductModel } from "../models/Product.js";

export const index = async (req, res) => {
  try {
    res.render("backend/products", { layout: "admin-layout" });
  } catch (err) {
    res.status(500).json("error", err);
  }
};

export const getProducts = async (req, res) => {
  try {
    const id = req.headers.id;
    const listProducts = await ProductModel.find({ CategoryId: id });
    res.status(200).json(listProducts);
  } catch (err) {
    res.status(500).json("error", err);
  }
}