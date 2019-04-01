const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  request: {
    type: Object,
    url: {
      type: String
    },
    query: {
      type: String
    },
    result: {
      type: String
    }
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Request", RequestSchema);
