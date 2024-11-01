// silabo/slices/userAuthSlice.js
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
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error('Error en las credenciales');
      }
      const data = await response.json();
      localStorage.setItem('token', data.token);
      return data.token;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
    token: null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.error = null;
    },
    logoutUser: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { loginSuccess, logoutUser, setError } = userAuthSlice.actions;
export default userAuthSlice.reducer;
