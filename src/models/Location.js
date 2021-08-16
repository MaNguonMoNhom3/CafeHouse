import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    customer_id: {
        type: String,
        require: true,
        unique: true
    },
    province: {
        type: String,
    },
    district: {
        type: String,
    },
    detail: {
        type: String
    }
});
export const Location = mongoose.model("location", schema);