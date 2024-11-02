import { useEffect } from 'react';

const useFetchBackendData = (backendUrl) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}/hola`, {
          method: 'GET',
          credentials: 'include', // Asegura que las cookies se incluyan en la solicitud
        });
        
        if (!response.ok) {
          throw new Error('Error al realizar la solicitud al backend');
        }
        
        const data = await response.text();
        console.log('Datos recibidos del backend:', data);

      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchData();
  }, [backendUrl]);
};

export default useFetchBackendData;
