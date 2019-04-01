module.exports = {
  verifyToken(req, res, next) {
    // Check if JWT token exists in header
    const bearerToken = req.headers["authorization"];
    if (bearerToken) {
      // Add token to req object if token exists
      req.token = bearerToken;
      next();
    } else {
      res
        .status(403)
        .json({ error: "You must be authorized to access this endpoint" });
    }
  }
};
