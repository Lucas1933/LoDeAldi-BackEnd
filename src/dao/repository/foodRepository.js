import foodModel from "../model/foodModel.js";
export default class FoodRepository {
  async getFoodByType(type) {
    const foods = await foodModel.find({ type }).lean();
    return foods;
  }

  async createFood(food) {
    const createdFood = await foodModel.create(food);
    return createdFood;
  }

  async updateFood(id, food) {
    const updatedFood = await foodModel.findByIdAndUpdate(id, food, {
      new: true,
    });
    return updatedFood;
  }
  async updateFoodsType(currentType, newType) {
    const updatedFoods = await foodModel.updateMany(
      { type: currentType },
      { type: newType }
    );
    return updatedFoods;
  }
  async deleteFood(id) {
    const deletedFood = await foodModel.findByIdAndDelete(id);
    return deletedFood;
  }

  async isIdValid(id) {
    const result = await foodModel.isIdValid(id);
    return result;
  }

  async foodExists(id) {
    const result = await foodModel.exists({ _id: id });
    return result;
  }
}
