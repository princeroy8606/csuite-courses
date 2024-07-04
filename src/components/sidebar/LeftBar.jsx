// src/components/Sidebar.js
import React from "react";
import { Link} from "react-router-dom";
import "./sidebar.css";
import logo from "../Assets/logo.png";

const LeftBar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu">
        <Link to="./" className="menu-item">
          {/* <FontAwesomeIcon icon="fa-solid fa-fan" className="icon"/> */}
          <span>Dashboard</span>
        </Link>
        <Link to="./Profile" className="menu-item">
          {/* <FontAwesomeIcon icon="fa-user" className="icon" /> */}
          <span>My Profile</span>
        </Link>
        <Link to="./" className="menu-item">
          {/* <FontAwesomeIcon icon={"faHeart"} className="icon" /> */}
          <span>Enrolled</span>
        </Link>
        <Link to="./Courses" className="menu-item">
          {/* <FontAwesomeIcon icon={"faBook"} className="icon" /> */}
          <span>Courses</span>
        </Link>
        <Link to="./" className="menu-item">
          {/* <FontAwesomeIcon icon={"faStar"} className="icon" /> */}
          <span>Reviews</span>
        </Link>
        <Link to="./" className="menu-item">
          {/* <FontAwesomeIcon icon={"faHistory"} className="icon" /> */}
          <span>History</span>
        </Link>
        <Link to="./" className="menu-item">
          {/* <FontAwesomeIcon icon={"faBook"} className="icon" /> */}
          <span>All Courses</span>
        </Link>
      </div>
      <div className="menu bottom">
        <Link to="./" className="menu-item">
          {/* <FontAwesomeIcon icon={"faCog"} className="icon" /> */}
          <span>Settings</span>
        </Link>

        <Link to="./users" className="menu-item">
          {/* <FontAwesomeIcon icon={"faSignOutAlt"} className="icon" /> */}
          <span>Users</span>
        </Link>
        <Link to="./purchases" className="menu-item">
          {/* <FontAwesomeIcon icon={"faSignOutAlt"} className="icon" /> */}
          <span>Purchases</span>
        </Link>
        <Link to="/" className="menu-item">
          {/* <FontAwesomeIcon icon={"faSignOutAlt"} className="icon" /> */}
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default LeftBar;
