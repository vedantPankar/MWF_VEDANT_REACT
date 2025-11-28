import React, { useEffect } from "react";

function UpdateTitle() {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default UpdateTitle;
