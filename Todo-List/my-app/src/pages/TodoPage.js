import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import "../styles/TodoPage.css";

function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
  });

  // Cargar las tareas desde la API
  useEffect(() => {
    fetch("http://localhost:8000/api/tasks/")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const addTask = () => {
    const newTaskObj = {
      name: newTask.name,
      description: newTask.description,
      completed: false,
    };

    fetch("http://localhost:8000/api/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTaskObj),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error adding task");
        }
      })
      .then((data) => {
        setTasks((prevTasks) => [...prevTasks, data]);
        setNewTask({ name: "", description: "" });
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    fetch(`http://localhost:8000/api/tasks/${id}/`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setTasks(tasks.filter((task) => task.id !== id));
        }
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  // Marcar tarea como completada
  const markTaskCompleted = (id) => {
    fetch(`http://localhost:8000/api/tasks/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: true }),
    })
      .then((response) => {
        if (response.ok) {
          setTasks(tasks.filter((task) => task.id !== id)); // Elimina la tarea después de marcarla como completada
        }
      })
      .catch((error) => console.error("Error updating task:", error));
  };

  // Manejar los cambios en los inputs del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <div className="todo-page">
      <div className="task-input-container">
        <label htmlFor="taskName">Nombre de la tarea</label>
        <input
          id="taskName"
          type="text"
          name="name"
          value={newTask.name}
          onChange={handleInputChange}
          placeholder="Nombre de la tarea"
        />

        <label htmlFor="taskDescription">Descripción</label>
        <textarea
          id="taskDescription"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
          placeholder="Descripción de la tarea"
        ></textarea>

        <button onClick={addTask}>Agregar tarea</button>
      </div>

      {/* Sección para listar las tareas existentes */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <div className="task-content">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <label>Completada: {task.completed ? "Sí" : "No"}</label>
            </div>
            <div className="task-actions">
              {!task.completed && (
                <button
                  onClick={() => markTaskCompleted(task.id)}
                  className="complete-btn"
                >
                  Marcar como completada
                </button>
              )}
              <button
                onClick={() => deleteTask(task.id)}
                className="delete-btn"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoPage;
