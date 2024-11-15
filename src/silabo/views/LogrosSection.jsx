import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton, Button, Stack } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import ResetButton from '../utils/ResetButton';

const LogrosSection = ({ competencias, setLogros, originalLogros }) => {
  const logrosData = competencias.flatMap((competencia) =>
    competencia.logros.map((logro) => ({
      competenciaCodigo: competencia.codigo,
      logroCodigo: logro.codigo,
      descripcion: logro.descripcion,
      nueva: logro.nueva || false,
    }))
  );

  const handleAdd = () => setLogros([...logrosData, { competenciaCodigo: '', logroCodigo: '', descripcion: '', nueva: true }]);
  const handleDelete = (index) => setLogros(logrosData.filter((_, i) => i !== index));
  const handleChange = (index, field, value) => {
    const updated = [...logrosData];
    updated[index][field] = value;
    setLogros(updated);
  };
  const handleReset = () => setLogros(originalLogros);

  const textFieldStyles = (editable) => ({
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: editable ? '#ffffff' : '#e0e0e0',
    },
    '& .MuiInputBase-input': { padding: '8px' },
  });

  return (
    <TableContainer component={Paper} sx={{ mt: 3, width: '95%', borderRadius: '12px', backgroundColor: '#f3e5f5' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold', color: '#4a148c', fontSize: '1rem', backgroundColor: '#e1bee7', borderBottom: '2px solid #ba68c8', padding: '12px', width: '10%' }}>
              Competencia
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', color: '#4a148c', fontSize: '1rem', backgroundColor: '#e1bee7', borderBottom: '2px solid #ba68c8', padding: '12px', width: '10%' }}>
              Código
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', color: '#4a148c', fontSize: '1rem', backgroundColor: '#e1bee7', borderBottom: '2px solid #ba68c8', padding: '12px', width: '60%' }}>
              Descripción
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', color: '#4a148c', fontSize: '1rem', backgroundColor: '#e1bee7', borderBottom: '2px solid #ba68c8', padding: '12px' }}>
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logrosData.map((logro, index) => (
            <TableRow key={index} hover>
              <TableCell align="center" sx={{ color: '#4a148c', width: '10%' }}>{logro.competenciaCodigo}</TableCell>
              <TableCell align="center" sx={{ width: '10%' }}>
                <TextField
                  variant="outlined"
                  size="small"
                  value={logro.logroCodigo}
                  onChange={(e) => handleChange(index, 'logroCodigo', e.target.value)}
                  fullWidth
                  disabled={!logro.nueva}
                  sx={textFieldStyles(logro.nueva)}
                />
              </TableCell>
              <TableCell align="center" sx={{ width: '60%' }}>
                <TextField
                  variant="outlined"
                  size="small"
                  value={logro.descripcion}
                  onChange={(e) => handleChange(index, 'descripcion', e.target.value)}
                  fullWidth
                  multiline
                  rows={2}
                  sx={textFieldStyles(true)}
                />
              </TableCell>
              <TableCell align="center">
                <IconButton onClick={() => handleDelete(index)} color="error" sx={{ padding: '8px' }}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Stack direction="row" spacing={2} sx={{ m: 2 }}>
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
          Agregar Logro
        </Button>
        <ResetButton onClick={handleReset} />
      </Stack>
    </TableContainer>
  );
};

export default LogrosSection;
