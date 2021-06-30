import { CategoryModel } from "../models/Category.js";

export const index = async (req, res) => {
  try {
    res.render("backend/category", { layout: "admin-layout" });
    // const categorys = await CategoryModel.find();
    // res.status(200).json(categorys);
  } catch (err) {
    res.status(500).json("error", err);
  }
};
