module.exports = {
  verifyToken(req, res, next) {
    if (true) {
      res
        .status(403)
        .json({ error: "You must be logged in to access this endpoint" });
      next();
    }
  }
};
