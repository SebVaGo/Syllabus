import { useState } from 'react';

const useFileUpload = (backendUrl) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // Mensaje de éxito

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

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

      const data = await response.text();
      setSuccessMessage(data); // Guardamos el mensaje de éxito

      setSelectedFile(null); // Limpiamos el archivo seleccionado

    } catch (error) {
      console.error('Error en la subida del archivo:', error);
      setError('Hubo un problema al subir el archivo');
    } finally {
      setUploading(false);
    }
  };

  return { selectedFile, handleFileChange, uploadFile, uploading, error, successMessage };
};

export default useFileUpload;
