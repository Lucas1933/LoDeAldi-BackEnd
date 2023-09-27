import mongoose from "mongoose";
const collection = "Admin";
const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const adminModel = mongoose.model(collection, schema);

export default adminModel;
