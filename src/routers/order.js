import express from "express";
import { index } from "../controllers/OrdersController.js";
import { Order } from "../models/Order.js";

const router = express.Router();

router.get("/", index);
router.get("/:id", (req, res, next) => {
  Order.deleteOne({ _id: req.params.id })
    .then(() => {
      //   res.status(200).json({ message: "Deleted !" });
      res.redirect("/admin/order");
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
});

export default router;
