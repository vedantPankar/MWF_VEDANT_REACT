import React, { useState } from "react";

function Event() {
  const [inp, setInp] = useState("Graas");
  const [color, setColor] = useState("red");

  const oc = (e) => {
    setInp(e.target.value);
  };
  return (
    <div>
      <input type="text" value={inp} onChange={oc} />
      <h2>Value is {inp}</h2>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <h3 style={{ color: color }}>value is {inp}</h3>
    </div>
  );
}

export default Event;
