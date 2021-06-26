import mongoose from "mongoose";
let Schema = mongoose.Schema;
let CustomersSchema = new Schema({
  username : {
      type: String,
      require: true
  },
  password : {
      type: String,
      require: true
  },
  Name : {
      type: String,
      require: true
  },
  address : {
      type: String,
      require: true
  },
  phone : {
      type: Number ,
      require: true
  }
});

export const CustomersModel = mongoose.model("Customers", CustomersSchema);