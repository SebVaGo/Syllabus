// src/components/SectionContainer.js
import React from 'react';
import { Paper } from '@mui/material';

const SectionContainer = ({ children, title, backgroundColor = 'rgba(113, 56, 77, 0.1)' }) => (
    <div
        elevation={3}
        sx={{
            padding: '20px',
            borderRadius: '20px',
            backgroundColor: backgroundColor,
            width: '0%',
            margin: '20px auto',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
    >
        {title && (
            <h2 style={{ color: '#4a148c', fontWeight: 'bold', marginBottom: '16px' }}>
                {title}
            </h2>
        )}
        {children}
    </div>
);

export default SectionContainer;
