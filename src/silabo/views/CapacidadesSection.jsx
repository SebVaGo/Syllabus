import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, IconButton } from '@mui/material';
import SectionContainer from '../utils/SectionContainer';
import StyledTableContainer from '../utils/StyledTableContainer';
import ActionButtons from '../utils/ActionButtons';
import {
  addUnidad,
  updateUnidad,
  resetUnidades,
} from '../slices/formDataSlice'; // Acciones de Redux

const CapacidadesSection = () => {
  const dispatch = useDispatch();

  // Obtener unidades directamente desde Redux
  const unidades = useSelector((state) => state.formData.data?.unidades || []);

  // Manejar la adición de una nueva unidad
  const handleAdd = () => {
    const nuevaUnidad = { numero: '', duracion: '', descripcion: '', nueva: true };
    dispatch(addUnidad(nuevaUnidad)); // Despacha acción para agregar una unidad
  };

  // Manejar los cambios en una unidad
  const handleChange = (index, field, value) => {
    dispatch(updateUnidad({ index, field, value })); // Despacha acción para actualizar la unidad
  };

  // Restablecer las unidades al estado original
  const handleReset = () => {
    dispatch(resetUnidades()); // Despacha acción para restablecer las unidades
  };

  // Guardar los cambios (aquí puedes conectar con el backend si es necesario)
  const handleSave = () => {
    console.log('Guardar cambios:', unidades);
    // Implementa aquí la lógica para guardar los datos en el backend
  };

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#ffffff',
    },
    '& .MuiInputBase-input': { padding: '8px', textAlign: 'center' },
  };

  return (
    <SectionContainer title="Capacidades por Unidad">
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {['Número de Unidad', 'Duración (Semanas)', 'Logro', 'Acciones'].map((head, index) => (
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
                    width: index === 2 ? '55%' : '15%',
                  }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {unidades.map((unidad, index) => (
              <TableRow key={index} hover>
                <TableCell align="center">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={unidad.numero || ''}
                    onChange={(e) => handleChange(index, 'numero', e.target.value)}
                    fullWidth
                    sx={textFieldStyles}
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={unidad.duracion || ''}
                    onChange={(e) => handleChange(index, 'duracion', e.target.value)}
                    fullWidth
                    sx={textFieldStyles}
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={unidad.descripcion || ''}
                    onChange={(e) => handleChange(index, 'descripcion', e.target.value)}
                    fullWidth
                    multiline
                    rows={2}
                    sx={textFieldStyles}
                  />
                </TableCell>
                <TableCell align="center">
                  {/* Espacio para acciones adicionales si es necesario */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

      {/* Botones de acción */}
      <ActionButtons onAdd={handleAdd} onReset={handleReset} onSave={handleSave} />
    </SectionContainer>
  );
};

export default CapacidadesSection;
