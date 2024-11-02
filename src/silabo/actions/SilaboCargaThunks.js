// src/silabo/actions/SilaboThunks.js
import axios from 'axios';
import { setUploading, setUploadError, setUploadSuccess } from '../slices/silaboSlice';

export const uploadFileToS3 = (file) => async (dispatch) => {
  console.log("SilaboThunks: Inicio de carga del archivo...");

  dispatch(setUploading(true));
  dispatch(setUploadError(null));
  dispatch(setUploadSuccess(null));

  const formData = new FormData();
  formData.append('file', file);

  try {
    console.log("SilaboThunks: Enviando solicitud a http://localhost:8080/api/s3/upload");

    // Usando axios para realizar la solicitud
    const response = await axios.post("http://localhost:8080/api/s3/upload", formData, {
      withCredentials: true, // Incluye cookies para autenticación
      headers: {
        'Content-Type': 'multipart/form-data' // Axios detecta automáticamente, pero es útil especificarlo
      }
    });

    console.log("SilaboThunks: Archivo subido exitosamente. Respuesta del servidor:", response.data);
    dispatch(setUploadSuccess(response.data));
  } catch (error) {
    console.error('SilaboThunks: Error en la subida del archivo:', error);
    dispatch(setUploadError('Hubo un problema al subir el archivo'));
  } finally {
    dispatch(setUploading(false));
    console.log("SilaboThunks: Carga de archivo finalizada.");
  }
};

export const testCorsEndpoint = () => async (dispatch) => {
    try {
      console.log("SilaboThunks: Enviando solicitud a http://localhost:8080/api/test");
  
      const response = await axios.get("http://localhost:8080/api/test", {
        withCredentials: true
      });
  
      console.log("SilaboThunks: Respuesta del endpoint de prueba:", response.data);
    } catch (error) {
      console.error("SilaboThunks: Error en el endpoint de prueba:", error);
    }
  };