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

  async deleteFood(id) {
    const deletedFood = await foodModel.findByIdAndDelete(id);
    return deletedFood;
  }
}
