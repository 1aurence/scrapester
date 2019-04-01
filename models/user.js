const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: {
    type: String,
    trim: true,
    unique: true,
    maxlength: 20
  },
  password: {
    type: String,
    trim: true
  },
  requests: [{ type: Schema.Types.ObjectId, ref: 'Request' }]

});

module.exports = mongoose.model("User", UserSchema);
