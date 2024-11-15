import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const ProgramacionContenidoTable = ({ unidades }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 3,
        width: '95%',
        borderRadius: '12px',
        backgroundColor: '#f3e5f5',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
      }}
    >
      <Typography variant="h6" sx={{ color: '#4a148c', fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
        Programación de Contenido
      </Typography>
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
    </TableContainer>
  );
};

export default ProgramacionContenidoTable;
