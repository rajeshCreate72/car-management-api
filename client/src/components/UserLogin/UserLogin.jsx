import React from "react";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/user/register");
  };
  return (
    <div className="flex flex-col justify-evenly items-center bg-blue-400 m-6">
      <h3 className="text-4xl">User login</h3>
      <form className="flex flex-col justify-evenly items-center m-6">
        <lable className="m-6">
          Email:
          <input className="m-6" type="text" />
        </lable>
        <lable className="m-6">
          Password:
          <input className="m-6" type="password" />
        </lable>
        <button
          className="bg-blue-200 text-black font-bold py-2 px-4 rounded"
          type="submit"
        >
          Log In
        </button>
      </form>

      <button
        className="bg-blue-200 text-black font-bold py-2 px-4 rounded mb-6"
        onClick={handleNavigate}
      >
        Not registered?
      </button>
    </div>
  );
}

export default UserLogin;
