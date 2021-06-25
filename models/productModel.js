import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    Name: String,
    Price: {
        type : Number,
        min : 0
    },
    Discount: {
        type : Number,
        min : 0,
        max : 100,
        default : 0
    },
    Image : String,
    Hot : Number,
    Quantity : Number,
    Description : String,
    CategoryId : String
},
{timestamps: true}
);
export const ProductModel = mongoose.model('products', schema);