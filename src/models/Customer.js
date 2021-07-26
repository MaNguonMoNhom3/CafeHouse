import mongoose from "mongoose";
let Schema = mongoose.Schema;
let Customer = new Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    default:null,
    // unique: true
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
},
{ timestamps: true });

export const Customers = mongoose.model("Customers", Customer);
