import FoodRepository from "../dao/repository/foodRepository.js";
import { InvalidFoodIdError } from "../errors/foodErrors.js";
import fs from "fs";
import __dirname from "../relative_path.js";
const foodRepository = new FoodRepository();
export default class FoodService {
  async getFoodByType(type) {
    const foods = await foodRepository.getFoodByType(type);
    return foods;
  }

  async createFood(food, thumbnails) {
    food.thumbnails = [];
    for (const file of thumbnails) {
      food.thumbnails.push(file.filename);
    }
    const createdFood = await foodRepository.createFood(food);
    return createdFood;
  }
  getImage(path) {
    const absolutePath = __dirname + "/food-images" + path;
    console.log(absolutePath);
    try {
      if (fs.existsSync(absolutePath)) {
        const imageStream = fs.createReadStream(imagePath);
        return imageStream;
      }
    } catch (error) {
      console.log(error);
    }
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
  async updateFoodsType(currentType, newType) {
    const foods = await foodRepository.updateFoodsType(currentType, newType);
    return foods;
  }

  async isValidFood({ name, description, price, thumbnails }) {}
}
