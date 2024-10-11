import { Box, Typography, Button, IconButton } from '@mui/material';
import { CloudUploadOutlined, DeleteOutline } from '@mui/icons-material';
import useFileUpload from '../../hooks/useFileUpload'; // Importar el hook personalizado
import { useState } from 'react';
import CustomModal from '../../utils/CustomModal'; // Importar el modal personalizado

const FileUploadBox = ({ backendUrl }) => {
  const { selectedFile, handleFileChange, uploadFile, clearSelectedFile, uploading, error, successMessage } = useFileUpload(backendUrl);
  const [openModal, setOpenModal] = useState(false); // Estado para controlar la apertura del modal
  const [isDragging, setIsDragging] = useState(false);

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
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange({ target: { files: e.dataTransfer.files } });
      e.dataTransfer.clearData();
    }
  };

  // Función para eliminar el archivo seleccionado
  const handleDeleteFile = () => {
    clearSelectedFile(); // Llamamos a la función del hook para limpiar el archivo seleccionado
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        padding: '20px',
      }}
    >
      {/* Título del módulo */}

      {/* Cuadro de arrastrar y soltar archivos */}
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
          border: isDragging ? '2px dashed #AE675B' : '2px dashed transparent',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <CloudUploadOutlined sx={{ fontSize: '4rem', color: '#AE675B' }} />
        <Typography variant="h6" sx={{ color: '#AE675B', mt: 2 }}>
          {selectedFile ? selectedFile.name : 'Arrastre su archivo aquí'}
        </Typography>

        {/* Input para seleccionar archivo */}
        <input
          type="file"
          accept=".doc, .docx"
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

        {/* Botón para eliminar archivo si hay uno seleccionado */}
        {selectedFile && (
          <IconButton
            onClick={handleDeleteFile}
            sx={{ mt: 2, color: '#AE675B' }}
            aria-label="eliminar archivo"
          >
            <DeleteOutline fontSize="large" />
          </IconButton>
        )}
      </Box>

      {/* Botón para subir archivo */}
      <Button
        variant="contained"
        sx={{
          mt: 4,
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
        disabled={uploading || !selectedFile} // Deshabilitar si no hay archivo seleccionado
      >
        {uploading ? 'Subiendo...' : 'Subir Archivo'}
      </Button>

      {/* Modal personalizado para mostrar mensajes */}
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
