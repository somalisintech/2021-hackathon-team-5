import React from "react";
import "../styles/Home.css";
import HeaderBar from "../generalcomponents/HeaderBar";
import trash from "../assets/images/trash.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="body">
      <div className="container">
        <HeaderBar />
        <img className="trash" src={trash} />
        <h1 className="company-name"> soo arruri</h1>
        <p className="request">Request a pickup</p>
        <div className="threelines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="buttons">
          <Link style={{ textDecoration: "none" }} to="signup">
            <button className="transparent-button">Sign in</button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="about">
            <button className="white-button">join</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
