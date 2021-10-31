import React from "react";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import HeaderBar from "../generalcomponents/HeaderBar";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="wrapper">
      <div className="container">
        <HeaderBar />
        <Link style={{ textDecoration: "none", color: "white" }} to="signup">
          <p className="backwardarrow"> ← </p>
        </Link>
        <h1 className="title">arurri</h1>
        <div className="login-screen">
          <div className="top-box">
            <div className="top-icons">
              <a className="login-google">
                <img className="google-icon" src={google} />
              </a>
              <a className="login-apple">
                <img className="apple-icon" src={apple} />
              </a>
            </div>
            <p className="register">or use your email for registration</p>
          </div>
          {/*  */}
          <div className="middle-box form">
            <input className="inputfield" placeholder="Full name" />
            <input className="inputfield" placeholder="Email" />
            <Link style={{ textDecoration: "none" }} to="user-home">
              <button className="md-button">Login</button>
            </Link>
          </div>
          {/*  */}
          <div className="bottom-box">
            <p>Forgot your password ?</p>
            <Link style={{ textDecoration: "none" }} to="resetpassword">
              <p className="bb-button">Reset password</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
