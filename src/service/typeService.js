import TypeRepository from "../dao/repository/typeRepository.js";
import FoodService from "./foodService.js";
const typeRepository = new TypeRepository();
const foodService = new FoodService();
export default class TypeService {
  async createType(type) {
    /* validation of type pending */
    const createdType = await typeRepository.createType(type);
    return createdType;
  }

  async deleteType(typeId) {
    const deletedType = await typeRepository.deleteType(typeId);
    return deletedType;
  }

  async getTypes() {
    const types = await typeRepository.getTypes();
    return types;
  }

  async updateType(id, type) {
    const currentType = await typeRepository.getTypeById(id);
    const updatedFoodType = await typeRepository.updateType(id, type);
    await foodService.updateFoodsType(currentType.type, updatedFoodType.type);
    return updatedFoodType;
  }
}
