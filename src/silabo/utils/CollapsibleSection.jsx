// src/components/CollapsibleSection.js
import React from 'react';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const CollapsibleSection = ({ title, expanded, toggleExpand, children }) => (
    <section className="fondo unidad">
        {/* Aplica el onClick a toda la sección de .display */}
        <div className="display" onClick={toggleExpand}>
            <h2>{title}</h2>
            {/* IconButton para visualización del ícono */}
            <IconButton color="action">
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
        </div>
        {expanded && (
            <div className="cuerpo">
                {children}
            </div>
        )}
    </section>
);

export default CollapsibleSection;
