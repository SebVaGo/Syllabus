// src/utils/StyledTableContainer.js
import React from 'react';
import { TableContainer, Paper } from '@mui/material';

const StyledTableContainer = ({ children, backgroundColor = '#f3e5f5', padding = '20px' }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: '16px',
        backgroundColor: backgroundColor,
        padding: padding,
        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
        marginTop: '20px',
        border: '2px solid #d1c4e9', 
        overflow: 'hidden',
      }}
    >
      {children}
    </TableContainer>
  );
};

export default StyledTableContainer;
