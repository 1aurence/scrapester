const express = require("express");
const api = express.Router();
const GeneralController = require("../controllers/GeneralController");

api.get("/title", GeneralController.title);

module.exports = api;
