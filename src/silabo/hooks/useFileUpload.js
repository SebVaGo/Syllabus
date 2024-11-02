// src/silabo/hooks/useFileUpload.js
import { useDispatch, useSelector } from 'react-redux';
import { uploadFileToS3 } from '../actions/SilaboCargaThunks';
import { clearUploadMessages } from '../slices/silaboSlice';

const useFileUpload = () => {
  const dispatch = useDispatch();
  const { uploading, uploadError, uploadSuccess } = useSelector((state) => state.silabo);
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("useFileUpload: Archivo seleccionado -", file);

    if (file) {
      dispatch(uploadFileToS3(file));
    }
  };

  const clearMessages = () => {
    console.log("useFileUpload: Limpiando mensajes de estado...");
    dispatch(clearUploadMessages());
  };

  return {
    handleFileChange,
    uploading,
    uploadError,
    uploadSuccess,
    clearMessages,
  };
};

export default useFileUpload;
