import React from "react";
import "../styles/AboutServices.css";
const AboutServices = () => {
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
        <div className="services-container"></div>
        <div className="services-header">About Services</div>

        <div className="services-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <div className="services-star1"></div>
        <div className="services-star2"></div>
        <div
          className="services-arrow"
          onClick={() => {
            window.location.href = "http://localhost:3000/locations";
          }}
        ></div>
      </div>
    </div>
  );
};

export default AboutServices;
