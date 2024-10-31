import { Box, Typography, Button, Modal } from '@mui/material';

const CustomModal = ({ open, handleClose, message, title }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="custom-modal-title"
      aria-describedby="custom-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        {/* Título del modal */}
        <Typography id="custom-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        
        {/* Mensaje del modal */}
        <Typography id="custom-modal-description" sx={{ mt: 2 }}>
          {message}
        </Typography>

        {/* Botón de cierre */}
        <Button
          variant="contained"
          onClick={handleClose}
          sx={{ mt: 3, backgroundColor: '#AE675B', '&:hover': { backgroundColor: '#8C5448' } }}
        >
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
};

export default CustomModal;
