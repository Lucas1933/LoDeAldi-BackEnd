import { BaseRouter } from "./baseRouter.js";
import ComboController from "../controller/comboController.js";
const comboController = new ComboController();
export default class ComboRouter extends BaseRouter {
  init() {
    this.get("/", comboController.getCombos);
    this.post("/", comboController.createCombo);
    this.delete("/:comboId", comboController.deleteCombo);
  }
}
