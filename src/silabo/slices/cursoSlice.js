import { createSlice } from '@reduxjs/toolkit';
import { actualizarCurso } from '../actions/CargaDetalleCursoThunk';

const initialState = {
  curso: null, // Información del curso actual
  loading: false,
  error: null,
};

const cursoSlice = createSlice({
  name: 'curso',
  initialState,
  reducers: {
    setCurso(state, action) {
      state.curso = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actualizarCurso.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(actualizarCurso.fulfilled, (state, action) => {
        state.loading = false;
        state.curso = { ...state.curso, ...action.payload }; // Actualiza solo los campos que cambiaron
      })
      .addCase(actualizarCurso.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurso } = cursoSlice.actions;
export default cursoSlice.reducer;
