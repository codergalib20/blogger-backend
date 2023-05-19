import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("Database connected"))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
