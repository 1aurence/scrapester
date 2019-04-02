const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const mongoose = require("mongoose");

module.exports = {
  async register(req, res) {
    try {
      const { username, password } = req.body;
      const hash = await bcrypt.hash(password, saltRounds);
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username,
        password: hash
      });
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
      const authorizedUser = await bcrypt.compare(password, user.password);
      console.log(authorizedUser);
      if (authorizedUser) {
        jwt.sign(JSON.stringify(user), keys.JWT_SECRET, (err, token) => {
          if (err) {
            res.status(500);
          }
          res.json({ token });
        });
      } else {
        res.status(403).send({ error: "Authorization failed" });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
