// src/silabo/pages/SubirSilabo.jsx
import React from 'react';
import useFileUpload from '../../hooks/useFileUpload';

const SubirSilabo = () => {
  const { handleFileChange, uploading, uploadError, uploadSuccess, clearMessages } = useFileUpload();

  return (
    <div>
      <h2>Subir Sílabos</h2>
      <input type="file" onChange={handleFileChange} disabled={uploading} />
      {uploading && <p>Subiendo archivo...</p>}
      {uploadError && (
        <div style={{ color: 'red' }}>
          <p>{uploadError}</p>
          <button onClick={clearMessages}>Cerrar</button>
        </div>
      )}
      {uploadSuccess && (
        <div style={{ color: 'green' }}>
          <p>{uploadSuccess}</p>
          <button onClick={clearMessages}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default SubirSilabo;
