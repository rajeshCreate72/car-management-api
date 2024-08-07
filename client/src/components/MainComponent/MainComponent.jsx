import React from "react";
import AdminLogin from "../AdminLogin/AdminLogin";
import AdminPage from "../AdminPage/AdminPage";
import HomePage from "../HomePage/HomePage";
import UserLogin from "../UserLogin/UserLogin";
import UserRegister from "../UserRegister/UserRegister";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function NavigationButtons() {
  const navigate = useNavigate();

  function handleAdmin() {
    navigate("/admin/login");
  }
  function handleUser() {
    navigate("/user/login");
  }

  return (
    <div>
      <button
        className="bg-blue-200 text-black font-bold py-2 px-4 rounded m-6"
        onClick={handleAdmin}
      >
        Admin Login
      </button>
      <button
        className="bg-blue-200 text-black font-bold py-2 px-4 rounded m-6"
        onClick={handleUser}
      >
        User Login
      </button>
    </div>
  );
}

function MainComponent() {
  return (
    <Router>
      <div>
        <h1 className="text-6xl">Assignment for Quadiro Technologies</h1>
        <NavigationButtons />
        <Routes>
          <Route path="/user/:userId" element={<HomePage />}></Route>
          <Route path="/user/login" element={<UserLogin />}></Route>
          <Route path="/user/register" element={<UserRegister />}></Route>

          <Route path="/admin/login" element={<AdminLogin />}></Route>
          <Route path="/admin/homepage" element={<AdminPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default MainComponent;
