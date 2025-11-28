import React, { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <h2>Fetched Data</h2>
      {data ? <p>{data.title}</p> : <p>loading...</p>}
    </div>
  );
}

export default FetchData;
