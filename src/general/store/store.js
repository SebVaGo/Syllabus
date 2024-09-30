import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../seguridad/slices';
import { cursoSlice } from '../../cursos/slices';
import { silaboSlice } from '../../silabo/slices'; // Agregar esta línea
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    curso: cursoSlice.reducer,
    silaboSlice: silaboSlice.reducer, // Agregar esta línea

  },
});

console.log('Store configurado:', store.getState());  // Mostrar el estado inicial del store

