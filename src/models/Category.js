import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true
        },
        description: {
            type: String,
            require: true
        }
    },
    { timestamps: true }
)
export const Category = mongoose.model("categories", schema);