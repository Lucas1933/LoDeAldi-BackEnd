import mongoose from "mongoose";
const collection = "Food";
const schema = new mongoose.Schema({
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
  type: {
    type: String,
    required: true,
  },
  thumbnails: [{ type: String }], // Array of image URLs
});

const foodModel = mongoose.model(collection, schema);
foodModel.isIdValid = async function (id) {
  return mongoose.Types.ObjectId.isValid(id);
};
export default foodModel;
