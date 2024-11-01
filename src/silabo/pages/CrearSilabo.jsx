// silabo/pages/CrearSilabo.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Formulario from '../views/Formulario';
import Sidebar from '../views/Sidebar';
import '../styles/Root.css';

export const CrearSilabo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/auth/check', {
          method: 'GET',
          credentials: 'include', // Incluye las cookies en la solicitud
        });

        if (!response.ok) {
          // Si la autenticación falla, redirige al usuario al login
          navigate('/silabo/login');
        }
      } catch (error) {
        console.error('Error verificando autenticación:', error);
        navigate('/silabo/login');
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <div>
      <div className="division">
        <Sidebar />
        <Formulario />
      </div>
    </div>
  );
};

export default CrearSilabo;
