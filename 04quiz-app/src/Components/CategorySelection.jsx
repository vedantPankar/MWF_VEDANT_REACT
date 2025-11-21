import React from "react";

function CategorySelection({ setCategory, setDifficulty, startQuiz }) {
  const handleStart = () => {
    startQuiz();
  };
  return (
    <div>
      <h2>Select Quiz options</h2>
      <label>Category: </label>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">Sports</option>
        <option value="">History</option>
        <option value="">Science</option>
      </select>
      <label onChange={(e) => setCategory(e.target.value)}>Difficulty: </label>
      <select>
        <option value="">Easy</option>
        <option value="">Medium</option>
        <option value="">Hard</option>
      </select>
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
}

export default CategorySelection;
