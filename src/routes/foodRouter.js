import { BaseRouter } from "./baseRouter.js";
import FoodController from "../controller/foodController.js";
const foodController = new FoodController();
export default class FoodRouter extends BaseRouter {
  init() {
    this.post("/", foodController.createFood);
    this.get("/:type", foodController.getFood);
    this.put("/", foodController.updateFood);
    this.delete("/:foodId", foodController.deleteFood);
  }
}
