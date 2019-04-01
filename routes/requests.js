const express = require("express");
const api = express.Router();
const RequestController = require("../controllers/RequestController");

api.get("/:id", RequestController.savedRequests);

module.exports = api;
