// CompetenciasE.jsx
import React from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import '../styles/Formulario.css';

const CompetenciasE = ({ content, setContent }) => {
    return (
        <ReactQuill 
            value={content} 
            onChange={setContent} 
            style={{
                backgroundColor: 'white',
                width: '90%',
                borderRadius: '10px',
                margin: '0 auto', // Centrado
            }}
        />
    );
};

export default CompetenciasE;
