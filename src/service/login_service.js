import LoginRepository from "../dao/repository/login_repository.js";

const loginRepository = new LoginRepository();

export default class LoginService {
  async validateAdmin(email, password) {
    const result = await loginRepository.validateAdmin(email, password);
  }
}
