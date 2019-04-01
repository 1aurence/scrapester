const express = require("express");
const api = express.Router();
const AuthController = require("../controllers/AuthController");

api.post("/register", AuthController.register);
api.get("/token", AuthController.getToken);

module.exports = api;
