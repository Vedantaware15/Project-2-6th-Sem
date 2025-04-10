import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  borderColor: 'rgba(255, 255, 255, 0.3)',
  '&:hover': {
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  margin: '0 4px',
  textTransform: 'none',
  borderRadius: '6px',
  padding: '4px 12px',
  fontSize: '0.8rem',
  minWidth: 'auto',
  transition: 'all 0.3s ease',
}));

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#1a1a2e',
        color: 'white',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      <h1 style={{
        fontWeight: 600,
        background: 'linear-gradient(45deg, #fff, #e0e0e0)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: 0,
        fontSize: '2rem',
        cursor: 'pointer',
      }}
      onClick={() => navigate('/')}
      >
        News Hub
      </h1>

      <Box sx={{ 
        position: 'absolute',
        right: '1.5rem',
        display: 'flex',
        gap: 1
      }}>
        <StyledButton
          variant="outlined"
          startIcon={<PersonOutlineIcon sx={{ fontSize: '1rem' }} />}
          onClick={() => navigate('/login')}
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }
          }}
        >
          Login
        </StyledButton>
        <StyledButton
          variant="contained"
          startIcon={<HowToRegIcon sx={{ fontSize: '1rem' }} />}
          onClick={() => navigate('/signup')}
          sx={{
            backgroundColor: '#0f3460',
            '&:hover': {
              backgroundColor: '#0a2647',
            }
          }}
        >
          Sign Up
        </StyledButton>
      </Box>
    </Box>
  );
};

export default Header; 