import React, { useState } from "react";
import "../../styles/index.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const addTask = (e) => {
    if (e.key === "Enter" && newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="display-1" style={{ color: "#ff5733" }}>todos</h1>
      <div className="shadow p-4 bg-white" style={{ maxWidth: "600px", margin: "auto", borderRadius: "0" }}>
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={addTask}
        />
        <ul className="list-group mt-3">
          {tasks.length === 0 ? (
            <li className="list-group-item text-muted">No hay tareas, añadir tareas</li>
          ) : (
            tasks.map((task, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {task}
                {hoveredIndex === index && (
                  <span
                    className="text-danger fw-bold ms-2"
                    onClick={() => removeTask(index)}
                    style={{ cursor: "pointer" }}
                  >
                    ×
                  </span>
                )}
              </li>
            ))
          )}
        </ul>
        <small className="text-muted text-start d-block mt-2">
          {tasks.length} item{tasks.length !== 1 ? "s" : ""} left
        </small>
      </div>
    </div>
  );
};

export default Home;
