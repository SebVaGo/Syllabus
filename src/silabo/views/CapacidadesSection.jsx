import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField, IconButton, Stack, Button } from '@mui/material';
import { Add, Restore } from '@mui/icons-material';
import ResetButton from '../utils/ResetButton';

const CapacidadesSection = ({ unidades, setUnidades, originalUnidades }) => {
  const handleAdd = () => {
    setUnidades([...unidades, { numero: '', duracion: '', descripcion: '', nueva: true }]);
  };

  const handleReset = () => {
    setUnidades(originalUnidades); // Restablece las unidades a los datos originales
  };

  const handleChange = (index, field, value) => {
    const updated = [...unidades];
    updated[index][field] = value;
    setUnidades(updated);
  };

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#ffffff',
    },
    '& .MuiInputBase-input': { padding: '8px', textAlign: 'center' },
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 3,
        width: '95%',
        borderRadius: '12px',
        backgroundColor: '#f3e5f5',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '20px'
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold', color: '#4a148c', fontSize: '1rem', backgroundColor: '#e1bee7', borderBottom: '2px solid #ba68c8', padding: '12px', width: '15%' }}>
              Número de Unidad
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', color: '#4a148c', fontSize: '1rem', backgroundColor: '#e1bee7', borderBottom: '2px solid #ba68c8', padding: '12px', width: '15%' }}>
              Duración (Semanas)
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', color: '#4a148c', fontSize: '1rem', backgroundColor: '#e1bee7', borderBottom: '2px solid #ba68c8', padding: '12px', width: '55%' }}>
              Logro
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', color: '#4a148c', fontSize: '1rem', backgroundColor: '#e1bee7', borderBottom: '2px solid #ba68c8', padding: '12px' }}>
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {unidades.map((unidad, index) => (
            <TableRow key={index} hover>
              <TableCell align="center">
                <TextField
                  variant="outlined"
                  size="small"
                  value={unidad.numero}
                  onChange={(e) => handleChange(index, 'numero', e.target.value)}
                  fullWidth
                  disabled={!unidad.nueva}
                  sx={textFieldStyles}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  variant="outlined"
                  size="small"
                  value={unidad.duracion}
                  onChange={(e) => handleChange(index, 'duracion', e.target.value)}
                  fullWidth
                  sx={textFieldStyles}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  variant="outlined"
                  size="small"
                  value={unidad.descripcion}
                  onChange={(e) => handleChange(index, 'descripcion', e.target.value)}
                  fullWidth
                  multiline
                  rows={2}
                  sx={textFieldStyles}
                />
              </TableCell>
              <TableCell align="center">
                {/* Botón de eliminación si se requiere en el futuro */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 3 }}>
        <Button
          startIcon={<Add />}
          onClick={handleAdd}
          sx={{
            borderRadius: '20px',
            backgroundColor: '#8e24aa',
            color: 'white',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#6a1b9a' },
          }}
          variant="contained"
        >
          Agregar Unidad
        </Button>
        <ResetButton onClick={handleReset} />
      </Stack>
    </TableContainer>
  );
};

export default CapacidadesSection;
