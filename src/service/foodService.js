import FoodRepository from "../dao/repository/foodRepository.js";
import { InvalidFoodIdError } from "../errors/foodErrors.js";
import fs from "fs";
import path from "path";
import __dirname from "../relative_path.js";
const foodRepository = new FoodRepository();
export default class FoodService {
  async getFoodByType(type) {
    const foods = await foodRepository.getFoodByType(type);
    return foods;
  }

  async createFood(food, files) {
    for (const file of files) {
      food.thumbnails.push(file.filename);
    }

    const createdFood = await foodRepository.createFood(food);
    return createdFood;
  }

  async updateFood(id, food) {
    await this.isIdValidAndFoodExists(id);

    const updatedFood = await foodRepository.updateFood(id, food);
    return updatedFood;
  }

  async deleteFood(id) {
    const deletedFood = await foodRepository.deleteFood(id);
    await this.deleteImages(deletedFood.thumbnails, deletedFood.type);
    return deletedFood;
  }
  async updateFoodsType(currentType, newType) {
    const foods = await foodRepository.updateFoodsType(currentType, newType);
    return foods;
  }
  getImage(path) {
    const absolutePath = __dirname + "/food-images" + path;
    try {
      if (fs.existsSync(absolutePath)) {
        const imageStream = fs.createReadStream(imagePath);
        return imageStream;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async deleteImages(imgsArray, type) {
    const directoryPath = __dirname + "/food-images" + "/" + type;

    imgsArray.forEach((fileName) => {
      const filePath = path.join(directoryPath, fileName);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Deleted ${fileName}`);
      } else {
        console.log(`${fileName} does not exist.`);
      }
    });
  }
  async deleteOneImage(imageName, type, id) {
    await foodRepository.deleteImage(imageName, id);
    const imagePath = __dirname + "/food-images" + "/" + type + "/" + imageName;
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
      console.log(`Deleted ${imagePath}`);
    } else {
      console.log(`${imagePath} does not exist.`);
    }
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
}
