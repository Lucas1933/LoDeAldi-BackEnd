import mongoose from "mongoose";
// Set up Mongoose connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_LOCAL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToDatabase;
