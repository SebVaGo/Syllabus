import { Box, Typography, IconButton, Button } from '@mui/material';
import { CloudUploadOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SubirSilabo = () => {
  const navigate = useNavigate();

  // Definir la URL del backend (API)
  const backendUrl = 'http://localhost:8080/api/instituciones'; // Cambia esto según tu API
  
  // useEffect para hacer la solicitud cuando se cargue el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}/hola`, {
          method: 'GET', // Método que desees utilizar, puede ser 'POST' si es necesario
        });
        
        if (!response.ok) {
          throw new Error('Error al realizar la solicitud al backend');
        }
        
        const data = await response.text(); // Procesa los datos de respuesta
        console.log('Datos recibidos del backend:', data); // Muestra los datos en consola

      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    // Llamar a la función para realizar la solicitud
    fetchData();
  }, []); // El array vacío significa que esto solo se ejecutará una vez al cargar el componente.

  const handleNavigateToCrearSilabo = () => {
    navigate('/silabo/crear-silabo'); // Navegar hacia Crear Sílabo
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50%',
          height: '300px',
          backgroundColor: 'rgba(174, 103, 91, 0.25)',
          borderRadius: 2,
        }}
      >
        <IconButton sx={{ fontSize: '4rem', color: '#AE675B' }}>
          <CloudUploadOutlined fontSize="inherit" />
        </IconButton>
        <Typography variant="h6" sx={{ color: '#AE675B', mt: 2 }}>
          Arrastre el Archivo en formato Word
        </Typography>
      </Box>

      {/* Botón para navegar hacia Crear Sílabo */}
      <Button
        variant="contained"
        sx={{ mt: 4, backgroundColor: '#AE675B' }}
        onClick={handleNavigateToCrearSilabo}
      >
        Ir a Crear Sílabo
      </Button>
    </Box>
  );
};

export default SubirSilabo;
