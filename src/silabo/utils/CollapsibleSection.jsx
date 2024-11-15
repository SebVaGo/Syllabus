// src/utils/CollapsibleSection.js
import React from 'react';
import { IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const CollapsibleSection = ({ title, expanded, toggleExpand, children }) => (
    <section
        style={{
            margin: '10px auto',
            padding: '10px',
            borderRadius: '12px',
            backgroundColor: 'rgba(113, 56, 77, 0.3)', // Fondo más suave para unificar diseño
            width: '85%',
        }}
    >
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
            }}
            onClick={toggleExpand}
        >
            <Typography variant="h6" sx={{ color: '#4a148c', fontWeight: 'bold' }}>
                {title}
            </Typography>
            <IconButton color="action">
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
        </div>
        {expanded && (
            <div style={{ marginTop: '10px' }}>
                {children}
            </div>
        )}
    </section>
);

export default CollapsibleSection;
