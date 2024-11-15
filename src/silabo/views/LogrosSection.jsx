import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import SectionContainer from '../utils/SectionContainer';
import StyledTableContainer from '../utils/StyledTableContainer';
import ActionButtons from '../utils/ActionButtons';

const LogrosSection = ({ competencias, setLogros, originalLogros }) => {
  const logrosData = (competencias || []).flatMap((competencia) =>
    (competencia.logros || []).map((logro) => ({
      competenciaCodigo: competencia.codigo,
      logroCodigo: logro.codigo,
      descripcion: logro.descripcion,
      nueva: logro.nueva || false,
    }))
  );
  const handleAdd = () => {
    const newLogro = { competenciaCodigo: '', logroCodigo: '', descripcion: '', nueva: true };    
    // Actualizamos el estado con el nuevo logro
    setLogros((prevLogros) => [...prevLogros, newLogro]);
  };  
  const handleDelete = (index) => setLogros(logrosData.filter((_, i) => i !== index));
  
  const handleChange = (index, field, value) => {
    const updated = [...logrosData];
    updated[index][field] = value;
    setLogros(updated);
  };
  
  const handleReset = () => setLogros(originalLogros);
  
  const handleSave = () => {
    console.log("Guardar cambios:", logrosData);
    // Aquí puedes agregar la lógica para guardar los datos
  };

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#ffffff',
    },
    '& .MuiInputBase-input': { padding: '8px' },
  };

  return (
    <SectionContainer title="">
      <StyledTableContainer component="div">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 'bold',
                  color: '#4a148c',
                  fontSize: '1rem',
                  backgroundColor: '#e1bee7',
                  borderBottom: '2px solid #ba68c8',
                  padding: '12px',
                  width: '10%',
                }}
              >
                Competencia
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 'bold',
                  color: '#4a148c',
                  fontSize: '1rem',
                  backgroundColor: '#e1bee7',
                  borderBottom: '2px solid #ba68c8',
                  padding: '12px',
                  width: '10%',
                }}
              >
                Código
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 'bold',
                  color: '#4a148c',
                  fontSize: '1rem',
                  backgroundColor: '#e1bee7',
                  borderBottom: '2px solid #ba68c8',
                  padding: '12px',
                  width: '60%',
                }}
              >
                Descripción
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 'bold',
                  color: '#4a148c',
                  fontSize: '1rem',
                  backgroundColor: '#e1bee7',
                  borderBottom: '2px solid #ba68c8',
                  padding: '12px',
                }}
              >
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
                    sx={textFieldStyles}
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
                    sx={textFieldStyles}
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
      </StyledTableContainer>

      {/* Aquí se usa el componente ActionButtons con las funciones correspondientes */}
      <ActionButtons
        onAdd={handleAdd}
        onReset={handleReset}
        onSave={handleSave}
      />
    </SectionContainer>
  );
};

export default LogrosSection;
