// src/silabo/pages/SubirSilabo.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { CloudUploadOutlined, DeleteOutline } from '@mui/icons-material';
import { uploadFileToS3 } from '../../actions/SilaboCargaThunks';
import { clearUploadMessages } from '../../slices/silaboSlice';
import CustomModal from '../../utils/CustomModal';

const SubirSilabo = () => {
  const dispatch = useDispatch();
  const { uploading, uploadError, uploadSuccess } = useSelector((state) => state.silabo);

  const [selectedFile, setSelectedFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (uploadSuccess || uploadError) {
      setOpenModal(true);
    }
  }, [uploadSuccess, uploadError]);

  const handleCloseModal = () => {
    setOpenModal(false);
    dispatch(clearUploadMessages()); // Limpiar mensajes después de cerrar el modal
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file); // Guardar el archivo en el estado local
    }
  };

  const handleUploadFile = () => {
    if (selectedFile) {
      dispatch(uploadFileToS3(selectedFile)); // Despachar acción para subir el archivo
    }
  };

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
      setSelectedFile(e.dataTransfer.files[0]); // Guardar archivo en el estado local
      e.dataTransfer.clearData();
    }
  };

  const handleDeleteFile = () => {
    setSelectedFile(null); // Limpiar el archivo seleccionado
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
      <Typography variant="h3" sx={{ color: '#3E5060', fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
        Subir Sílabos
      </Typography>

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
          '&:hover': { transform: 'scale(1.05)' },
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

        <input
          type="file"
          accept=".doc, .docx"
          style={{ display: 'none' }}
          id="file-input"
          onChange={handleFileChange} // Guardar el archivo en el estado sin subirlo
        />
        <label htmlFor="file-input">
          <Button variant="outlined" component="span" sx={{ mt: 2, color: '#AE675B', borderColor: '#AE675B' }}>
            Seleccionar Archivo
          </Button>
        </label>

        {selectedFile && (
          <IconButton onClick={handleDeleteFile} sx={{ mt: 2, color: '#AE675B' }} aria-label="eliminar archivo">
            <DeleteOutline fontSize="large" />
          </IconButton>
        )}
      </Box>

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
          '&:hover': { backgroundColor: '#8C5448' },
        }}
        onClick={handleUploadFile} // Subir archivo al hacer clic
        disabled={uploading || !selectedFile} // Deshabilitar si no hay archivo seleccionado o si está subiendo
      >
        {uploading ? 'Subiendo...' : 'Subir Archivo'}
      </Button>

      <CustomModal
        open={openModal}
        handleClose={handleCloseModal}
        title={uploadSuccess ? '¡Éxito!' : 'Error'}
        message={uploadSuccess ? uploadSuccess : uploadError}
      />
    </Box>
  );
};

export default SubirSilabo;
