import React from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';

export default function InformacionG() {
    return (
        <Container maxWidth="lg" style={{ marginBottom: '20px'}}>
            <Grid container spacing={3}>
              
                <Grid item xs={12} sm={4}>
                    <TextField
                        hiddenLabel
                        id="creditos"
                        label="Creditos"
                        variant="filled"
                        size="small"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        hiddenLabel
                        id="tipo-asignatura"
                        label="Tipo de Asignatura"
                        variant="filled"
                        size="small"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        hiddenLabel
                        id="area-estudios"
                        label="Área de Estudios"
                        variant="filled"
                        size="small"
                        sx={{ mb: 2 }}
                    />
                </Grid>

    
                <Grid item xs={12} sm={4}>
                    <TextField
                        hiddenLabel
                        id="horas-semanales"
                        label="Horas Semanales"
                        variant="filled"
                        size="small"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        hiddenLabel
                        id="ciclo"
                        label="Ciclo"
                        variant="filled"
                        size="small"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        hiddenLabel
                        id="semestre-academico"
                        label="Semestre Académico"
                        variant="filled"
                        size="small"
                        fsx={{ mb: 2 }}
                    />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        hiddenLabel
                        id="modalidad"
                        label="Modalidad"
                        variant="filled"
                        size="small"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        hiddenLabel
                        id="docentes"
                        label="Docentes"
                        variant="filled"
                        size="small"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        hiddenLabel
                        id="prerequisitos"
                        label="Prerequisitos"
                        variant="filled"
                        size="small"
                        sx={{ mb: 2 }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
