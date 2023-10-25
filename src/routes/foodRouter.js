import { BaseRouter } from "./baseRouter.js";
import __dirname from "../relative_path.js";
import FoodController from "../controller/foodController.js";
import fs from "fs";
import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const baseDirectory = __dirname + "/food-images";
    const foodTypeDirectory = baseDirectory + "/" + req.body.type;
    if (!fs.existsSync(baseDirectory)) {
      fs.mkdirSync(baseDirectory);
    }

    if (!fs.existsSync(foodTypeDirectory)) {
      fs.mkdirSync(foodTypeDirectory);
    }
    callback(null, foodTypeDirectory);
  },
  filename: function (req, file, callback) {
    console.log(req.body);
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
    this.delete("/:type/:imageName/:id", foodController.deleteImage);
    this.put(
      "/",
      imageUploader.array("thumbnailsFilesToUpdate"),
      foodController.updateFood
    );
    this.delete("/:foodId", foodController.deleteFood);
  }
}
