import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        subject: {
            type: String,
            require: true
        },
        message: {
            type: String,
            require: true
        },
    },
    { timestamps: true }
)
export const Message = mongoose.model("messages", schema);