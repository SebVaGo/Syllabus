import React from 'react';
import '../styles/Formulario.css';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

export const EstrategiaD = () => {
    return(
        <ReactQuill style={{backgroundColor: 'white',
                            width: '90%',
                            borderRadius: '10px'
                            }}/>
    )
};

export default EstrategiaD;