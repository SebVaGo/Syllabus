// silabo/actions/authActions.js
import { loginSuccess, logoutUser, setError } from '../slices/userAuthSlice';

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // Incluye las cookies en la solicitud
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al iniciar sesión');
    }

    // Llama al reducer de loginSuccess para actualizar el estado como autenticado
    dispatch(loginSuccess()); // No se pasa token, ya que está en la cookie
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const checkAuth = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8080/api/auth/check', {
      method: 'GET',
      credentials: 'include', // Asegura que se incluya la cookie en la solicitud
    });

    if (response.ok) {
      dispatch(loginSuccess());
    } else {
      dispatch(logoutUser()); // Si no está autenticado, se cierra la sesión
    }
  } catch (error) {
    dispatch(logoutUser()); // Cierra la sesión si ocurre un error en la autenticación
  }
};

export const performLogout = () => async (dispatch) => {
  try {
    // Llama al endpoint de logout en el backend
    await fetch('http://localhost:8080/api/auth/logout', {
      method: 'POST',
      credentials: 'include', // Asegura que la cookie se incluya para identificar la sesión
    });
    
    // Actualiza el estado de logout en Redux
    dispatch(logoutUser());
  } catch (error) {
    console.error("Error al hacer logout:", error);
  }
};
