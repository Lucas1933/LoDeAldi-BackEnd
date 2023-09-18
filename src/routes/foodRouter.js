import { BaseRouter } from "./baseRouter.js";
import __dirname from "../relative_path.js";
import FoodController from "../controller/foodController.js";
import fs from "fs";
import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const directory = __dirname + "/food-images/" + req.body.type;
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
    callback(null, directory);
  },
  filename: function (req, file, callback) {
    const foodName = req.body.name.split(" ").join("");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(null, foodName + "_" + uniqueSuffix + ".jpg");
  },
});
const imageUploader = multer({ storage });
const foodController = new FoodController();
export default class FoodRouter extends BaseRouter {
  init() {
    this.post(
      "/",
      imageUploader.array("thumbnails"),
      foodController.createFood
    );
    this.get("/:type", foodController.getFood);
    this.get("/:type/:imageName", foodController.getImage);
    this.put("/", foodController.updateFood);
    this.delete("/:foodId", foodController.deleteFood);
  }
}
