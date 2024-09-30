import { Outlet } from 'react-router-dom';

export const SilaboLayout = () => {
    return (
        <div>
            {/* Diseño para el módulo de Silabo */}
            <h1>Módulo de Sílabo</h1>
            <Outlet /> {/* Aquí se renderizarán las rutas anidadas */}
        </div>
    );
};
