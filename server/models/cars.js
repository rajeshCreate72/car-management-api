const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema({
  carName: {
    type: String,
    require: true,
  },
  manufacturingYear: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
});

const cars = mongoose.model("Cars", carsSchema);

module.exports = cars;
