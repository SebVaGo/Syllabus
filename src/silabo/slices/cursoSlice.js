// cursoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cursoSlice = createSlice({
  name: 'curso',
  initialState: {
    sumilla: '',
    // otros campos del curso
  },
  reducers: {
    setSumilla: (state, action) => {
      state.sumilla = action.payload;
    },
    // otros reducers
  },
});

export const { setSumilla } = cursoSlice.actions;

export default cursoSlice.reducer;
