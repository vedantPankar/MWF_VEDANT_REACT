import React, { useEffect } from "react";

function UseEffect() {
  useEffect(() => {
    console.log("this runs when the component mounts");
  }, []);
  return <div>UseEffect</div>;
}

export default UseEffect;
