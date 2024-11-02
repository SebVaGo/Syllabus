import axios from 'axios';
import { loginSuccess, logoutUser, setError } from '../slices/userAuthSlice';

// Acción para iniciar sesión
export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/api/auth/login',
      { username, password },
      { withCredentials: true } // Incluye las cookies en la solicitud
    );

    // Llama al reducer de loginSuccess para actualizar el estado como autenticado
    dispatch(loginSuccess()); // No se pasa el token, ya que está en la cookie
  } catch (error) {
    const errorMessage = error.response?.data?.error || 'Error al iniciar sesión';
    dispatch(setError(errorMessage));
  }
};

// Acción para verificar la autenticación
export const checkAuth = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8080/api/auth/check', {
      withCredentials: true, // Asegura que se incluya la cookie en la solicitud
    });

    if (response.status === 200) {
      dispatch(loginSuccess());
    } else {
      dispatch(logoutUser()); // Si no está autenticado, se cierra la sesión
    }
  } catch (error) {
    dispatch(logoutUser()); // Cierra la sesión si ocurre un error en la autenticación
  }
};

// Acción para cerrar sesión
export const performLogout = () => async (dispatch) => {
  try {
    await axios.post('http://localhost:8080/api/auth/logout', {}, {
      withCredentials: true, // Asegura que la cookie se incluya para identificar la sesión
    });
    
    // Actualiza el estado de logout en Redux
    dispatch(logoutUser());
  } catch (error) {
    console.error("Error al hacer logout:", error);
  }
};
