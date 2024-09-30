import { Routes, Route, Navigate } from 'react-router-dom';
import { SilaboLayout } from '../layout/SilaboLayout';
import { CrearSilabo } from '../pages/CrearSilabo';
import { SubirSilabo } from '../pages/SubirSilabo';

export const SilaboRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SilaboLayout />}>
        <Route path="crear-silabo" element={<CrearSilabo />} />
        <Route path="subir-silabo" element={<SubirSilabo />} />
        <Route path="*" element={<Navigate to="/crear-silabo" />} />
      </Route>
    </Routes>
  );
};
