import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton, Button, Stack } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import ResetButton from '../utils/ResetButton';

const CompetenciasSection = ({ competencias, setCompetencias, originalCompetencias }) => {
  const handleAdd = () => setCompetencias([...competencias, { codigo: '', descripcion: '', tipo: '', nivel: '', nueva: true }]);
  const handleDelete = (index) => setCompetencias(competencias.filter((_, i) => i !== index));
  const handleChange = (index, field, value) => {
    const updated = [...competencias];
    updated[index][field] = value;
    setCompetencias(updated);
  };
  const handleReset = () => setCompetencias(originalCompetencias);

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
            {['Código', 'Descripción', 'Tipo', 'Nivel', 'Acciones'].map((head, i) => (
              <TableCell key={head} align="center" sx={{ fontWeight: 'bold', color: '#4a148c', fontSize: '1rem', backgroundColor: '#e1bee7', borderBottom: '2px solid #ba68c8', padding: '12px', width: i === 1 ? '50%' : 'auto' }}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {competencias.map((comp, index) => (
            <TableRow key={index} hover>
              {['codigo', 'descripcion', 'tipo', 'nivel'].map((field) => (
                <TableCell key={field} align="center">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={comp[field]}
                    onChange={(e) => handleChange(index, field, e.target.value)}
                    fullWidth
                    multiline={field === 'descripcion'}
                    disabled={!comp.nueva && field !== 'descripcion'}
                    sx={textFieldStyles(comp.nueva || field === 'descripcion')}
                  />
                </TableCell>
              ))}
              <TableCell align="center">
                <IconButton onClick={() => handleDelete(index)} color="error" sx={{ padding: '8px' }}><Delete /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Stack direction="row" spacing={2} sx={{ m: 2 }}>
        <Button startIcon={<Add />} onClick={handleAdd} sx={{ borderRadius: '20px', backgroundColor: '#8e24aa', color: 'white', fontWeight: 'bold', '&:hover': { backgroundColor: '#6a1b9a' } }} variant="contained">
          Agregar Competencia
        </Button>
        <ResetButton onClick={handleReset} />
      </Stack>
    </TableContainer>
  );
};

export default CompetenciasSection;
