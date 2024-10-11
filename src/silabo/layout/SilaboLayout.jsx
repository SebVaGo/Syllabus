import { Outlet } from 'react-router-dom';

export const SilaboLayout = () => {
    return (
        <div>
            {/* Diseño para el módulo de Silabo */}
            <Outlet /> {/* Aquí se renderizarán las rutas anidadas */}
        </div>
    );
};
