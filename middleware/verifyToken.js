module.exports = {
  verifyToken(req, res, next) {
    const bearerToken = req.headers["authorization"];
    if (bearerToken) {
      req.token = bearerToken;
      next();
    } else {
      res
        .status(403)
        .json({ error: "You must be authorized to access this endpoint" });
    }
  }
};
