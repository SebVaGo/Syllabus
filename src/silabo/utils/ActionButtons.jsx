// src/components/ActionButtons.js
import React from 'react';
import { Stack, Button } from '@mui/material';
import { Add, Restore, Save } from '@mui/icons-material';

const ActionButtons = ({ onAdd, onReset, onSave }) => {
  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ m: 2 }}>
      <Button
        startIcon={<Add />}
        onClick={onAdd}
        sx={{
          borderRadius: '20px',
          backgroundColor: '#8e24aa',
          color: 'white',
          fontWeight: 'bold',
          '&:hover': { backgroundColor: '#6a1b9a' },
        }}
        variant="contained"
      >
        Agregar
      </Button>
      
      <Button
        startIcon={<Restore />}
        onClick={onReset}
        sx={{
          borderRadius: '20px',
          backgroundColor: '#d32f2f',
          color: 'white',
          fontWeight: 'bold',
          '&:hover': { backgroundColor: '#b71c1c' },
        }}
        variant="contained"
      >
        Restablecer
      </Button>
      
      <Button
        startIcon={<Save />}
        onClick={onSave}
        sx={{
          borderRadius: '20px',
          backgroundColor: '#6a1b9a',
          color: 'white',
          fontWeight: 'bold',
          '&:hover': { backgroundColor: '#4a148c' },
        }}
        variant="contained"
      >
        Guardar
      </Button>
    </Stack>
  );
};

export default ActionButtons;
