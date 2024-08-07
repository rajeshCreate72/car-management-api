import React from "react";
import AdminLogin from "../AdminLogin/AdminLogin";
import AdminPage from "../AdminPage/AdminPage";
import HomePage from "../HomePage/HomePage";
import UserLogin from "../UserLogin/UserLogin";
import UserRegister from "../UserRegister/UserRegister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MainComponent() {
  return (
    <Router>
      <div>
        <h1 className="text-6xl">Assignment for Quadiro Technologies</h1>
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
