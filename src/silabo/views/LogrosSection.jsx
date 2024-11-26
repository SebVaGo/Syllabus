import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import SectionContainer from '../utils/SectionContainer';
import StyledTableContainer from '../utils/StyledTableContainer';
import ActionButtons from '../utils/ActionButtons';
import {
  addLogro,
  deleteLogro,
  updateLogro,
  resetLogros,
} from '../slices/formDataSlice'; // Acciones desde formDataSlice

const LogrosSection = () => {
  const dispatch = useDispatch();

  // Obtiene los logros y competencias desde el estado global
  const competencias = useSelector((state) => state.formData.data?.competencias || []);
  const logros = useSelector((state) =>
    competencias.flatMap((competencia) =>
      (competencia.logros || []).map((logro) => ({
        competenciaCodigo: competencia.codigo,
        logroCodigo: logro.codigo,
        descripcion: logro.descripcion,
        nueva: logro.nueva || false,
      }))
    )
  );
  const originalLogros = useSelector((state) => state.formData.initialData?.competencias || []).flatMap((competencia) =>
    competencia.logros || []
  );

  // Agregar un nuevo logro
  const handleAdd = () => {
    const newLogro = { competenciaCodigo: '', logroCodigo: '', descripcion: '', nueva: true };
    dispatch(addLogro(newLogro)); // Acción de Redux para agregar un logro
  };

  // Eliminar un logro por índice
  const handleDelete = (index) => {
    dispatch(deleteLogro(index)); // Acción de Redux para eliminar un logro
  };

  // Actualizar un campo de un logro
  const handleChange = (index, field, value) => {
    dispatch(updateLogro({ index, field, value })); // Acción de Redux para actualizar un logro
  };

  // Restablecer los logros al estado original
  const handleReset = () => {
    dispatch(resetLogros());
  };

  // Guardar los cambios (aquí se puede conectar con un backend)
  const handleSave = () => {
    console.log('Guardar cambios:', logros);
    // Implementa la lógica para guardar los datos en el backend si es necesario
  };

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#ffffff',
    },
    '& .MuiInputBase-input': { padding: '8px' },
  };

  return (
    <SectionContainer title="Logros de Aprendizaje">
      <StyledTableContainer component="div">
        <Table>
          <TableHead>
            <TableRow>
              {['Competencia', 'Código', 'Descripción', 'Acciones'].map((head, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    color: '#4a148c',
                    fontSize: '1rem',
                    backgroundColor: '#e1bee7',
                    borderBottom: '2px solid #ba68c8',
                    padding: '12px',
                    width: index === 2 ? '60%' : 'auto', // Más espacio para la descripción
                  }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {logros.map((logro, index) => (
              <TableRow key={index} hover>
                <TableCell align="center" sx={{ color: '#4a148c', width: '10%' }}>
                  {logro.competenciaCodigo}
                </TableCell>
                <TableCell align="center" sx={{ width: '10%' }}>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={logro.logroCodigo || ''}
                    onChange={(e) => handleChange(index, 'logroCodigo', e.target.value)}
                    fullWidth
                    sx={textFieldStyles}
                  />
                </TableCell>
                <TableCell align="center" sx={{ width: '60%' }}>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={logro.descripcion || ''}
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

      {/* Botones de acción */}
      <ActionButtons
        onAdd={handleAdd}
        onReset={handleReset}
        onSave={handleSave}
      />
    </SectionContainer>
  );
};

export default LogrosSection;
