import React from "react";
import { BsBarChart } from "react-icons/bs";
import { FiWifi } from "react-icons/fi";
import { FaBatteryFull } from "react-icons/fa";

function HeaderBar() {
  return (
    <div>
      <div className="header-bar">
        <p>9:41</p>
        <div className="header-bar-icons">
          <div className="header-icon">
            <BsBarChart />
          </div>
          <div className="header-icon">
            <FiWifi />
          </div>
          <div className="header-icon">
            <FaBatteryFull />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
