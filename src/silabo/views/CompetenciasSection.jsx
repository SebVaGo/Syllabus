import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import SectionContainer from '../utils/SectionContainer';
import StyledTableContainer from '../utils/StyledTableContainer';
import ActionButtons from '../utils/ActionButtons';

const CompetenciasSection = ({ competencias, setCompetencias, onSave }) => {
  const handleAdd = () => {
    const newCompetencia = { codigo: '', descripcion: '', tipo: '', nivel: '' };
    setCompetencias([...competencias, newCompetencia]);
  };

  const handleDelete = (index) => {
    const updatedCompetencias = competencias.filter((_, i) => i !== index);
    setCompetencias(updatedCompetencias);
  };

  const handleChange = (index, field, value) => {
    const updatedCompetencias = competencias.map((comp, i) =>
      i === index ? { ...comp, [field]: value } : comp
    );
    setCompetencias(updatedCompetencias);
  };

  const handleReset = () => {
    // Reset to the initial competencies state or implement a reset logic here
    setCompetencias([]); // Example of resetting to an empty state
  };

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#ffffff',
    },
    '& .MuiInputBase-input': { padding: '8px' },
  };

  return (
    <SectionContainer title="" sx={{ padding: '20px' }}>
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {['Código', 'Descripción', 'Tipo', 'Nivel', 'Acciones'].map((head, i) => (
                <TableCell
                  key={head}
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    color: '#4a148c',
                    fontSize: '1rem',
                    backgroundColor: '#e1bee7',
                    borderBottom: '2px solid #ba68c8',
                    padding: '12px',
                    width: i === 1 ? '50%' : 'auto',
                  }}
                >
                  {head}
                </TableCell>
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
                      sx={textFieldStyles}
                    />
                  </TableCell>
                ))}
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
      
      {/* Action buttons for Add, Reset, and Save */}
      <ActionButtons
        onAdd={handleAdd}
        onReset={handleReset}
        onSave={onSave}
      />
    </SectionContainer>
  );
};

export default CompetenciasSection;
