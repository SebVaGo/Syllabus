import React, { useState } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import '../styles/Formulario.css';

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
    sx={{ mb: 2, backgroundColor: 'white', width: '100%' }}
  />
);

const InformacionG = ({ 
  codigo, nombre, creditos, horasSemanales, modalidad, tipo, 
  ciclo, docentes, areaEstudios, semestreAcademico, prerequisitos 
}) => {
  // Estado para los valores actuales y los valores originales (para restablecer)
  const [cursoData, setCursoData] = useState({
    codigo,
    nombre,
    creditos,
    horasSemanales,
    modalidad,
    tipo,
    ciclo,
    docentes,
    areaEstudios,
    semestreAcademico,
    prerequisitos,
  });
  const [initialData] = useState(cursoData);  // Guardar los valores originales para restablecerlos

  // Actualiza el estado `cursoData` cuando el usuario edita un campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCursoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Restablece `cursoData` a sus valores iniciales
  const handleReset = () => {
    setCursoData(initialData);
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <InfoField id="codigo" label="Código" value={cursoData.codigo} onChange={handleChange} />
          <InfoField id="nombre" label="Nombre" value={cursoData.nombre} onChange={handleChange} />
          <InfoField id="creditos" label="Créditos" value={cursoData.creditos} onChange={handleChange} />
          <InfoField id="tipo" label="Tipo de Asignatura" value={cursoData.tipo} onChange={handleChange} />
          <InfoField id="areaEstudios" label="Área de Estudios" value={cursoData.areaEstudios} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InfoField id="horasSemanales" label="Horas Semanales" value={cursoData.horasSemanales} onChange={handleChange} />
          <InfoField id="ciclo" label="Ciclo" value={cursoData.ciclo} onChange={handleChange} />
          <InfoField id="semestreAcademico" label="Semestre Académico" value={cursoData.semestreAcademico} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InfoField id="modalidad" label="Modalidad" value={cursoData.modalidad} onChange={handleChange} />
          <InfoField id="docentes" label="Docentes" value={cursoData.docentes} onChange={handleChange} />
          <InfoField id="prerequisitos" label="Prerrequisitos" value={cursoData.prerequisitos} onChange={handleChange} />
        </Grid>
      </Grid>
      
      <Button onClick={handleReset} sx={{ mt: 2 }} color="secondary" variant="outlined">
        Restablecer
      </Button>

      <Button onClick={() => console.log('Guardar cambios:', cursoData)} sx={{ mt: 2, ml: 2 }} color="primary" variant="contained">
        Guardar
      </Button>
    </Container>
  );
};

export default InformacionG;
