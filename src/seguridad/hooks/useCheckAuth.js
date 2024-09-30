import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../slices/authSlice';

export const useCheckAuth = () => {
  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'checking') {
      const uid = 'xyz12345'; // Datos simulados para probar
      const email = 'hcorderos@unmsm.edu.pe';
      const displayName = 'Hugo R. Cordero';
      const photoURL = '';

      // Simular el proceso de autenticación
      dispatch( login({ uid, email, displayName, photoURL }) );
    }
  }, [dispatch, status]);

  return status;
};
