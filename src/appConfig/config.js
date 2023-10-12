import dotenv from "dotenv";
dotenv.config({
  path: process.env.NODE_ENV == "dev" ? "./.env.dev" : "./.env.prod",
});

export default {
  app: {
    PORT: process.env.PORT || 8080,
  },
  mongo: {
    URL: process.env.DB_URL,
  },
};
