import React from 'react';
import { useDispatch } from 'react-redux';
import { performLogout } from '../actions/AuthActions';
import NavigateButton from '../utils/NavigateButton'; // Importamos el botón reutilizable
import { useNavigate } from 'react-router-dom';

import '../styles/Sidebar.css';

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    try{
      dispatch(performLogout());
      navigate('/silabo/login'); 
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <nav className="sidebar">
      <ul className="lateral">
        <li>
          <NavigateButton route="/silabo/crear-silabo" buttonText="Crear Sílabo" />
        </li>
        <li>
          <NavigateButton route="/silabo/subir-silabo" buttonText="Subir Sílabo" />
        </li>
        <li>
          <button onClick={handleLogout} className="logout-button">
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
