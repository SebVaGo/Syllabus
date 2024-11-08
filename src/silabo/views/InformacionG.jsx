import React from 'react';
import { Container, Grid, TextField } from '@mui/material';
import '../styles/Formulario.css';

const InformacionG = ({ codigo, nombre, creditos, horasSemanales, modalidad, tipo, ciclo, docentes, areaEstudios, semestreAcademico, prerequisitos }) => {
  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',  
    }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} sm={4} >
          <TextField 
            id="codigo" 
            label="Código" 
            variant="filled" 
            size="small" 
            value={codigo || ''} 
            sx={{ mb: 2,backgroundColor: 'white',width: '100%' }} 
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField 
            id="nombre" 
            label="Nombre" 
            variant="filled" 
            size="small" 
            value={nombre || ''} 
            sx={{ mb: 2,backgroundColor: 'white',width: '100%' }} 
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField 
            id="creditos" 
            label="Créditos" 
            variant="filled" 
            size="small" 
            value={creditos || ''} 
            sx={{ mb: 2,backgroundColor: 'white',width: '100%' }} 
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField 
            id="tipo-asignatura" 
            label="Tipo de Asignatura" 
            variant="filled" 
            size="small" 
            value={tipo || ''} 
            sx={{ mb: 2,backgroundColor: 'white',width: '100%' }} 
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField 
            id="area-estudios" 
            label="Área de Estudios" 
            variant="filled" 
            size="small" 
            value={areaEstudios || ''} 
            sx={{ mb: 2 ,backgroundColor: 'white',width: '100%'}} 
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} >
          <TextField 
            id="horas-semanales" 
            label="Horas Semanales" 
            variant="filled" 
            size="small" 
            value={horasSemanales || ''} 
            sx={{ mb: 2,backgroundColor: 'white' ,width: '100%'}} 
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField 
            id="ciclo" 
            label="Ciclo" 
            variant="filled" 
            size="small" 
            value={ciclo || ''} 
            sx={{ mb: 2,backgroundColor: 'white',width: '100%' }} 
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField 
            id="semestre-academico" 
            label="Semestre Académico" 
            variant="filled" 
            size="small" 
            value={semestreAcademico || ''} 
            sx={{ mb: 2,backgroundColor: 'white',width: '100%' }} 
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField 
            id="modalidad" 
            label="Modalidad" 
            variant="filled" 
            size="small" 
            value={modalidad || ''} 
            sx={{ mb: 2,backgroundColor: 'white' ,width: '100%'}} 
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField 
            id="docentes" 
            label="Docentes" 
            variant="filled" 
            size="small" 
            value={docentes || ''} 
            sx={{ mb: 2,backgroundColor: 'white',width: '100%' }} 
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField 
            id="prerequisitos" 
            label="Prerrequisitos" 
            variant="filled" 
            size="small" 
            value={prerequisitos || ''} 
            sx={{ mb: 2 ,backgroundColor: 'white',width: '100%'}} 
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default InformacionG;
