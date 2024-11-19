import React, { useState } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Aprender React" },
    { id: 2, task: "Crear una ToDo App" },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, task }]);
  };

  return (
    <Router>
      <div className="App">
        <h1>Mi Todo List</h1>
        {/* Definir las rutas */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/todo"
            element={<TodoPage tasks={tasks} addTask={addTask} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
