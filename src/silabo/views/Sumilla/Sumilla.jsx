import React from 'react';
import '../../styles/Formulario.css';
import '../../styles/Sumilla.css'; // Importa aquí tu nuevo archivo CSS
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

export const Sumilla = () => {
  return (
    <div className="quill-container">
      <ReactQuill
        modules={modules}
        formats={formats}
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
