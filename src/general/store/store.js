// general/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../seguridad/slices';
import authSliceSilabo from '../../silabo/slices/userAuthSlice';
import cursoSlice from '../../cursos/slices/cursoSlice';
import silaboSlice from '../../silabo/slices/silaboSlice';
import cargarDetallesCursoSlice from '../../silabo/slices/cargarDetallesCursoSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    authSilabo: authSliceSilabo,
    curso: cursoSlice,
    silabo: silaboSlice,
    cargarDetallesCurso: cargarDetallesCursoSlice,
  },
});

console.log('Store configurado:', store.getState());  // Mostrar el estado inicial del store
store.subscribe(() => {
  console.log('Cambio en el estado del Store:', store.getState()); // Mostrar el estado en cada cambio
});