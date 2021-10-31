import React from "react";
import "../styles/Locations.css";
const Locations = () => {
  return (
    <div className="body">
      <div className="about-container">
        <div className="services-logo">arruri</div>
        <div className="locations-container"></div>
        <div className="locations-header">Locations</div>

        <div className="location1">Mogadishu</div>
        <div className="location2">Hargeisa</div>
        <div className="location3">Garowe</div>
        <div className="locations-set">set pick up</div>
        <div
          className="locations-arrow"
          onClick={() => {
            window.location.href = "http://localhost:3001/sign-in";
          }}
        ></div>
      </div>
    </div>
  );
};

export default Locations;
