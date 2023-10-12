import dotenv from "dotenv";
dotenv.config({
  path: process.env.NODE_ENV == "dev" ? "./.env.dev" : "./.env.prod",
});
console.log(process.env.API_URL);
export default {
  app: {
    PORT: process.env.PORT || 8080,
    API_URL: process.env.API_URL,
  },
  mongo: {
    URL: process.env.DB_URL,
  },
};
