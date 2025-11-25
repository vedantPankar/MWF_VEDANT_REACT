import React, { useState } from "react";

function QuestionCard({ question, options, onAwnser }) {
  const [selected, setSelected] = useState("");
  const handleSubmit = () => {
    if (selected) {
      onAwnser(selected);
      setSelected("");
    }
  };
  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={setSelected(option)}
          className={`option ${selected === option} ? "selected" : ""`}
        >
          {option}
        </button>
      ))}
      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
}

export default QuestionCard;
