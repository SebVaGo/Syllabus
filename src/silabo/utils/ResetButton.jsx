// src/components/ResetButton.jsx
import React from 'react';
import { Button } from '@mui/material';
import { Restore } from '@mui/icons-material';

const ResetButton = ({ onClick }) => (
  <Button
    startIcon={<Restore />}
    onClick={onClick}
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
);

export default ResetButton;
