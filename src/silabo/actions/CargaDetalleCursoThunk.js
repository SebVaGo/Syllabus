import axios from 'axios';
import { setUploadLoading, setUploadSuccess, setUploadError } from '../slices/cargarDetallesCursoSlice';
import { setFormData } from '../slices/formDataSlice'; // Acción para guardar los datos en el estado global

export const cargarDetallesCurso = (codigo, nombre) => async (dispatch) => {
  if (!codigo && !nombre) {
    throw new Error('Debe proporcionar un código o un nombre para la búsqueda.');
  }

  const formData = new FormData();
  formData.append('codigo', codigo || ''); // Asegura que siempre haya un valor, aunque sea vacío
  formData.append('nombre', nombre || '');

  dispatch(setUploadLoading(true));

  try {
    const response = await axios.post(
      'http://localhost:8080/api/cursos/detalles', // URL directamente en el código
      formData,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (!response.data || Object.keys(response.data).length === 0) {
      throw new Error('No se encontraron resultados');
    }

    // Guardar los datos en el estado global
    dispatch(setFormData(response.data)); 
    dispatch(setUploadSuccess(response.data)); // Actualiza el estado de éxito
    return response.data; // Devuelve los datos para que el componente los use si es necesario
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Error al cargar los detalles del curso.';
    dispatch(setUploadError(errorMessage)); // Actualiza el estado de error
    throw error; // Lanza el error para que el componente lo capture
  } finally {
    dispatch(setUploadLoading(false)); // Finaliza el estado de carga
  }
};
