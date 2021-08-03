import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        product_id: {
            type: String,
            require: true,
        },
        order_id: {
            type: String,
            require: true,
        },
        quantity: {
            type: Number,
            require: true,
        },
        sugar: {
            type: Number,
            require: true,
        },
        size: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);
export const OrderDetail = mongoose.model("order_details", schema);
