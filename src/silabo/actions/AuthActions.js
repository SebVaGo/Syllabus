import axios from 'axios';
import { loginSuccess, logoutUser, setError, clearError } from '../slices/userAuthSlice';

// Acción para iniciar sesión
export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/api/auth/login',
      { username, password },
      { withCredentials: true }
    );

    dispatch(loginSuccess()); // Actualiza el estado como autenticado
    dispatch(clearError()); // Limpia cualquier error anterior
  } catch (error) {
    const errorMessage = error.response?.data?.error || 'Error al iniciar sesión. Verifica tus credenciales.';
    dispatch(setError(errorMessage));
  }
};

// Acción para verificar la autenticación
export const checkAuth = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8080/api/auth/check', {
      withCredentials: true,
    });

    if (response.status === 200) {
      dispatch(loginSuccess());
      dispatch(clearError()); // Limpia cualquier error anterior
    } else {
      dispatch(logoutUser());
      dispatch(setError('No estás autenticado. Por favor, inicia sesión.'));
    }
  } catch (error) {
    dispatch(logoutUser());
    dispatch(setError('No estás autenticado o tu sesión ha expirado. Por favor, inicia sesión.'));
  }
};

// Acción para cerrar sesión
export const performLogout = () => async (dispatch) => {
  try {
    await axios.post('http://localhost:8080/api/auth/logout', {}, {
      withCredentials: true,
    });

    dispatch(logoutUser());
    dispatch(clearError()); // Limpia cualquier error anterior
    dispatch(clearData()); // Limpia los datos del curso al cerrar sesión

  } catch (error) {
    const errorMessage = error.response?.data?.error || 'Error al cerrar sesión. Inténtalo de nuevo.';
    dispatch(setError(errorMessage));
  }
};
