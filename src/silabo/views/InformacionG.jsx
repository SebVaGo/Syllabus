import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import SectionContainer from '../utils/SectionContainer';
import ActionButtons from '../utils/ActionButtons';

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
      borderRadius: '6px',
      '& .MuiFilledInput-root': {
        borderRadius: '6px',
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

  const handleSave = () => {
    console.log('Guardar cambios:', cursoData);
    // Aquí puedes añadir la lógica para guardar los cambios en el curso
  };

  const handleAdd = () => {
    console.log('Agregar nuevo campo o funcionalidad');
    // Añadir funcionalidad para "Agregar" si se necesita en el contexto de InformacionG
  };

  return (
    <SectionContainer title="" sx={{ padding: '15px' }}>
      <Grid container spacing={1}>
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

      {/* Uso del componente ActionButtons */}
      <ActionButtons onAdd={handleAdd} onReset={handleReset} onSave={handleSave} />
    </SectionContainer>
  );
};

export default InformacionG;
