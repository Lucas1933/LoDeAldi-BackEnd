import FoodRepository from "../dao/repository/foodRepository.js";
const foodRepository = new FoodRepository();
export default class FoodService {
  async getFoodByType(type) {
    const foods = await foodRepository.getFoodByType(type);
    return foods;
  }

  async createFood(food) {
    const createdFood = await foodRepository.createFood(food);
    return createdFood;
  }

  async updateFood(id, food) {
    const updatedFood = await foodRepository.updateFood(id, food);
    return updatedFood;
  }

  async deleteFood(id) {
    const deletedFood = await foodRepository.deleteFood(id);
    return deletedFood;
  }

  isValidType(type) {}
}
