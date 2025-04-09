import { CircularProgress, Box, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      minHeight="200px"
    >
      <CircularProgress color="primary" size={60} />
      <Typography variant="h6" mt={2}>
        Loading news...
      </Typography>
    </Box>
  );
};

export default Loading;