import React from 'react';
import '../../styles/Formulario.css';
import '../../styles/Sumilla.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['clean'],
  ],
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'color', 'background',
  'align',
];

const Sumilla = ({ value }) => {
  return (
    <div className="quill-container">
      <ReactQuill
        modules={modules}
        formats={formats}
        value={value} // Muestra el valor de la sumilla recibido como prop
        readOnly={true} // Establece el modo solo lectura, puedes cambiar esto si deseas edición
        placeholder="Escribe aquí la sumilla del curso..."
        style={{
          backgroundColor: 'white',
          width: '100%',
          minHeight: '150px',
          borderRadius: '10px',
        }}
      />
    </div>
  );
};

export default Sumilla;
