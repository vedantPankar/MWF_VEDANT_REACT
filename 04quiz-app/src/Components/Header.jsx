import React from "react";

function Header({ score }) {
  return (
    <div>
      <h1>Quiz Game</h1>
      <p>score: {score}</p>
    </div>
  );
}

export default Header;
