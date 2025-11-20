import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(10);
  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseState;
