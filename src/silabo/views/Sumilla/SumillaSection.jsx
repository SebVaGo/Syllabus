import React from 'react';
import Sumilla from './Sumilla';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const SumillaSection = ({ expanded, toggleExpand }) => (
    <section className="fondo unidad">
        {/* Aplica el onClick a toda la sección de .display */}
        <div className="display" onClick={() => toggleExpand('sumilla')}>
            <h2>Sumilla</h2>
            {/* IconButton para visualización del ícono */}
            <IconButton color="action">
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
        </div>
        {expanded && (
            <div className="cuerpo">
                <Sumilla />
            </div>
        )}
    </section>
);

export default SumillaSection;
