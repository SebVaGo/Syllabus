import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cargarDetallesCurso } from '../actions/CargaDetalleCursoThunk';
import { Button, Container, Grid, TextField, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';

<<<<<<< HEAD
const BuscadorSil = () => {
=======
const BuscadorSil = ({ setErrorMessage }) => {
>>>>>>> 6195f9d (Sumilla con redux Ok, falta editar)
  const [searchType, setSearchType] = useState('codigo');
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.cargarDetallesCurso);

  const handleSubmit = async () => {
    if (!codigo && !nombre) {
      setErrorMessage('Por favor ingresa un código o nombre para buscar.');
      return;
    }

    try {
      if (searchType === 'codigo') {
<<<<<<< HEAD
        await dispatch(cargarDetallesCurso(codigo, ''));
      } else {
        await dispatch(cargarDetallesCurso('', nombre));
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
=======
        await dispatch(cargarDetallesCurso(codigo, '')); // Usa Redux para actualizar el estado
      } else {
        await dispatch(cargarDetallesCurso('', nombre));
      }

      setErrorMessage(null); // Limpia cualquier mensaje de error
    } catch (err) {
      console.error('Error en la solicitud:', err);
      setErrorMessage(err.response?.data?.message || 'Error en la solicitud');
>>>>>>> 6195f9d (Sumilla con redux Ok, falta editar)
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
            label="Código"
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

<<<<<<< HEAD
        <Button variant="contained" color="primary" onClick={handleSubmit}>
=======
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
>>>>>>> 6195f9d (Sumilla con redux Ok, falta editar)
          Buscar
        </Button>
      </Grid>

          {loading && <p>Cargando...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {!loading && !error && data && (
          <p>Datos cargados correctamente. Revisa las secciones correspondientes.</p>
    )}
    </Container>
  );
};

export default BuscadorSil;
