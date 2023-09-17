import FoodService from "../service/foodService.js";
import { OK } from "../utils/httpReponses.js";
const foodService = new FoodService();
export default class FoodController {
  async createFood(req, res) {
    const newFood = req.body;
    const createdFood = await foodService.createFood(newFood);
    res.status(OK).send({
      status: OK,
      message: "Food created succesfully",
      payload: createdFood,
    });
  }
  async getFood(req, res) {
    const type = req.params.type;
    const foods = await foodService.getFoodByType(type);
    res.status(OK).send({
      status: OK,
      message: "Foods retrived succesfully",
      payload: foods,
    });
  }
  async updateFood(req, res, next) {
    try {
      const id = req.body._id;
      const food = req.body;
      const updatedFood = await foodService.updateFood(id, food);
      res.status(OK).send({
        status: OK,
        message: "Food updated succesfully",
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteFood(req, res) {
    const id = req.params.foodId;
    const deletedFood = await foodService.deleteFood(id);
    res.status(OK).send({
      status: OK,
      message: `Food ${deletedFood.name} deleted successfully`,
      payload: deletedFood,
    });
  }
}
