import { CategoryModel } from "../models/Category.js";

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
export const getCategories = async (req, res) => {
  try {
    const categorys = await CategoryModel.find();
    res.status(200).json(categorys);
  } catch (err) {
    res.status(500).json("error", err);
  }
};
