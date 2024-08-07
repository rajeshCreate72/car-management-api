const express = require("express");
const admin = require("../models/admin");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkEmail = await admin.findOne({ email: email });

    if (checkEmail) {
      res.status(400).json("Email already Exists");
    } else {
      const hashPasswd = await bcrypt.hash(password, 10);
      const data = {
        email: email,
        password: hashPasswd,
      };
      await admin.create(data);
      res.status(200).json("Registration Successful");
    }
  } catch (error) {
    console.error("Error Registering: ", error.message);
    res.status(500).json(error);
  }
});

module.exports = router;