import { createSlice } from '@reduxjs/toolkit';

export const silaboSlice = createSlice({
    name: "silabo",
    initialState: {
        status: 'no-iniciado',
        errorMessage: null,
        // Otros estados que necesites
    },
    reducers: {
        iniciarCreacionSilabo: (state) => {
            state.status = 'creando';
        },
        exitoCreacionSilabo: (state) => {
            state.status = 'creado';
        },
        falloCreacionSilabo: (state, { payload }) => {
            state.status = 'error';
            state.errorMessage = payload;
        },
        reiniciarEstadoSilabo: (state) => {
            state.status = 'no-iniciado';
            state.errorMessage = null;
        },
    }
});

export const { iniciarCreacionSilabo, exitoCreacionSilabo, falloCreacionSilabo, reiniciarEstadoSilabo } = silaboSlice.actions;
