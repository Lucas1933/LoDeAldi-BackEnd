import express from "express";
import cors from "cors";
import config from "./appConfig/config.js";
import connectToDatabase from "./dao/dbConfig.js";

import FoodRouter from "./routes/foodRouter.js";
import TypeRouter from "./routes/typeRouter.js";
import ComboRouter from "./routes/comboRouter.js";
import LoginRouter from "./routes/login_router.js";

import errorHandler from "./middleware/errorHandler.js";

import cluster from "cluster";
import os from "os";

const cpus = os.cpus().length;

if (cluster.isPrimary) {
  console.log(
    `Principal process, starting workers.` +
      "\n" +
      `Lo De Aldi API listening on: ${config.app.PORT}`
  );

  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`The worker ${worker.process.pid} died`);
    console.log("Creating new worker");
    cluster.fork();
  });
} else {
  const app = express();
  const port = config.app.PORT;

  app.use(
    cors({
      origin: config.app.API_URL,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );
  const foodRouter = new FoodRouter();
  const typeRouter = new TypeRouter();
  const comboRouter = new ComboRouter();
  const loginRouter = new LoginRouter();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/lodealdi-api/v1/food", foodRouter.getRouter());
  app.use("/lodealdi-api/v1/type", typeRouter.getRouter());
  app.use("/lodealdi-api/v1/combo", comboRouter.getRouter());
  app.use("/lodealdi-api/v1/login", loginRouter.getRouter());

  connectToDatabase(config.mongo.URL);

  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`Worker ${process.pid} is running`);
  });
}
