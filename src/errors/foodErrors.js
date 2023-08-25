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
export class InvalidFoodIdError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidFoodIdError";
    this.status = BAD_REQUEST;
  }

  getError() {
    return { status: this.status, error: this.name, message: this.message };
  }
}
