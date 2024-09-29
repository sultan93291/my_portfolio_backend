require("dotenv").config();
const app = require("./app.js");

const { ConnectDb } = require("./src/ConnectDb/ConnetDb.js");

// calling database
ConnectDb();
