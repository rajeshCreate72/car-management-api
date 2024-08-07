import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate("/user/login");
  };

  const handleUserRegister = () => {
    navigate("/user/register");
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const resposne = await axios.post(
        "https://quadiro-assignment-651o.vercel.app/api/v1/admin_login",
        {
          email,
          password,
        }
      );
      navigate("/admin/homepage");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-evenly items-center bg-blue-400 m-6">
      <h1 className="text-4xl">Admin Login</h1>
      <form
        onSubmit={handleAdminLogin}
        className="flex flex-col justify-evenly items-center m-6"
      >
        <label className="m-6">
          Email:
          <input
            className="ml-6"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="m-6">
          Password:
          <input
            className="ml-6"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-200 text-black font-bold py-2 px-4 rounded"
          type="submit"
        >
          Login
        </button>
      </form>
      <div
        className="flex flex-row justify-evenly items-center"
        onClick={handleUserLogin}
      >
        <button className="bg-blue-200 text-black font-bold py-2 px-4 rounded m-6">
          User login
        </button>
        <button
          className="bg-blue-200 text-black font-bold py-2 px-4 rounded m-6"
          onClick={handleUserRegister}
        >
          User Register
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
