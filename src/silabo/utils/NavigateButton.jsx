import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavigateButton = ({ route, buttonText, isActive }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(route); // Navegación dinámica basada en la prop `route`
  };

  return (
    <Button
      variant="text" // Cambiamos a "text" para replicar el botón transparente
      sx={{
        width: '100%',
        color: '#AE675B',
        backgroundColor: isActive ? 'rgba(174, 103, 91, 0.25)' : 'transparent',
        borderRadius: 2,
        padding: '0.5rem 1rem',
        marginBottom: '1rem',
        textTransform: 'none',
        fontWeight: isActive ? 'bold' : 'normal',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgba(174, 103, 91, 0.25)', // Color al pasar el mouse
        },
      }}
      onClick={handleNavigate}
    >
      {buttonText}
    </Button>
  );
};

export default NavigateButton;
