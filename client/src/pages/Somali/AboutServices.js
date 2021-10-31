import React from "react";
import Logo from "../../generalcomponents/Logo";

const AboutServices = () => {
  return (
    <div className="body">
      <div className="about-container">
        <Logo />
        <div className="services-container"></div>
        <div className="services-header">Ushaqeeynta</div>

        <div className="services-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <div className="services-star1"></div>
        <div className="services-star2"></div>
        <div
          className="services-arrow"
          onClick={() => {
            window.location.href = "http://localhost:3000/magalooyinka";
          }}
        ></div>
      </div>
    </div>
  );
};

export default AboutServices;
