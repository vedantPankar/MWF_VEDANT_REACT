import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import { NavLink, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <div>
      <Header title="My Todo Manager" />
      <nav>
        <NavLink to="/">Home</NavLink> | <NavLink to="/about">about</NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTask onAddTask={handleAddTask} />
              <ListTask tasks={tasks} />
            </>
          }
        />
        <Route path="/about" element={<p>Welcome</p>} />
      </Routes>
    </div>
  );
}

export default App;
