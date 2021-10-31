import React from "react";
import Logo from "../../generalcomponents/Logo";

const Locations = () => {
  return (
    <div className="body">
      <div className="about-container">
        <Logo />
        <div className="locations-container"></div>
        <div className="locations-header">Magalooyinka</div>

        <div className="location1">Muqdisho</div>
        <div className="location2">Hargeeysa</div>
        <div className="location3">Garowe</div>
        <div className="locations-set1"> wakhtiga qaadista</div>
        <div
          className="locations-arrow"
          onClick={() => {
            window.location.href = "http://localhost:3000/sign-in";
          }}
        ></div>
      </div>
    </div>
  );
};

export default Locations;
