import React from 'react';
import NavigateButton from '../utils/NavigateButton'; // Importamos el botón reutilizable
import '../styles/Sidebar.css';

export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="lateral">
        <li>
          {/* Usamos el botón reutilizable para crear el botón de "Crear Silabo" */}
          <NavigateButton route="/silabo/crear-silabo" buttonText="Crear Sílabo" />
        </li>
        <li>
          {/* Usamos el botón reutilizable para crear el botón de "Subir Silabo" */}
          <NavigateButton route="/silabo/subir-silabo" buttonText="Subir Sílabo" />
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
