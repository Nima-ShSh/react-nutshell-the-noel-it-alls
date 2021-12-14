import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import {ApplicationViews} from "./ApplicationViews";
import "./Nutshell.css";
import { Routes, Route, Navigate } from "react-router";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Logout} from './auth/Logout'
export const Nutshell = () => {
  const [loggedin, setLoggedin] = useState(false);

  const changeState = (bool) => setLoggedin(bool);

  if (localStorage.getItem("activeUser")) {
    return (
      <>
        <NavgitBar />
        <ApplicationViews />
        <Logout />
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/login" element={<Login setLoggedin={changeState} />} />
        <Route path="/register" element={<Register setLoggedin={changeState} />} />
      </Routes>
    );
  }
};
