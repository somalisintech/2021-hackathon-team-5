import React from "react";
import HeaderBar from "../generalcomponents/HeaderBar";
import { Link } from "react-router-dom";
import purplestar from "../assets/rewards-puprle-star.png";
//
function UserRewards() {
  return (
    <div className="wrapper userrewards">
      <div className="container">
        <HeaderBar />
        <Link style={{ textDecoration: "none", color: "black" }} to="user-home">
          <p className="backwardarrow"> ← </p>
        </Link>
        <h1 className="title">arurri</h1>
        <div className="welcome-screen">
          {/*  */}
          <h1 className="username">Ayan's</h1>
          <p className="screentitle">Rewards !</p>
          <div className="starsearnedbox">
            <div className="starsearnednumber">
              <p>
                <strong>75</strong>
              </p>
              <img className="starimage" src={purplestar} />
            </div>
            <p>stars earned</p>
          </div>
          <div className="starmeter">
            <div className="filled"></div>
            <img className="starimage" src={purplestar} />
            <div className="notfilled"></div>
          </div>
          <p className="rewardsoptions">Rewards options</p>
          <div className="redeem-donate">
            <div className="redeem">
              <p className="redeem-arrow">↓</p>
              <h2 className="redeem-text"> Redeem points</h2>
            </div>
            <h2 className="donate"> Donate my points</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRewards;
