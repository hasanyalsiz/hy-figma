// Sidebar.js

import React from "react";
import "./Sidebar.css";
import Logo from "./logo.png";

import {
  FaHome,
  FaChalkboard,
  FaChartBar,
  FaCalendar,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaFileAlt,
  FaLightbulb,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="Sidebar text-white h-screen w-64 fixed top-0 left-0 p-4">
      {/* Logo */}
      <img className="logo mb-4" src={Logo} alt="Logo" />

      {/* Dashboard */}
      <div className="nav-item flex items-center mb-4">
        <FaHome className="icon" />
        <span className="ml-2">Dashboard</span>
      </div>

      {/* Pages */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">PAGES</h2>
        <li className="nav-item flex  items-center mb-2">
          <FaChalkboard className="icon selected" />
          <span className="ml-3 selected">Classes</span>
        </li>
        <ul>
          <li className="nav-item flex items-center mb-2">
            <FaFileAlt className="icon:" />
            <span className="ml-3">Exam Module</span>
          </li>
          <li className="nav-item flex items-center mb-2">
            <FaChartBar className="icon" />
            <span className="ml-3">Statics</span>
          </li>
          <li className="nav-item flex items-center mb-2">
            <FaLightbulb className="icon" />
            <span className="ml-3">Recommendation</span>
          </li>
          <li className="nav-item flex items-center mb-2">
            <FaCalendar className="icon" />
            <span className="ml-3">Calendar</span>
          </li>
        </ul>
      </div>

      {/* Account Settings */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2 text-black opacity-70">
          ACCOUNT SETTINGS
        </h2>
        <ul>
          <li className="nav-item flex items-center mb-2">
            <FaEnvelope className="icon text-black opacity-50" />
            <span className="ml-3 text-black opacity-70">Message Board</span>
          </li>
          <li className="nav-item flex items-center mb-2">
            <FaCog className="icon text-black opacity-50" />
            <span className="ml-3 text-black opacity-70">Settings</span>
          </li>
          <li className="nav-item flex items-center mb-2">
            <FaSignOutAlt className="icon text-black opacity-50" />
            <span className="ml-3 text-black opacity-70">Logout</span>
          </li>
          <li className="nav-item flex items-center mb-2">
            <FaFileAlt className="icon text-black opacity-50" />
            <span className="ml-3 text-black opacity-70">
              Term & Conditions
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
