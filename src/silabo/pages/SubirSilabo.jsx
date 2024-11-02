import DropSilabo from '../views/DropSilabo/DropSilabo';
import Sidebar from '../views/Sidebar';

import React from 'react';

export const SubirSilabo = () => {

  return (
    <div>
      <div className='division'>
        <Sidebar/>
        <DropSilabo/>
      </div>
    </div>
  );
};

export default SubirSilabo;
