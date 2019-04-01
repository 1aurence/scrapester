const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  async register(req, res) {
    try {
      const { username, password } = req.body;
      const hash = await bcrypt.hash(password, saltRounds);
      const user = new User({ username, password: hash });
      const saveUser = await user.save();
      res.send(saveUser);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  async getToken(req, res) {
    const user = {
      id: 1,
      username: "test"
    };
    jwt.sign(user, keys.JWT_SECRET, (err, token) => {
      res.json({ token });
    });
  }
};
