import React from 'react';
import '../styles/Sidebar.css';

export const Sidebar = () => {
    return(
        <nav className="sidebar"> 
            <ul className="lateral">
                <li><a href='#'>Crear Silabo</a></li>
                <li><a href='#'>Subir Silabo</a></li>
            </ul >
        </nav>
    )
};

export default Sidebar;