import React from "react";
import HeaderBar from "../generalcomponents/HeaderBar";
import { Link } from "react-router-dom";
import somaligirl from "../assets/somaligirl.jpeg";
//
function UserHome() {
  return (
    <div className="wrapper userhome">
      <div className="container">
        <HeaderBar />
        <Link style={{ textDecoration: "none", color: "black" }} to="signup">
          <p className="backwardarrow"> ← </p>
        </Link>
        <h1 className="title">arurri</h1>
        <div className="welcome-screen">
          {/*  */}
          <h2 className="greetings">Good afternoon,</h2>
          <h1 className="username">Ayan.</h1>
          <img className="userimage" src={somaligirl} />
          <p className="userlocation">
            <strong>Location:</strong> Mogadishu
          </p>
          {/*  */}
          <div className="userdata">
            <div className="databox">
              <p>
                <strong>2021</strong>
              </p>
              <p>user since</p>
            </div>
            <div className="databox">
              <p>
                <strong>3</strong>
              </p>
              <p>tons of waste recycled</p>
            </div>
          </div>
          <div className="bottom-box">
            <Link to="/user-pickup">
              <button className="md-button">Schedule a pick up</button>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="user-rewards"
            >
              <p> reward center → </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
