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
        <option value={"21"}>Sports</option>
        <option value={"23"}>History</option>
        <option value={"17"}>Science</option>
      </select>
      <label onChange={(e) => setCategory(e.target.value)}>Difficulty: </label>
      <select>
        <option value={"easy"}>Easy</option>
        <option value={"medium"}>Medium</option>
        <option value={"hard"}>Hard</option>
      </select>
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
}

export default CategorySelection;
