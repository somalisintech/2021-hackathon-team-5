import React, { useState } from "react";
import "../styles/Counter.css";
const Counter = () => {
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
    <div className="counter">
      <button onClick={increment} className="counter_plus">
        +
      </button>
      <p className="counter_number">{count}</p>
      <button onClick={decrement} className="counter_minus">
        -
      </button>
    </div>
  );
};

export default Counter;
