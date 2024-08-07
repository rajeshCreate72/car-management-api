const express = require("express");
const Cars = require("../models/cars");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allCars = Cars.find();
    res.status(200).json(allCars);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  const { carName, manufacturingYear, price } = req.body;
  try {
    const carsData = new Cars({
      carName: carName,
      manufacturingYear: manufacturingYear,
      price: price,
    });
    await carsData.save();
  } catch (error) {
    console.log(error.message);
    res.send(500).json(error);
  }
});

module.exports = router;
