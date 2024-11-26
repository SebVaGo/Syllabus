import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cargarDetallesCurso } from '../actions/CargaDetalleCursoThunk';
import { Button, Container, Grid, TextField, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';

const BuscadorSil = () => {
  const [searchType, setSearchType] = useState('codigo');
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.cargarDetallesCurso);

  const handleSubmit = async () => {
    try {
      if (searchType === 'codigo') {
        await dispatch(cargarDetallesCurso(codigo, ''));
      } else {
        await dispatch(cargarDetallesCurso('', nombre));
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <Container maxWidth="lg" style={{ marginBottom: '20px' }}>
      <Grid item container direction="column" alignItems="center">
        <FormLabel component="legend" style={{ marginBottom: '10px' }}>
          Buscar por:
        </FormLabel>
        <RadioGroup
          row
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          style={{ marginBottom: '20px' }}
        >
          <FormControlLabel value="codigo" control={<Radio />} label="Código" />
          <FormControlLabel value="nombre" control={<Radio />} label="Nombre" />
        </RadioGroup>

        {searchType === 'codigo' ? (
          <TextField
            id="codigo"
            label="Codigo"
            variant="filled"
            size="small"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            sx={{ mb: 2, backgroundColor: 'white', width: '80%' }}
          />
        ) : (
          <TextField
            id="nombre"
            label="Nombre"
            variant="filled"
            size="small"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            sx={{ mb: 2, backgroundColor: 'white', width: '80%' }}
          />
        )}

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Buscar
        </Button>
      </Grid>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </Container>
  );
};

export default BuscadorSil;
