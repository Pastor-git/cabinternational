import React from "react";
import { useState } from "react";

import './CounterButton.css';

export const CounterButton = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <button id="testbutton" class="counterbutton"onClick={increment}>
        {counter}
      </button>
    </div>
  );
};

export default CounterButton;
