// src/components/TaskList.js
import React from "react";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.name}</span>
          <span>{task.description}</span>
          <span>{task.completed ? "Completada" : "Pendiente"}</span>
          <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
