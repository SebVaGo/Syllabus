import { createSlice } from '@reduxjs/toolkit';

export const silaboSlice = createSlice({
  name: "silabo",
  initialState: {
    estadoCreacion: 'idle',
    error: null,
    silaboActivo: null, // Similar al cursoidActivo
    silabos: [], // Lista de sílabos
    estaCargandoSilabos: false, // Bandera de carga
  },
  reducers: {
    // Acción para iniciar la carga de sílabos
    iniciaCargaSilabos: (state) => {
      state.estaCargandoSilabos = true;
    },
    // Acción para cargar la lista de sílabos
    cargaSilabos: (state, action) => {
      state.silabos = action.payload.silabos;
      state.estaCargandoSilabos = false;
    },
    // Acción para manejar la selección de un sílabo activo
    cargaSilaboIdActivo: (state, action) => {
      state.silaboActivo = action.payload.silaboActivo;
    },
    // Acción para manejar la creación exitosa de un sílabo
    exitoCreacionSilabo: (state) => {
      state.estadoCreacion = 'success';
      state.error = null;
    },
    // Acción para manejar la falla en la creación de un sílabo
    falloCreacionSilabo: (state, action) => {
      state.estadoCreacion = 'failed';
      state.error = action.payload;
    }
  }
});

// Exportación de las acciones
export const { iniciaCargaSilabos, cargaSilabos, cargaSilaboIdActivo, exitoCreacionSilabo, falloCreacionSilabo } = silaboSlice.actions;

// Exportación del reducer para incluirlo en el store
export default silaboSlice.reducer;
