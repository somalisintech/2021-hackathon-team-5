import React, { useState } from "react";
import Counter from "../generalcomponents/Counter";
import Logo from "../generalcomponents/Logo";
import "../styles/Userpickup.css";
const UserPickup = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="body">
      <div className="user-container">
        <Logo />
        <h1 className="pickup-header">What are we picking up today?</h1>
        <div className="pickup-plastic">
          {/* <Counter className="counter-1" /> */}
          <div className="counter">
            <button onClick={increment} className="counter_plus">
              +
            </button>
            <p className="counter_number">{count}</p>
            <button onClick={decrement} className="counter_minus">
              -
            </button>
          </div>
        </div>
        <div className="pickup-waste">
          <div className="counter1">
            <button onClick={increment} className="counter_plus">
              +
            </button>
            <p className="counter_number">{count}</p>
            <button onClick={decrement} className="counter_minus">
              -
            </button>
          </div>
        </div>
        <div className="pickup-garbage">
          <div className="counter2">
            <button onClick={increment} className="counter_plus">
              +
            </button>
            <p className="counter_number">{count}</p>
            <button onClick={decrement} className="counter_minus">
              -
            </button>
          </div>
        </div>

        <div className="btn">Confirm pick up</div>
      </div>
    </div>
  );
};

export default UserPickup;
