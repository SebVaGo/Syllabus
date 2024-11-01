// silabo/routes/SilaboRoutes.js
import { Routes, Route, Navigate } from 'react-router-dom';
import { SilaboLayout } from '../layout/SilaboLayout';
import { CrearSilabo } from '../pages/CrearSilabo';
import { SubirSilabo } from '../pages/SubirSilabo';
import { LoginForm } from '../pages/LoginForm';
import { ProtectedRoute } from '../hooks/ProtectedRoute';

export const SilaboRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SilaboLayout />}>
        <Route
          path="crear-silabo"
          element={
            <ProtectedRoute>
              <CrearSilabo />
            </ProtectedRoute>
          }
        />
        <Route
          path="subir-silabo"
          element={
            <ProtectedRoute>
              <SubirSilabo />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<LoginForm />} />
        <Route path="*" element={<Navigate to="/silabo/login" />} />
      </Route>
    </Routes>
  );
};
