import React from 'react';
import { Container, Grid, TextField } from '@mui/material';
import '../styles/Formulario.css';
const InformacionG = () => {
  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',  
    }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} sm={4} >
          <TextField id="creditos" label="Creditos" variant="filled" size="small" sx={{ mb: 2,backgroundColor: 'white',width: '100%' }} />
          <TextField id="tipo-asignatura" label="Tipo de Asignatura" variant="filled" size="small" sx={{ mb: 2,backgroundColor: 'white',width: '100%' }} />
          <TextField id="area-estudios" label="Área de Estudios" variant="filled" size="small" sx={{ mb: 2 ,backgroundColor: 'white',width: '100%'}} />
        </Grid>
        <Grid item xs={12} sm={4} >
          <TextField id="horas-semanales" label="Horas Semanales" variant="filled" size="small" sx={{ mb: 2,backgroundColor: 'white' ,width: '100%'}} />
          <TextField id="ciclo" label="Ciclo" variant="filled" size="small" sx={{ mb: 2,backgroundColor: 'white',width: '100%' }} />
          <TextField id="semestre-academico" label="Semestre Académico" variant="filled" size="small" sx={{ mb: 2,backgroundColor: 'white',width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="modalidad" label="Modalidad" variant="filled" size="small" sx={{ mb: 2,backgroundColor: 'white' ,width: '100%'}} />
          <TextField id="docentes" label="Docentes" variant="filled" size="small" sx={{ mb: 2,backgroundColor: 'white',width: '100%' }} />
          <TextField id="prerequisitos" label="Prerequisitos" variant="filled" size="small" sx={{ mb: 2 ,backgroundColor: 'white',width: '100%'}} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default InformacionG;
