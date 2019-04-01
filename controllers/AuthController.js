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
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      let authUser = await bcrypt.compare(password, user.password);
      if (authUser) {
        jwt.sign(JSON.stringify(user), keys.JWT_SECRET, (err, token) => {
          res.json({ token });
        });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

