import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/user/login");
  };

  return (
    <div className="flex flex-col justify-evenly items-center bg-blue-400 m-6">
      <h3 className="text-4xl">User Register</h3>
      <form className="flex flex-col justify-evenly items-center m-6">
        <label className="m-6">
          Email:
          <input
            className="m-6"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="m-6">
          Password:
          <input
            className="m-6"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="bg-blue-200 text-black font-bold py-2 px-4 rounded">
          Register
        </button>
      </form>
      <button
        onClick={handleNavigate}
        className="bg-blue-200 text-black font-bold py-2 px-4 rounded mb-6"
      >
        Already Registered?
      </button>
    </div>
  );
}

export default UserRegister;
