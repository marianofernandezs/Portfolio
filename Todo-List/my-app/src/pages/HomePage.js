import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h2>Bienvenido a la App</h2>
      <p>Haz clic en el enlace para ver tu lista de tareas.</p>
      <Link to="/todo">Ver lista de tareas</Link>
    </div>
  );
}

export default HomePage;
