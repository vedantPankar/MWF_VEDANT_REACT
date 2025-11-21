import React, { useState } from "react";

function QuestionCard({ question, options, onAwnser }) {
  const [select, setSelected] = useState("");
  const handleSubmit = () => {
    if (selected) {
      onAwnser(selected);
      setSelected("");
    }
  };
  return (
    <div>
      <h3>{question}</h3>

      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
}

export default QuestionCard;
