import { Box } from '@mui/material';
import ModuleTitle from './ModuleTitle';
import FileUploadBox from './FileUploadBox';
import NavigateButton from '../../utils/NavigateButton';
import useFetchBackendData from '../../hooks/useFetchBackendData';

const SubirSilabo = () => {
  const backendUrl = 'http://localhost:8080/api/instituciones';

  useFetchBackendData(backendUrl);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px',
      }}
    >
      <ModuleTitle />
      <FileUploadBox backendUrl={backendUrl} />
    </Box>
  );
};

export default SubirSilabo;
