const express = require("express");
const api = express.Router();
const GeneralController = require("../controllers/GeneralController");
const { verifyToken } = require("../middleware/verifyToken");

api.get("/title", verifyToken, GeneralController.title);
api.get("/screenshot", verifyToken, GeneralController.screenshot);

module.exports = api;
