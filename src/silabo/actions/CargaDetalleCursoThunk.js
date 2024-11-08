// src/actions/cargarDetallesCursoThunk.js
import axios from 'axios';
import { setUploadLoading, setUploadSuccess, setUploadError } from '../slices/cargarDetallesCursoSlice';

export const cargarDetallesCurso = (codigo, nombre) => async (dispatch) => {
  const formData = new FormData();
  formData.append('codigo', codigo);
  formData.append('nombre', nombre);

  dispatch(setUploadLoading(true));

  try {
    const response = await axios.post(
      'http://localhost:8080/api/cursos/detalles',
      formData,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    dispatch(setUploadSuccess(response.data));
    return response.data; // Devuelve los datos para ser usados en el componente
  } catch (error) {
    const errorMessage = error.response?.data || 'Error al cargar los detalles del curso.';
    dispatch(setUploadError(errorMessage));
    throw error; // Lanza el error para ser capturado en el componente
  } finally {
    dispatch(setUploadLoading(false));
  }
};
