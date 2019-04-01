const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose.connect(keys.DB_URI, { useNewUrlParser: true }, err => {
  if (err) {
    return console.log(err);
  }
  console.log('Connected to MongoDB')
});
