import { UNAUTHORIZED } from "../utils/httpReponses.js";

export class InvalidCredentialsError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidCredentialsError";
    this.status = UNAUTHORIZED;
  }

  getError() {
    return { status: this.status, error: this.name, message: this.message };
  }
}
