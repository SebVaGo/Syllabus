import { Box, Typography, IconButton, Button } from '@mui/material';
import { CloudUploadOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SubirSilabo = () => {
  const navigate = useNavigate();

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
        <IconButton
          sx={{ fontSize: '4rem', color: '#AE675B' }}
        >
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
