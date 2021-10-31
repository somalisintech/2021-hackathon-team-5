import React from "react";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import HeaderBar from "../generalcomponents/HeaderBar";

function SignIn() {
  return (
    <div className="wrapper">
      <div className="signin-login-container">
        <HeaderBar />
        <h1 className="title">arurri</h1>
        <div className="signin-screen">
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
            <input className="inputfield" placeholder="Password" />
            <button className="md-button">Create account</button>
          </div>
          {/*  */}
          <div className="bottom-box login">
            <p>Already a member ?</p>
            <p className="bb-button">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
