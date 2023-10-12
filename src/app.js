import express from "express";
import cors from "cors";
import config from "./appConfig/config.js";
import connectToDatabase from "./dao/dbConfig.js";

import FoodRouter from "./routes/foodRouter.js";
import TypeRouter from "./routes/typeRouter.js";
import ComboRouter from "./routes/comboRouter.js";
import LoginRouter from "./routes/login_router.js";

import errorHandler from "./middleware/errorHandler.js";

const app = express();
const port = config.app.PORT;

app.use(
  cors({
    origin: config.app.API_URL,
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
  console.log(`Lo De Aldi API listening on: ${port}`);
});
