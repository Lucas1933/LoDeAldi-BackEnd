import mongoose from "mongoose";
// Set up Mongoose connection
const connectToDatabase = async () => {
  try { 
    await mongoose.connect("mongodb+srv://lucas1933:1234@clusterpk.ghi4uir.mongodb.net/loDeAldi?retryWrites=true&w=majority");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToDatabase;
