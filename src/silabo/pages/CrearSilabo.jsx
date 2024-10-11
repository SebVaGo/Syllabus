import React from 'react';
import Formulario from '../views/Formulario';
import Sidebar from '../views/Sidebar';
import '../styles/Root.css';

export const CrearSilabo = () => {
  return (
    <div>
      <div className='division'>
        <Sidebar/>
        <Formulario />
      </div>
    </div>
  );
};

export default CrearSilabo;
