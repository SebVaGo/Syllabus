import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavigateButton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/silabo/crear-silabo');
  };

  return (
    <Button
      variant="contained"
      sx={{
        mt: 4,
        backgroundColor: '#AE675B',
        color: '#fff',
        padding: '10px 20px',
        fontSize: '1rem',
        textTransform: 'none',
        borderRadius: 2,
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: '#8C5448',
        },
      }}
      onClick={handleNavigate}
    >
      Ir a Crear Sílabo
    </Button>
  );
};

export default NavigateButton;
