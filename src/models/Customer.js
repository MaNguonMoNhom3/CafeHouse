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
  address: {
    type: String,
    default:""
  },
  phone: {
    type: Number,
    default:"",
    // unique: true
  },
},
{ timestamps: true });

export const Customers = mongoose.model("Customers", Customer);
