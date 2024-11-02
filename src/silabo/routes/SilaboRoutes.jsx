import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Add this line
import { SilaboLayout } from '../layout/SilaboLayout';
import { CrearSilabo } from '../pages/CrearSilabo';
import { SubirSilabo } from '../pages/SubirSilabo';
import { LoginForm } from '../pages/LoginForm';
import { ProtectedRoute } from '../hooks/ProtectedRoute';

export const SilaboRoutes = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.authSilabo.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<SilaboLayout />}>
        <Route
          path="crear-silabo"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} location={location}>
              <CrearSilabo />
            </ProtectedRoute>
          }
        />
        <Route
          path="subir-silabo"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} location={location}>
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
