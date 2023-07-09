import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "./Root.css";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="main">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
