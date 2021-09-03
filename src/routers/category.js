import express from "express";
import { index, getCategories } from "../controllers/CategoriesController.js";
import {Category} from "../models/Category.js";

const router = express.Router();

router.get("/", index);

router.get("/:id", (req, res, next) => {
    Category.deleteOne({ _id: req.params.id })
      .then(() => {
        //   res.status(200).json({ message: "Deleted !" });
        res.redirect("/admin/category");
      })
      .catch((error) => {
        res.status(400).json({ error: error });
      });
});

router.post("/", (req, res, next) => {
    Category.insertMany(req.body).then(() => {
      res.redirect("/admin/category");
    })
    .catch(error => console.error(error))
});

router.post("/:ID", (req, res, next) => {
  Category.findByIdAndUpdate(req.body).then(() => {
    res.redirect("/admin/category");
  })
  .catch(error => console.error(error))
});
  

export default router;
