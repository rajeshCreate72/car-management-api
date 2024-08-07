const mongoose = require("mongoose");

const users = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const Users = mongoose.model("Users", users);

module.exports = Users;
