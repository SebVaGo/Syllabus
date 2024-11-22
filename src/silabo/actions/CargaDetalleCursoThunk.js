import axios from 'axios';
import {
  setUploadLoading,
  setUploadSuccess,
  setUploadError,
} from '../slices/cargarDetallesCursoSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Acción para actualizar curso
export const actualizarCurso = createAsyncThunk(
  'cursos/actualizarCurso',
  async (cursoData, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        'http://localhost:8080/api/cursos/actualizar',
        cursoData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      return response.data; // Devuelve los datos actualizados si es exitoso
    } catch (error) {
      // Manejo del error con un mensaje claro
      const errorMessage =
        error.response?.data?.message || 'Error en la actualización del curso.';
      return rejectWithValue(errorMessage);
    }
  }
);

// Acción para cargar los detalles del curso
export const cargarDetallesCurso = (codigo, nombre) => async (dispatch) => {
  const formData = new FormData();
  formData.append('codigo', codigo || '');
  formData.append('nombre', nombre || '');

  dispatch(setUploadLoading(true));

  try {
    const response = await axios.post(
      'http://localhost:8080/api/cursos/detalles',
      formData,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (!response.data || Object.keys(response.data).length === 0) {
      throw new Error('No se encontraron resultados.');
    }

    // Estructura los datos antes de enviarlos al slice
    const structuredData = {
      sumilla: response.data.sumilla,
      competencias: response.data.competencias,
      unidades: response.data.unidades,
      // Agrega otros campos si es necesario
    };

    dispatch(setUploadSuccess(structuredData));
    return structuredData;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || 'Error al cargar los detalles del curso.';
    dispatch(setUploadError(errorMessage));
    throw error;
  } finally {
    dispatch(setUploadLoading(false));
  }
};

