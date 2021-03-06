import React from "react";
import Logo from "../../generalcomponents/Logo";
import "../../styles/About.css";
const About = () => {
  return (
    <div>
      <div className="body">
        <div className="about-container">
          <Logo />
          <div className="header">soo aruuri</div>
          <div className="content"></div>
          <div className="about">ushaqeeynta</div>
          <div className="locations">Goobaha.</div>
          <div className="set">dejiso wakhtiga qaadista</div>
          <div
            className="arrow"
            onClick={() => {
              window.location.href = "http://localhost:3000/somali/ushaqeeynta";
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
