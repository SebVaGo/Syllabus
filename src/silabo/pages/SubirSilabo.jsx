import DropSilabo from '../views/DropSilabo/DropSilabo';
import Sidebar from '../views/Sidebar';
import { useDispatch } from 'react-redux';
import { testCorsEndpoint } from '../actions/SilaboCargaThunks';
import React, { useEffect } from 'react';



export const SubirSilabo = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testCorsEndpoint());
  }, [dispatch]);

  return (
    <div>
            <h2>Prueba de CORS</h2>
            <p>Verifica la consola para la respuesta del endpoint de prueba.</p>
      <div className='division'>
        <Sidebar/>
        <DropSilabo/>
      </div>
    </div>
  );
};

export default SubirSilabo;
