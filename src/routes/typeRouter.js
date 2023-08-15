import { BaseRouter } from "./baseRouter.js";
import TypeController from "../controller/typeController.js";
const typeController = new TypeController();
export default class TypeRouter extends BaseRouter {
  init() {
    this.get("/", typeController.getTypes);
    this.post("/", typeController.createType);
    this.delete("/", typeController.deleteType);
  }
}
