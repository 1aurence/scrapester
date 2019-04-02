const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const queryString = require("query-string");

module.exports = {
  async verifyToken(req, res, next) {
    try {
      // Check if JWT token exists in header
      const bearerToken = queryString.parse(req.url).apiKey
      if (bearerToken) {
        // Add token to req object if token exists
        req.token = bearerToken;
        let verifyToken = await jwt.verify(req.token, keys.JWT_SECRET);
        if (verifyToken) {
          next();
        }
      }
    } catch (error) {
      res.status(403).send(error.message);
    }
  }
};
