import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import SectionContainer from '../utils/SectionContainer';
import StyledTableContainer from '../utils/StyledTableContainer';
import ActionButtons from '../utils/ActionButtons';

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

  const handleSave = () => {
    console.log("Guardar cambios:", unidades);
    // Agrega aquí la lógica para guardar los datos
  };

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#ffffff',
    },
    '& .MuiInputBase-input': { padding: '8px', textAlign: 'center' },
  };

  return (
    <SectionContainer title="">
      <StyledTableContainer>
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
      </StyledTableContainer>

      {/* Uso de ActionButtons con las funciones correspondientes */}
      <ActionButtons
        onAdd={handleAdd}
        onReset={handleReset}
        onSave={handleSave}
      />
    </SectionContainer>
  );
};

export default CapacidadesSection;
