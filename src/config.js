const { config } = require("dotenv");
config();

const PORT = process.env.PORT || 3001;
const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://mnaheavy:S8GenOIhz0FA8ENz@cluster0.tuwlc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

module.exports = {
  PORT,
  MONGODB_URI,
};
