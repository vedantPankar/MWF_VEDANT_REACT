import React from "react";

function ResultPage({ score, total, restart }) {
  return (
    <div className="result-page">
      <h2>Quiz Completed</h2>
      <p>
        Score: {score} / {total}
      </p>
      <button onClick={restart}>Play Again</button>
    </div>
  );
}

export default ResultPage;
