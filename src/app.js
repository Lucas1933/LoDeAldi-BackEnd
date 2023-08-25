import express from "express";
import cors from "cors";
import "./appConfig/config.js";
import connectToDatabase from "./dao/dbConfig.js";

import FoodRouter from "./routes/foodRouter.js";
import TypeRouter from "./routes/typeRouter.js";
import ComboRouter from "./routes/comboRouter.js";

import errorHandler from "./middleware/errorHandler.js";

/* basic starting config */
const app = express();
const port = process.env.PORT || 8080;

/* cors */
app.use(cors());

/* initilize each router */
const foodRouter = new FoodRouter();
const typeRouter = new TypeRouter();
const comboRouter = new ComboRouter();

/* use utilities */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* use routers*/
app.use("/lodealdi-api/v1/food", foodRouter.getRouter());
app.use("/lodealdi-api/v1/type", typeRouter.getRouter());
app.use("/lodealdi-api/v1/combo", comboRouter.getRouter());

/* connect to db */
connectToDatabase();

/* error handler middleware use */
app.use(errorHandler);

/* start the server */
app.listen(port, () => {
  console.log(`Lo De Aldi API listening on: ${port}`);
});