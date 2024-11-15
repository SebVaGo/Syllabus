import React from 'react';
import { TextareaAutosize, Button, Stack, Paper, Typography, IconButton } from '@mui/material';
import { Restore, Edit } from '@mui/icons-material';

const Sumilla = ({ value, setValue }) => {
  const [originalValue] = React.useState(value);

  const handleReset = () => setValue(originalValue);

  return (
    <Paper
      elevation={3}
      sx={{
        padding: '20px',
        borderRadius: '20px',
        backgroundColor: 'rgba(113, 56, 77, 0.1)', // Fondo más suave
        width: '90%',
        margin: 'auto',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Sombra suave para darle profundidad
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>

      </Stack>
      <TextareaAutosize
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Escribe aquí la sumilla del curso..."
        minRows={5}
        maxRows={10}
        style={{
          width: '100%',
          padding: '15px',
          fontSize: '16px',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.5',
          borderRadius: '10px',
          border: '1px solid #ddd',
          backgroundColor: '#ffffff',
          resize: 'none',
          boxSizing: 'border-box',
          boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)', // Sombra interna para profundidad
        }}
      />
      <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 2 }}>
        <Button
          startIcon={<Restore />}
          onClick={handleReset}
          sx={{
            borderRadius: '10px',
            backgroundColor: '#d32f2f',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px',
            padding: '8px 16px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Sombra para resaltar el botón
            '&:hover': { backgroundColor: '#b71c1c' },
          }}
          variant="contained"
        >
          Restablecer Sumilla
        </Button>
      </Stack>
    </Paper>
  );
};

export default Sumilla;
