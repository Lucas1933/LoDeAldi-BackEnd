import { BAD_REQUEST } from "../utils/httpReponses.js";

export class InvalidFoodTypeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidFoodTypeError";
    this.status = BAD_REQUEST;
  }

  getError() {
    return { status: this.status, error: this.name, message: this.message };
  }
}
