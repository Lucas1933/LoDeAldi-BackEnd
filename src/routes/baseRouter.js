import { Router } from "express";
export class BaseRouter {
  constructor() {
    this.router = Router();
    this.init();
  }
  init() {}
  getRouter() {
    return this.router;
  }
  get(path, ...callbacks) {
    this.router.get(path, this.applyCallBacks(callbacks));
  }
  post(path, ...callbacks) {
    this.router.post(path, this.applyCallBacks(callbacks));
  }
  put(path, ...callbacks) {
    this.router.put(path, this.applyCallBacks(callbacks));
  }
  delete(path, ...callbacks) {
    this.router.delete(path, this.applyCallBacks(callbacks));
  }

  applyCallBacks(callbacks) {
    return callbacks.map((callbacks) => async (...params) => {
      try {
        await callbacks.apply(this, params);
      } catch (error) {
        console.log(error);
        req, res, next;
        params[1].status(500).send(error);
      }
    });
  }
}
