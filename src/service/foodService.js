import FoodRepository from "../dao/repository/foodRepository.js";
import { InvalidFoodIdError } from "../errors/foodErrors.js";
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
    await this.isIdValidAndFoodExists(id);
    await this.isValidFood(food);
    const updatedFood = await foodRepository.updateFood(id, food);
    return updatedFood;
  }

  async deleteFood(id) {
    const deletedFood = await foodRepository.deleteFood(id);
    return deletedFood;
  }

  async isIdValidAndFoodExists(id) {
    const isValid = await foodRepository.isIdValid(id);
    if (!isValid) {
      throw new InvalidFoodIdError(`the food id ${id} is invalid`);
    }
    const exists = await foodRepository.foodExists(id);
    if (!exists) {
      throw new InvalidFoodIdError(`the food id ${id} does not exists`);
    }
  }
  async isValidFood({ name, description, price, thumbnails }) {}
}
