import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        customer_id: {
            type: String,
            require: true
        },
        customer_name: {
            type: String,
            require: true,
        },
        customer_address: {
            type: String,
            require: true,
        },
        customer_phone: {
            type: Number,
            require: true,
        },
        payment_method: {
            type: String,
            require: true,
            default: "Trực tiếp"
        },
        total_price: {
            type: Number,
            require: true
        },
        status: {
            type: String,
            require: true,
            default: "pending"
        },
        province: {
            type: String,
            require: true,
        },
        district: {
            type: String,
            require: true,
        }
    },
    { timestamps: true }
);
export const Order = mongoose.model("orders", schema);
