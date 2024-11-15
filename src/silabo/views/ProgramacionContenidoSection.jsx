import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import SectionContainer from '../utils/SectionContainer';
import StyledTableContainer from '../utils/StyledTableContainer';
import ActionButtons from '../utils/ActionButtons';

const ProgramacionContenidoTable = ({ unidades, setUnidades, originalUnidades }) => {
  const handleAdd = () => {
    const newUnidad = { numero: '', contenidos: [] };
    setUnidades([...unidades, newUnidad]);
  };

  const handleReset = () => {
    setUnidades(originalUnidades);
  };

  const handleSave = () => {
    console.log("Guardar cambios:", unidades);
    // Aquí puedes agregar la lógica de guardado
  };

  return (
    <SectionContainer title="" sx={{ padding: '20px' }}>
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {['Unidad', 'Semana', 'Contenido', 'Actividades', 'Recursos', 'Estrategias'].map((head) => (
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
                  }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {unidades.map((unidad) =>
              (unidad.contenidos || []).map((contenido, index) => (
                <TableRow key={`${unidad.numero}-${index}`} hover>
                  <TableCell align="center" sx={{ color: '#4a148c' }}>
                    {unidad.numero}
                  </TableCell>
                  <TableCell align="center" sx={{ color: '#4a148c' }}>
                    {contenido.semana}
                  </TableCell>
                  <TableCell sx={{ maxWidth: '300px', wordWrap: 'break-word' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#4a148c' }}>
                      {contenido.tema}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6a1b9a' }}>
                      {contenido.descripcion}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: '200px', wordWrap: 'break-word' }}>
                    {(contenido.actividades || []).map((actividad, idx) => (
                      <Typography variant="body2" key={idx} sx={{ color: '#4a148c' }}>
                        <em>{actividad.tipo}</em> - {actividad.nombre}
                      </Typography>
                    ))}
                  </TableCell>
                  <TableCell sx={{ maxWidth: '200px', wordWrap: 'break-word' }}>
                    {(contenido.recursos || []).map((recurso, idx) => (
                      <Typography variant="body2" key={idx} sx={{ color: '#4a148c' }}>
                        {recurso.nombre}
                      </Typography>
                    ))}
                  </TableCell>
                  <TableCell sx={{ maxWidth: '200px', wordWrap: 'break-word' }}>
                    {(contenido.estrategias || []).map((estrategia, idx) => (
                      <Typography variant="body2" key={idx} sx={{ color: '#4a148c' }}>
                        {estrategia.nombre}
                      </Typography>
                    ))}
                  </TableCell>
                </TableRow>
              ))
            )}
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

export default ProgramacionContenidoTable;
