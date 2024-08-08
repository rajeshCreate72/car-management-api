const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database");
const Cars = require("./routes/carsRoute.js");
const Login = require("./routes/auth.js");
const Register = require("./routes/register.js");
const Admin = require("./routes/admin.js");

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["https://quadiro-assignment-two.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// app.use(cors());

connectDB();

app.use("/api/v1/cars", Cars);
app.use("/api/v1/login", Login);
app.use("/api/v1/register", Register);
app.use("/api/v1/admin_login", Admin);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running: ${port}`);
});
