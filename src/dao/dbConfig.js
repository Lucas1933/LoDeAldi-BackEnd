import mongoose from "mongoose";
const connectToDatabase = async (DB_URL) => {
  try {
    console.log(DB_URL);
    await mongoose.connect(DB_URL);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToDatabase;
