// silabo/actions/authActions.js
import { loginSuccess, logoutUser, setError } from '../slices/userAuthSlice';

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // Esto asegura que las cookies se incluyan en la solicitud
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al iniciar sesión');
    }

    const data = await response.json();
    dispatch(loginSuccess(data.token));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const performLogout = () => async (dispatch) => {
  try {
    // Llamar al endpoint de logout en el backend
    await fetch('http://localhost:8080/api/auth/logout', {
      method: 'POST',
      credentials: 'include', // Esto asegura que la cookie se incluya
    });
    
    dispatch(logoutUser());
  } catch (error) {
    console.error("Error al hacer logout:", error);
  }
};
