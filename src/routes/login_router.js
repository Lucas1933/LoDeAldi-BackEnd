import LoginController from "../controller/login_controller.js";
import { BaseRouter } from "./baseRouter.js";
const loginController = new LoginController();
export default class LoginRouter extends BaseRouter {
  init() {
    this.post("/", loginController.validateAdmin);
  }
}
