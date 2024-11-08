// src/slices/cargarDetallesCursoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cargarDetallesCursoSlice = createSlice({
  name: 'cargarDetallesCurso',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    setUploadLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUploadSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    setUploadError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearData: (state) => {
      // Restablece el estado a los valores iniciales
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export const { setUploadLoading, setUploadSuccess, setUploadError, clearData } = cargarDetallesCursoSlice.actions;
export default cargarDetallesCursoSlice.reducer;
