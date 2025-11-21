import React, { useState } from "react";

function AddTask({ onAddTask }) {
  const [task, addTask] = useState("");
  const handleAddTask = () => {
    if (task.trim() !== "") {
      onAddTask(task);
      addTask("");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => addTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add task</button>
    </div>
  );
}

export default AddTask;
