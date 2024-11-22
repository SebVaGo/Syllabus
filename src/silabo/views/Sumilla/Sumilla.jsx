import React from 'react';
<<<<<<< HEAD
import { useSelector, useDispatch } from 'react-redux';
import { TextareaAutosize, Button, Stack, Typography } from '@mui/material';
import { Restore, Save } from '@mui/icons-material';
import SectionContainer from '../../utils/SectionContainer';
import { setFormData } from '../../slices/formDataSlice';

const Sumilla = () => {
  const dispatch = useDispatch();
  const sumilla = useSelector((state) => state.formData.data?.sumilla || ''); // Obtiene la sumilla del estado global
  const [tempValue, setTempValue] = React.useState(sumilla); // Estado temporal para edición
  const originalValue = useSelector((state) => state.formData.initialData?.sumilla || ''); // Valor original para restablecer

  // Restablecer al valor original
  const handleReset = () => {
    setTempValue(originalValue);
  };

  // Guardar el valor en el estado global
  const handleSave = () => {
    dispatch(
      setFormData({
        ...useSelector((state) => state.formData.data),
        sumilla: tempValue, // Actualiza solo la sumilla
      })
    );
  };

  return (
    <SectionContainer>
=======
import { useSelector } from 'react-redux';
import { TextareaAutosize, Button, Stack } from '@mui/material';

const Sumilla = () => {
  const sumilla = useSelector((state) => state.cargarDetallesCurso.curso.sumilla);
  const [tempValue, setTempValue] = React.useState(sumilla || '');

  React.useEffect(() => {
    setTempValue(sumilla || '');
  }, [sumilla]);

  const handleSave = () => {
    console.log('Guardar sumilla:', tempValue);
  };

  return (
    <div>
      <h3>Sumilla del Curso</h3>
>>>>>>> 6195f9d (Sumilla con redux Ok, falta editar)
      <TextareaAutosize
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        placeholder="Escribe aquí la sumilla del curso..."
        minRows={5}
        maxRows={10}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '15px',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      />
      <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          sx={{ borderRadius: '8px' }}
        >
          Guardar
        </Button>
      </Stack>
    </div>
  );
};

export default Sumilla;
