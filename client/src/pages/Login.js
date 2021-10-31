import React from "react";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import HeaderBar from "../generalcomponents/HeaderBar";

function Login() {
  return (
    <div className="wrapper">
      <div className="signin-login-container">
        <HeaderBar />
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
            <button className="md-button">Login</button>
          </div>
          {/*  */}
          <div className="bottom-box">
            <p>Forgot your password ?</p>
            <p className="bb-button">Reset password</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
