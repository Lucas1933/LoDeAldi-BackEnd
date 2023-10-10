import LoginService from "../service/login_service.js";
import { OK } from "../utils/httpReponses.js";

const loginService = new LoginService();
export default class LoginController {
  async validateAdmin(req, res, next) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      await loginService.validateAdmin(email, password);
      res.status(OK).send({
        status: OK,
        message: "Admin authenticated",
      });
    } catch (error) {
      next(error);
    }
  }
}
