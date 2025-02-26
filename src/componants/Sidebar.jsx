import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-group-item">
          <Link to="/about">About</Link>
        </li>
        <li className="list-group-item">
          <Link to="/courses">Courses</Link>
        </li>
        <li className="list-group-item">
          <Link to="/jobs">Jobs</Link>
        </li>
        <li className="list-group-item">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
