// src/components/LogrosSection.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

const LogrosSection = ({ competencias }) => {
  const logrosData = competencias.flatMap((competencia) =>
    competencia.logros.map((logro) => ({
      competenciaCodigo: competencia.codigo,
      logroCodigo: logro.codigo,
      descripcion: logro.descripcion,
    }))
  );

  const handleDelete = (index) => {
    // Aquí puedes implementar la lógica para eliminar un logro
  };

  const handleChange = (index, field, value) => {
    // Aquí puedes implementar la lógica para editar un logro
  };

  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#f8e6e6',
      borderRadius: '8px',
      '& fieldset': {
        borderColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: '#ccc',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ccc',
      },
    },
    '& .MuiInputBase-input': {
      padding: '8px',
      textAlign: 'center',
    },
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 2, width: '95%', borderRadius: '8px', backgroundColor: '#f8e6e6' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Competencia</TableCell>
            <TableCell align="center">Código</TableCell>
            <TableCell align="center">Descripción</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logrosData.map((logro, index) => (
            <TableRow key={index}>
              <TableCell align="center">{logro.competenciaCodigo}</TableCell>
              <TableCell align="center">
                <TextField
                  variant="outlined"
                  size="small"
                  value={logro.logroCodigo}
                  onChange={(e) => handleChange(index, 'logroCodigo', e.target.value)}
                  fullWidth
                  sx={textFieldStyle}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  variant="outlined"
                  size="small"
                  value={logro.descripcion}
                  onChange={(e) => handleChange(index, 'descripcion', e.target.value)}
                  fullWidth
                  sx={textFieldStyle}
                />
              </TableCell>
              <TableCell align="center">
                <IconButton onClick={() => handleDelete(index)} color="error">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LogrosSection;
