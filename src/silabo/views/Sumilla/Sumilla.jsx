import React from 'react';
import { TextareaAutosize, Button, Stack, Typography } from '@mui/material';
import { Restore, Save } from '@mui/icons-material';
import SectionContainer from '../../utils/SectionContainer';

const Sumilla = ({ value, setValue }) => {
  const [tempValue, setTempValue] = React.useState(value);
  const [originalValue] = React.useState(value);

  const handleReset = () => setTempValue(originalValue);
  const handleSave = () => setValue(tempValue);

  return (
    <SectionContainer title="">
      <TextareaAutosize
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        placeholder="Escribe aquí la sumilla del curso..."
        minRows={5}
        maxRows={10}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '15px',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.5',
          borderRadius: '6px',
          border: '1px solid #ccc',
          backgroundColor: '#ffffff',
          resize: 'none',
          boxSizing: 'border-box',
          boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)', // Sombra interna para profundidad
        }}
      />
      
      <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ mt: 2 }}>
        <Button
          startIcon={<Restore />}
          onClick={handleReset}
          sx={{
            borderRadius: '8px',
            backgroundColor: '#c62828',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '13px',
            padding: '6px 12px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Sombra para resaltar el botón
            '&:hover': { backgroundColor: '#b71c1c' },
          }}
          variant="contained"
        >
          Restablecer
        </Button>
        <Button
          startIcon={<Save />}
          onClick={handleSave}
          sx={{
            borderRadius: '8px',
            backgroundColor: '#6a1b9a',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '13px',
            padding: '6px 12px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Sombra para resaltar el botón
            '&:hover': { backgroundColor: '#4a148c' },
          }}
          variant="contained"
        >
          Guardar
        </Button>
      </Stack>
    </SectionContainer>
  );
};

export default Sumilla;
