import React from "react";
import "../styles/Locations.css";
import "../styles/AboutServices.css";
const Locations = () => {
  return (
    <div className="body">
      <div className="about-container">
        <div
          className="services-logo"
          onClick={() => {
            window.location.href = "http://localhost:3000/";
          }}
        >
          aruuri
        </div>
        <div className="locations-container"></div>
        <div className="locations-header">Locations</div>
        <div className="location1">Mogadishu</div>
        <div className="location2">Hargeisa</div>
        <div className="location3">Garowe</div>
        <div className="locations-set">set pick up</div>
        <div
          className="locations-arrow"
          onClick={() => {
            window.location.href = "http://localhost:3000/signup";
          }}
        ></div>
      </div>
    </div>
  );
};

export default Locations;
