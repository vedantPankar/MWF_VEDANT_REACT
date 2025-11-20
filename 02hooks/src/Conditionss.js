import React, { useState } from "react";

function ForEach() {
  let [di, setDi] = useState([
    { id: 1, name: "Vedant", city: "Betul" },
    { id: 2, name: "Sahil", city: "Sarni" },
  ]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CITY</th>
          </tr>
        </thead>

        <tbody>
          {di.map((data, key) =>
            data.city === "Sarni" ? (
              <tr>
                <td key={key}>{data.id}</td>
                <td key={key}>{data.name}</td>
                <td key={key}>{data.city}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ForEach;
