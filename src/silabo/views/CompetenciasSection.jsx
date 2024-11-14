import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TextField, IconButton, Button
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

const CompetenciasSection = ({ competencias, setCompetencias }) => {
  
  const handleAdd = () => setCompetencias([...competencias, { codigo: '', descripcion: '', tipo: '', nivel: '' }]);
  const handleDelete = (index) => setCompetencias(competencias.filter((_, i) => i !== index));
  const handleChange = (index, field, value) => {
    const updated = [...competencias];
    updated[index][field] = value;
    setCompetencias(updated);
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 2, width: '95%', borderRadius: '8px', backgroundColor: '#f8e6e6' }}>
      <Table>
        <TableHead>
          <TableRow>
            {['Código', 'Descripción', 'Tipo', 'Nivel', 'Acciones'].map((head) => (
              <TableCell key={head} align="center" sx={{ fontWeight: 'bold', color: '#333' }}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {competencias.map((comp, index) => (
            <TableRow key={index}>
              {['codigo', 'descripcion', 'tipo', 'nivel'].map((field) => (
                <TableCell key={field} align="center">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={comp[field]}
                    onChange={(e) => handleChange(index, field, e.target.value)}
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        backgroundColor: 'white',
                        paddingRight: '4px',
                      },
                      '& .MuiInputBase-input': {
                        padding: '8px',
                      },
                    }}
                  />
                </TableCell>
              ))}
              <TableCell align="center">
                <IconButton onClick={() => handleDelete(index)} color="error">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        startIcon={<Add />}
        onClick={handleAdd}
        sx={{ m: 2, width: 'fit-content', backgroundColor: '#3f51b5', color: 'white', '&:hover': { backgroundColor: '#303f9f' } }}
        variant="contained"
      >
        Agregar Competencia
      </Button>
    </TableContainer>
  );
};

export default CompetenciasSection;
