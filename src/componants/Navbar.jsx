import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info w-100 fixed-top">
      <Link className="navbar-brand ms-4" to="/">Navbar</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ms-5">
          <li className="nav-item ms-5 ">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item ms-4">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item ms-4">
            <Link className="nav-link" to="/courses">Courses</Link>
          </li>
          <li className="nav-item ms-4">
            <Link className="nav-link" to="/jobs">Jobs</Link>
          </li>
          <li className="nav-item ms-4">
            <Link className="nav-link" to="/projects">Projects</Link>
          </li>
        </ul>

        <div className="d-flex justify-content-end ms-5">
        <form className="form-inline my-2 my-lg-0 d-flex justify-content-end">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0 ms-2" type="submit">
            Search
          </button>
        </form>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
