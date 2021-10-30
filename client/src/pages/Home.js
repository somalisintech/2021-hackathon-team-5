import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/english">
        <button>English</button>
      </Link>
      <Link to="/somali">
        <button>Somali</button>
      </Link>
    </div>
  );
};

export default Home;
