import React from "react";

function ListTask({ tasks }) {
  return (
    <div>
      <div>
        {tasks.length === 0 ? (
          <p>No tasks yet!</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ListTask;
