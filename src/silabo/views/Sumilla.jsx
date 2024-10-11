import React from 'react';
import '../styles/Formulario.css';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

export const Sumilla = () => {
    return(
        <ReactQuill style={{backgroundColor: 'white',
                            width: '90%',
                            borderRadius: '10px'
                            }}/>
    )
};

export default Sumilla;