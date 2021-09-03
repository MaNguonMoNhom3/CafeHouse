import express from "express";
import { index } from "../controllers/ProductsController.js";
import {Product} from "../models/Product.js";

const router = express.Router();

router.get("/", index);

router.get("/:id", (req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
      .then(() => {
        //   res.status(200).json({ message: "Deleted !" });
        res.redirect("/admin/product");
      })
      .catch((error) => {
        res.status(400).json({ error: error });
      });
  });

router.post("/", (req, res, next) => {
    Product.insertMany(req.body).then(() => {
      res.redirect("/admin/product");
    })
    .catch(error => console.error(error))
});

router.post("/:id", (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, req.body).then(() => {
      res.redirect("/admin/product");
    })
    .catch(error => console.error(error))
  });


export default router;
