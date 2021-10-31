import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="body">
      {/* <Link to="/english">
        <button>English</button>
      </Link>
      <Link to="/somali">
        <button>Somali</button>
      </Link> */}
      <div className="container">
        <div className="hero-image"></div>
        <h1 className="hero-header"> soo arruri</h1>
        <div className="hero-content">Request a pick up.</div>
        <div className="hero_line-1"></div>
        <div className="hero_line-2"></div>
        <div className="hero_line-3"></div>
        <div className="sign-in">Sign in</div>
        <button className="sign-up">
          <div className="join">Join</div>
        </button>
      </div>
    </div>
  );
};

export default Home;
