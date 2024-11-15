import React, { useState } from 'react';
import { Grid, TextField, Button, Paper, Typography, Stack } from '@mui/material';
import { Restore, Save } from '@mui/icons-material';

// Componente reutilizable para cada campo de información
const InfoField = ({ id, label, value, onChange }) => (
  <TextField
    id={id}
    label={label}
    variant="filled"
    size="small"
    value={value || ''}
    name={id}
    onChange={onChange}
    sx={{
      mb: 1,
      backgroundColor: 'white',
      width: '100%',
      borderRadius: '8px',
      '& .MuiFilledInput-root': {
        borderRadius: '8px',
      },
    }}
  />
);

const InformacionG = ({
  codigo, nombre, creditos, horasSemanales, modalidad, tipo,
  ciclo, docentes, areaEstudios, semestreAcademico, prerequisitos
}) => {
  const [cursoData, setCursoData] = useState({
    codigo, nombre, creditos, horasSemanales, modalidad, tipo,
    ciclo, docentes, areaEstudios, semestreAcademico, prerequisitos,
  });
  const [initialData] = useState(cursoData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCursoData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleReset = () => setCursoData(initialData);

  return (
    <Paper
      elevation={3}
      sx={{
        padding: '20px',
        borderRadius: '20px',
        backgroundColor: 'rgba(113, 56, 77, 0.1)',
        width: '90%',
        margin: '20px auto',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" sx={{ color: '#4a148c', fontWeight: 'bold', mb: 2 }}>
        Información General del Curso
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <InfoField id="codigo" label="Código" value={cursoData.codigo} onChange={handleChange} />
          <InfoField id="nombre" label="Nombre" value={cursoData.nombre} onChange={handleChange} />
          <InfoField id="creditos" label="Créditos" value={cursoData.creditos} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <InfoField id="horasSemanales" label="Horas Semanales" value={cursoData.horasSemanales} onChange={handleChange} />
          <InfoField id="modalidad" label="Modalidad" value={cursoData.modalidad} onChange={handleChange} />
          <InfoField id="tipo" label="Tipo de Asignatura" value={cursoData.tipo} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <InfoField id="ciclo" label="Ciclo" value={cursoData.ciclo} onChange={handleChange} />
          <InfoField id="semestreAcademico" label="Semestre Académico" value={cursoData.semestreAcademico} onChange={handleChange} />
          <InfoField id="areaEstudios" label="Área de Estudios" value={cursoData.areaEstudios} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <InfoField id="docentes" label="Docentes" value={cursoData.docentes} onChange={handleChange} />
          <InfoField id="prerequisitos" label="Prerrequisitos" value={cursoData.prerequisitos} onChange={handleChange} />
        </Grid>
      </Grid>

      <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 3 }}>
        <Button
          onClick={handleReset}
          startIcon={<Restore />}
          sx={{
            borderRadius: '10px',
            backgroundColor: '#d32f2f',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px',
            padding: '6px 12px',
            '&:hover': { backgroundColor: '#b71c1c' },
          }}
          variant="contained"
        >
          Restablecer
        </Button>
        
        <Button
          onClick={() => console.log('Guardar cambios:', cursoData)}
          startIcon={<Save />}
          sx={{
            borderRadius: '10px',
            backgroundColor: '#4a148c',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px',
            padding: '6px 12px',
            '&:hover': { backgroundColor: '#380d5d' },
          }}
          variant="contained"
        >
          Guardar
        </Button>
      </Stack>
    </Paper>
  );
};

export default InformacionG;
