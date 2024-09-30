import { Navigate, Route, Routes } from 'react-router-dom';
// Aquí deberías importar tus componentes de Login y Registro
// import { LoginPage, RegisterPage } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
      {/* Rutas de autenticación */}
      <Route path="login" element={<div>Login Page</div>} />
      <Route path="register" element={<div>Register Page</div>} />

      {/* Redirección por defecto */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
