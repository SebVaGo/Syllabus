import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { loginSuccess, logoutUser } from '../slices/userAuthSlice';

export const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const authState = useSelector((state) => state.authSilabo.isAuthenticated);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const authSource = urlParams.get('auth');

    if (authSource === 'github') {
      // Si la autenticación proviene de GitHub, permite el acceso sin verificar
      dispatch(loginSuccess());
      setLoading(false);
    } else {
      // Verifica si el token está en la cookie
      const token = document.cookie.split('; ').find(row => row.startsWith('jwtToken='));

      if (token) {
        dispatch(loginSuccess());
        setLoading(false);
      } else {
        // Si no hay token en la cookie, verifica con el servidor
        const checkAuth = async () => {
          try {
            const response = await fetch('http://localhost:8080/api/auth/check', {
              method: 'GET',
              credentials: 'include',
            });

            if (response.ok) {
              dispatch(loginSuccess());
            } else {
              dispatch(logoutUser());
            }
          } catch (error) {
            dispatch(logoutUser());
          } finally {
            setLoading(false);
          }
        };

        if (authState === null) {
          checkAuth();
        } else {
          setLoading(false);
        }
      }
    }
  }, [authState, dispatch, location.search]);

  if (loading) return <div>Cargando...</div>;

  return authState ? children : <Navigate to="/silabo/login" />;
};
