import { createSlice } from '@reduxjs/toolkit';

const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    data: null, // Datos actuales del curso
    initialData: null, // Copia inicial para restablecer valores
  },
  reducers: {
    // Manejo general de datos del curso
    setFormData: (state, action) => {
      state.data = action.payload;
      if (!state.initialData) {
        state.initialData = JSON.parse(JSON.stringify(action.payload)); // Guarda una copia profunda inicial
      }
    },
    resetFormData: (state) => {
      if (state.initialData) {
        state.data = JSON.parse(JSON.stringify(state.initialData)); // Restaura los valores iniciales
      }
    },
    clearFormData: (state) => {
      state.data = null; // Limpia los datos actuales
      state.initialData = null; // Limpia la copia inicial
    },

    // Manejo de competencias
    addCompetencia: (state, action) => {
      if (!state.data.competencias) state.data.competencias = [];
      state.data.competencias.push(action.payload); // Agrega una nueva competencia
    },
    deleteCompetencia: (state, action) => {
      if (state.data.competencias) {
        state.data.competencias.splice(action.payload, 1); // Elimina la competencia por índice
      }
    },
    updateCompetencia: (state, action) => {
      const { index, field, value } = action.payload;
      if (state.data.competencias && state.data.competencias[index]) {
        state.data.competencias[index][field] = value; // Actualiza el campo de la competencia
      }
    },
    resetCompetencias: (state) => {
      if (state.initialData?.competencias) {
        state.data.competencias = JSON.parse(JSON.stringify(state.initialData.competencias)); // Restaura competencias al estado inicial
      }
    },

    // Manejo de logros
    addLogro: (state, action) => {
      const { competenciaCodigo, logroCodigo, descripcion } = action.payload;
      if (!state.data.competencias) return;

      // Agrega el logro a la competencia correspondiente
      const competencia = state.data.competencias.find(
        (comp) => comp.codigo === competenciaCodigo
      );
      if (competencia) {
        if (!competencia.logros) {
          competencia.logros = [];
        }
        competencia.logros.push({
          codigo: logroCodigo,
          descripcion,
          nueva: true,
        });
      }
    },
    deleteLogro: (state, action) => {
      const { competenciaCodigo, logroIndex } = action.payload;
      const competencia = state.data.competencias.find(
        (comp) => comp.codigo === competenciaCodigo
      );
      if (competencia && competencia.logros) {
        competencia.logros.splice(logroIndex, 1); // Elimina el logro por índice
      }
    },
    updateLogro: (state, action) => {
      const { competenciaCodigo, logroIndex, field, value } = action.payload;
      const competencia = state.data.competencias.find(
        (comp) => comp.codigo === competenciaCodigo
      );
      if (competencia && competencia.logros && competencia.logros[logroIndex]) {
        competencia.logros[logroIndex][field] = value; // Actualiza el campo del logro
      }
    },
    resetLogros: (state) => {
      if (state.initialData?.competencias) {
        state.data.competencias = state.initialData.competencias.map((comp) => ({
          ...comp,
          logros: JSON.parse(JSON.stringify(comp.logros || [])), // Copia profunda de los logros
        }));
      }
    },

    // Manejo de unidades (Capacidades)
    addUnidad: (state, action) => {
      if (!state.data.unidades) state.data.unidades = [];
      state.data.unidades.push(action.payload); // Agrega una nueva unidad
    },
    deleteUnidad: (state, action) => {
      if (state.data.unidades) {
        state.data.unidades.splice(action.payload, 1); // Elimina una unidad por índice
      }
    },
    updateUnidad: (state, action) => {
      const { index, field, value } = action.payload;
      if (state.data.unidades && state.data.unidades[index]) {
        state.data.unidades[index][field] = value; // Actualiza el campo de la unidad
      }
    },
    resetUnidades: (state) => {
      if (state.initialData?.unidades) {
        state.data.unidades = JSON.parse(JSON.stringify(state.initialData.unidades)); // Restaura unidades al estado inicial
      }
    },
  },
});

export const {
  setFormData,
  resetFormData,
  clearFormData,
  addCompetencia,
  deleteCompetencia,
  updateCompetencia,
  resetCompetencias,
  addLogro,
  deleteLogro,
  updateLogro,
  resetLogros,
  addUnidad,
  deleteUnidad,
  updateUnidad,
  resetUnidades,
} = formDataSlice.actions;

export default formDataSlice.reducer;
