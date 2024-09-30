import React from 'react';
import { Container, Grid, TextField } from '@mui/material';
import '../styles/Formulario.css';
const InformacionG = () => {
  return (
    <Container maxWidth="lg" style={{ marginBottom: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField id="creditos" label="Creditos" variant="filled" size="small" sx={{ mb: 2 }} />
          <TextField id="tipo-asignatura" label="Tipo de Asignatura" variant="filled" size="small" sx={{ mb: 2 }} />
          <TextField id="area-estudios" label="Área de Estudios" variant="filled" size="small" sx={{ mb: 2 }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="horas-semanales" label="Horas Semanales" variant="filled" size="small" sx={{ mb: 2 }} />
          <TextField id="ciclo" label="Ciclo" variant="filled" size="small" sx={{ mb: 2 }} />
          <TextField id="semestre-academico" label="Semestre Académico" variant="filled" size="small" sx={{ mb: 2 }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="modalidad" label="Modalidad" variant="filled" size="small" sx={{ mb: 2 }} />
          <TextField id="docentes" label="Docentes" variant="filled" size="small" sx={{ mb: 2 }} />
          <TextField id="prerequisitos" label="Prerequisitos" variant="filled" size="small" sx={{ mb: 2 }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default InformacionG;
