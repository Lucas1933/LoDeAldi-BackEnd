import { InvalidCredentialsError } from "../../errors/login_errors.js";
import adminModel from "../model/admin_model.js";
import bcrypt from "bcrypt";
export default class LoginRepository {
  async validateAdmin(email, password) {
    const admin = await adminModel.findOne({ email: email });
    if (!admin) {
      throw new InvalidCredentialsError("Invalid credentials");
    }

    const result = await bcrypt.compare(password, admin.password);
    if (!result) {
      throw new InvalidCredentialsError("Invalid credentials");
    }

    return result;
  }

  registerAdmin() {}
}
