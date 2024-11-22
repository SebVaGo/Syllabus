import { createSlice } from '@reduxjs/toolkit';

const cargarDetallesCursoSlice = createSlice({
  name: 'cargarDetallesCurso',
  initialState: {
    loading: false,
    error: null,
    curso: {
      sumilla: '',
      competencias: [],
      unidades: [],
      // Puedes agregar más campos si es necesario
    },
  },
  reducers: {
    setUploadLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUploadSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.curso = {
        sumilla: action.payload.sumilla,
        competencias: action.payload.competencias,
        unidades: action.payload.unidades,
        // Incluye otros campos según los datos que recibes
      };
    },
    setUploadError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearData: (state) => {
      state.loading = false;
      state.error = null;
      state.curso = {
        sumilla: '',
        competencias: [],
        unidades: [],
      };
    },
    updateCursoData: (state, action) => {
      // Actualización parcial de los datos del curso
      state.curso = {
        ...state.curso,
        ...action.payload,
      };
    },
  },
});

export const {
  setUploadLoading,
  setUploadSuccess,
  setUploadError,
  clearData,
  updateCursoData,
} = cargarDetallesCursoSlice.actions;

export default cargarDetallesCursoSlice.reducer;
