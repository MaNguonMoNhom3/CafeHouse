import mongoose from "mongoose";
export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:YsMgkjmq9rV85jJP@cluster0.y3awn.mongodb.net/CafeHouse?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log("Successfully");
  } catch (error) {
    console.log(error);
  }
};
