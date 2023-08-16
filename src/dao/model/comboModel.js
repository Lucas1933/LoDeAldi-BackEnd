import mongoose from "mongoose";
const collection = "Combo";
const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

const comboModel = mongoose.model(collection, schema);

export default comboModel;
