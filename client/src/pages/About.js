import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="body">
      <div className="about-container">
        <div className="logo">arruri</div>
        <div className="header">soo aruuri</div>
        <div className="content"></div>
        <div className="about">About Services</div>
        <div className="locations">Locations.</div>
        <div className="set">set pick up</div>
        <div
          className="arrow"
          onClick={() => {
            window.location.href = "http://localhost:3000/about-services";
          }}
        ></div>
      </div>
    </div>
  );
};

export default About;
