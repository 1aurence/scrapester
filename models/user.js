const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model("User", UserSchema);
