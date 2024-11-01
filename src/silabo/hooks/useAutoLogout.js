// silabo/actions/authActions.js
import { loginSuccess, logoutUser, setError } from '../slices/userAuthSlice';

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al iniciar sesión');
    }

    const data = await response.json();
    localStorage.setItem('token', data.token); // Guarda el token en localStorage
    dispatch(loginSuccess(data.token));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const performLogout = () => (dispatch) => {
  localStorage.removeItem('token'); // Elimina el token del localStorage
  dispatch(logoutUser());
};
