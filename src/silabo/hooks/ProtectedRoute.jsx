import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const authState = useSelector((state) => state.authSilabo.isAuthenticated);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/auth/check', {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    if (authState === null) { // Solo verifica si authState es indefinido
      checkAuth();
    } else {
      setIsAuthenticated(authState);
      setLoading(false);
    }
  }, [authState]);

  if (loading) return <div>Cargando...</div>;

  return isAuthenticated ? children : <Navigate to="/silabo/login" />;
};
