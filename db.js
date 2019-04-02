const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose.set("useCreateIndex", true);
mongoose.set("useNewUrlParser", true);

mongoose.connect(keys.DB_URI, err => {
  if (err) {
    return console.log(err.message);
  }
  console.log("Connected to MongoDB");
});
