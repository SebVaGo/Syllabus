import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'userAuth/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Asegura que la cookie se incluya en la solicitud
        body: JSON.stringify({ username, password }),
      });
      
      if (!response.ok) {
        // Captura el error del servidor si la respuesta no es exitosa
        const errorData = await response.json();
        const errorMessage = errorData.error || 'Error en las credenciales';
        throw new Error(errorMessage);
      }

      // Si la respuesta es exitosa, autenticamos al usuario
      return true;
    } catch (error) {
      return rejectWithValue(error.message); // Rechazamos la promesa con el mensaje de error
    }
  }
);

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.error = null;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload; // Almacena el mensaje de error para mostrarlo en el modal
        state.isAuthenticated = false;
      });
  },
});

export const { loginSuccess, logoutUser, setError, clearError } = userAuthSlice.actions;
export default userAuthSlice.reducer;
