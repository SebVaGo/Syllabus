import { Box, IconButton, Typography, Button } from '@mui/material';
import { CloudUploadOutlined } from '@mui/icons-material';
import useFileUpload from '../../hooks/useFileUpload';
import { useState } from 'react';
import CustomModal from '../../utils/CustomModal';

const FileUploadBox = ({ backendUrl }) => {
  const { selectedFile, handleFileChange, uploadFile, uploading, error, successMessage } = useFileUpload(backendUrl);
  const [openModal, setOpenModal] = useState(false); // Estado para controlar la apertura del modal
  const [isDragging, setIsDragging] = useState(false); // Estado para manejar el arrastre de archivos

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleUploadFile = async () => {
    await uploadFile();
    handleOpenModal();
  };

  // Funciones para manejo del drag and drop
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true); // Cambiamos el estado a "dragging" cuando se arrastra un archivo
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false); // Regresamos el estado cuando el archivo sale de la zona de arrastre
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false); // Reseteamos el estado de "dragging"
    
    // Verificamos si hay archivos arrastrados
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange({ target: { files: e.dataTransfer.files } });
      e.dataTransfer.clearData(); // Limpiamos los archivos arrastrados
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: '300px',
        backgroundColor: isDragging ? '#f0f0f0' : '#FFE8E5',
        borderRadius: 3,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
        border: isDragging ? '2px dashed #AE675B' : '2px dashed transparent', // Cambiamos el borde cuando se arrastra un archivo
      }}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <IconButton sx={{ fontSize: '4rem', color: '#AE675B' }}>
        <CloudUploadOutlined fontSize="inherit" />
      </IconButton>
      
      <Typography variant="h6" sx={{ color: '#AE675B', mt: 2 }}>
        {selectedFile ? selectedFile.name : 'Arrastre su archivo aquí o selecciónelo'}
      </Typography>

      <input
        type="file"
        accept=".doc, .docx, .pdf"
        style={{ display: 'none' }}
        id="file-input"
        onChange={handleFileChange}
      />
      <label htmlFor="file-input">
        <Button
          variant="outlined"
          component="span"
          sx={{ mt: 2, color: '#AE675B', borderColor: '#AE675B' }}
        >
          Seleccionar Archivo
        </Button>
      </label>

      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: '#AE675B',
          color: '#fff',
          padding: '10px 20px',
          fontSize: '1rem',
          textTransform: 'none',
          borderRadius: 2,
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: '#8C5448',
          },
        }}
        onClick={handleUploadFile}
        disabled={uploading}
      >
        {uploading ? 'Subiendo...' : 'Subir Archivo'}
      </Button>

      {/* Usar el modal personalizado para mostrar mensajes */}
      <CustomModal
        open={openModal}
        handleClose={handleCloseModal}
        title={successMessage ? '¡Éxito!' : 'Error'}
        message={successMessage ? successMessage : error}
      />
    </Box>
  );
};

export default FileUploadBox;
