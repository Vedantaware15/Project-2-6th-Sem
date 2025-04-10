import React from 'react';
import { Box, Button, TextField, Typography, Paper, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '2rem',
  maxWidth: '400px',
  width: '100%',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '0.8rem',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  width: '100%',
  marginTop: '1rem',
  transition: 'all 0.3s ease',
}));

const GoogleButton = styled(Button)(({ theme }) => ({
  padding: '0.8rem',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  width: '100%',
  marginTop: '1rem',
  backgroundColor: '#ffffff',
  color: '#757575',
  border: '1px solid #dadce0',
  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
  '&:hover': {
    backgroundColor: '#f8f9fa',
    boxShadow: '0 2px 4px rgba(0,0,0,0.12)',
  },
  '& .google-icon': {
    marginRight: '12px',
    width: '18px',
    height: '18px',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '1rem',
  '& .MuiOutlinedInput-root': {
    transition: 'all 0.3s ease',
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: '#1a1a2e',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1a1a2e',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#1a1a2e',
  },
}));

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  const handleGoogleLogin = () => {
    // Add Google login logic here
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 140px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
      }}
    >
      <StyledPaper elevation={3}>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            background: 'linear-gradient(45deg, #1a1a2e 30%, #0f3460 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 600,
            marginBottom: '1.5rem',
          }}
        >
          Welcome Back
        </Typography>
        <form onSubmit={handleLogin}>
          <StyledTextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            required
          />
          <StyledTextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            required
          />
          <StyledButton
            type="submit"
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #1a1a2e 30%, #0f3460 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #0f3460 30%, #1a1a2e 90%)',
              },
            }}
            startIcon={<LoginIcon />}
          >
            Login
          </StyledButton>
        </form>

        <Box sx={{ margin: '1rem 0' }}>
          <Divider>
            <Typography sx={{ color: '#666', padding: '0 1rem' }}>or</Typography>
          </Divider>
        </Box>

        <GoogleButton
          onClick={handleGoogleLogin}
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="google-icon"
          />
          Continue with Google
        </GoogleButton>

        <Typography
          sx={{
            textAlign: 'center',
            marginTop: '1.5rem',
            color: '#666',
          }}
        >
          Don't have an account?{' '}
          <Link
            to="/signup"
            style={{
              background: 'linear-gradient(45deg, #1a1a2e 30%, #0f3460 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Sign up
          </Link>
        </Typography>
      </StyledPaper>
    </Box>
  );
};

export default Login; 