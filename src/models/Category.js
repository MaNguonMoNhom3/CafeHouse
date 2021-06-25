import mongoose from 'mongoose';

const schema = new mongoose.Schema(
{
    CategoryName:{
        type: String,
        require: true
    },
    CategoryDescription: {
        type: String,
        require: true
    }
},
{ timestamps: true }
)
export const Categorys = mongoose.model("categorys", schema);