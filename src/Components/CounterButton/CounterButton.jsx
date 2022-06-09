import React from "react";
import { useState } from "react";


export const CounterButton = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <button id="testbutton" onClick={increment}>
        {counter}
      </button>
    </div>
  );
};

export default CounterButton;
