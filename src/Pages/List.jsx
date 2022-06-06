import { React, useState } from "react";

function List() {
    const [counter, setCounter] = useState(0);
  return (
    <div>
      <button id="testbutton"  onClick={() => setCounter(counter + 1)}>
        Click me!
      </button>
      <div style={{ padding: 100,}}>
      <p name="test">count: {counter}</p>
      </div>
    </div>
  );
}

export default List;
