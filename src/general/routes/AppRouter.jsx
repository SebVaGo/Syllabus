import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../../seguridad/routes/AuthRoutes';
import { CursosRoutes } from '../../cursos/routes/CursosRoutes';
import { SilaboRoutes } from '../../silabo/routes/SilaboRoutes';
import { CheckingAuth } from '../../seguridad/components/CheckingAuth';
import { useCheckAuth } from '../../seguridad/hooks/useCheckAuth';

export const AppRouter = () => {
  const status = useCheckAuth();

  console.log('Estado final de autenticación:', status);

  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return (
    <Routes>
        <Route path="/cursos/*" element={<CursosRoutes />} />
        <Route path="/silabo/*" element={<SilaboRoutes />} />
    </Routes>
  );
};
