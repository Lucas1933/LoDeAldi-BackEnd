import mongoose from "mongoose";
const collection = "Type";
const schema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const typeModel = mongoose.model(collection, schema);

export default typeModel;
