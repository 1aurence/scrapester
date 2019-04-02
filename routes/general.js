const express = require("express");
const api = express.Router();
const RequestController = require("../controllers/RequestController");
const { verifyToken } = require("../middleware/verifyToken");

api.get("/text/?*", verifyToken, RequestController.getText);
api.get("/screenshot/?*", verifyToken, RequestController.screenshot);
api.get("/saved-requests/:id", RequestController.savedRequests);

module.exports = api;
