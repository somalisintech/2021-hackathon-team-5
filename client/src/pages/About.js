import React from "react";
import HeaderBar from "../generalcomponents/HeaderBar";
import "../styles/About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="body">
      <div className="about-container ab">
        <HeaderBar />
        <h1 className="ab-companyname"> arruri</h1>
        <div className="ab-textBox">
          <h1 className="ab-line1">soo aruuri</h1>
          <div className="ab-line"></div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="about-services"
          >
            <h2 className="ab-line2">About Services</h2>
          </Link>
          <Link style={{ textDecoration: "none" }} to="locations">
            <h2 className="ab-line3">Locations.</h2>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="set-pick-up"
          >
            <p className="ab-line4">set pick up</p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="about-services"
          >
            <p className="ab-arrow">↓</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
