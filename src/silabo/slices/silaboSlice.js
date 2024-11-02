// src/silabo/slices/silaboSlice.js
import { createSlice } from '@reduxjs/toolkit';

const silaboSlice = createSlice({
  name: 'silabo',
  initialState: {
    uploading: false,
    uploadError: null,
    uploadSuccess: null,
  },
  reducers: {
    setUploading: (state, action) => {
      console.log("silaboSlice: Cambiando estado de uploading a", action.payload);
      state.uploading = action.payload;
    },
    setUploadError: (state, action) => {
      console.log("silaboSlice: Error al subir archivo -", action.payload);
      state.uploadError = action.payload;
    },
    setUploadSuccess: (state, action) => {
      console.log("silaboSlice: Archivo subido exitosamente -", action.payload);
      state.uploadSuccess = action.payload;
    },
    clearUploadMessages: (state) => {
      console.log("silaboSlice: Limpiando mensajes de éxito y error.");
      state.uploadError = null;
      state.uploadSuccess = null;
    },
  },
});

export const {
  setUploading,
  setUploadError,
  setUploadSuccess,
  clearUploadMessages,
} = silaboSlice.actions;

export default silaboSlice.reducer;
