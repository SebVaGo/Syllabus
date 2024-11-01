import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { checkAuth } from '../actions/AuthActions';
import { loginSuccess } from '../slices/userAuthSlice';

export const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.authSilabo.isAuthenticated);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const authSource = urlParams.get('auth');

    if (authSource === 'github') {
      dispatch(loginSuccess());
      setLoading(false);
    } else {
      const token = document.cookie.split('; ').find(row => row.startsWith('jwtToken='));

      if (token) {
        dispatch(loginSuccess());
        setLoading(false);
      } else {
        dispatch(checkAuth()).finally(() => setLoading(false));
      }
    }
  }, [dispatch, location.search]);

  if (loading) return <div>Cargando...</div>;

  return isAuthenticated ? children : <Navigate to="/silabo/login" />;
};
