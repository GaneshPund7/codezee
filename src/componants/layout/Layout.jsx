import React from "react";
// import Navbar from "../components/Navbar";
import Navbar from "../Navbar"
import Sidebar from "../sidebar";
// import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 bg-light vh-100 p-3">
            <Sidebar />
          </div>
          <div className="col-md-10 p-4 mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
