import { useState } from 'react';

const useFileUpload = (backendUrl) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // Mensaje de éxito

  // Función para manejar el cambio de archivo
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Función para subir el archivo
  const uploadFile = async () => {
    if (!selectedFile) {
      setError('No se ha seleccionado ningún archivo');
      return;
    }

    setUploading(true);
    setError(null);
    setSuccessMessage(null);

    const formData = new FormData();
    formData.append('file', selectedFile); // Empaquetamos el archivo para enviar al backend

    try {
      const response = await fetch(`${backendUrl}/subir`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error al subir el archivo');
      }
      console.log('response', response);
      const data = await response.text();
      console.log('data', data);
      setSuccessMessage(data); // Guardamos el mensaje de éxito

      setSelectedFile(null); // Limpiamos el archivo seleccionado después de subirlo

    } catch (error) {
      console.error('Error en la subida del archivo:', error);
      setError('Hubo un problema al subir el archivo');
    } finally {
      setUploading(false);
    }
  };

  // Función para limpiar el archivo seleccionado
  const clearSelectedFile = () => {
    setSelectedFile(null); // Limpiar el archivo seleccionado
  };

  return {
    selectedFile,
    handleFileChange,
    uploadFile,
    clearSelectedFile, // Exponemos la función para limpiar el archivo seleccionado
    uploading,
    error,
    successMessage,
  };
};

export default useFileUpload;
