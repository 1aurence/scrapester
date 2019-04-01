const express = require("express");
const api = express.Router();
const GeneralController = require("../controllers/GeneralController");

api.get("/title", GeneralController.title);
api.get("/screenshot", GeneralController.screenshot);

module.exports = api;
