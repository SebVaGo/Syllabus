import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import SectionContainer from '../utils/SectionContainer';
import StyledTableContainer from '../utils/StyledTableContainer';
import ActionButtons from '../utils/ActionButtons';
import { addCompetencia, deleteCompetencia, updateCompetencia, resetCompetencias } from '../slices/formDataSlice';

const CompetenciasSection = () => {
  const dispatch = useDispatch();

  // Accede al estado global para obtener las competencias
  const competencias = useSelector((state) => state.formData.data?.competencias || []); 

  // Agrega una nueva competencia
  const handleAdd = () => {
    const newCompetencia = { codigo: '', descripcion: '', tipo: '', nivel: '' };
    dispatch(addCompetencia(newCompetencia));
  };

  // Elimina una competencia por índice
  const handleDelete = (index) => {
    dispatch(deleteCompetencia(index));
  };

  // Actualiza un campo específico de una competencia
  const handleChange = (index, field, value) => {
    dispatch(updateCompetencia({ index, field, value }));
  };

  // Restablece las competencias al estado inicial
  const handleReset = () => {
    dispatch(resetCompetencias());
  };

  // Estilos para los campos de texto
  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#ffffff',
    },
    '& .MuiInputBase-input': { padding: '8px' },
  };

  return (
    <SectionContainer sx={{ padding: '20px' }}>
      {/* Tabla de Competencias */}
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
                    width: i === 1 ? '50%' : 'auto', // Más espacio para la descripción
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
                {/* Renderiza las celdas de cada competencia */}
                {['codigo', 'descripcion', 'tipo', 'nivel'].map((field) => (
                  <TableCell key={field} align="center">
                    <TextField
                      variant="outlined"
                      size="small"
                      value={comp[field] || ''}
                      onChange={(e) => handleChange(index, field, e.target.value)}
                      fullWidth
                      multiline={field === 'descripcion'} // Habilita multiline para la descripción
                      sx={textFieldStyles}
                    />
                  </TableCell>
                ))}
                {/* Botón para eliminar una competencia */}
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

      {/* Botones de acción: Agregar, Restablecer, Guardar */}
      <ActionButtons
        onAdd={handleAdd}
        onReset={handleReset}
        onSave={() => console.log('Guardar competencias')} // Implementa la lógica de guardado si es necesario
      />
    </SectionContainer>
  );
};

export default CompetenciasSection;
