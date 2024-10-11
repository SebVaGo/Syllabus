import React from 'react';
import { Container, Grid, TextField } from '@mui/material';
import '../styles/Formulario.css';

const BuscadorSil = () => {
  return (
    <Container maxWidth="lg" style={{ marginBottom: '20px' }}>
        <Grid item container direction="column" alignItems="center">
            <TextField id="curso" label="Curso" variant="filled" size="small" sx={{ mb: 2, backgroundColor: 'white',width: '80%' }} />
            <TextField id="codigo" label="Codigo" variant="filled" size="small" sx={{ mb: 2, backgroundColor: 'white',width: '80%' }} />
        </Grid>
    </Container>
  );
};

export default BuscadorSil;
