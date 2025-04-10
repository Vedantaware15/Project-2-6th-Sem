import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { 
  Box, Button, IconButton, Drawer, Typography, List, ListItem, 
  ListItemButton, ListItemText, Divider, TextField, InputAdornment 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [entertainmentExpanded, setEntertainmentExpanded] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
    if (!open) {
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (event) => {
    if (event.key === 'Enter' && searchQuery.trim() !== '') {
      const queryToNavigate = searchQuery.trim();
      setDrawerOpen(false);
      setSearchQuery('');
      navigate(`/search?q=${encodeURIComponent(queryToNavigate)}`);
    }
  };

  const handleEntertainmentClick = () => {
    setEntertainmentExpanded(!entertainmentExpanded);
  };

  const menuItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'India', path: '/india', icon: <NewspaperIcon /> },
    { text: 'World', path: '/world', icon: <NewspaperIcon /> },
    { 
      text: 'Entertainment', 
      icon: <NewspaperIcon />, 
      subItems: [
        { text: 'Movies', path: '/entertainment/movies', icon: <NewspaperIcon /> },
        { text: 'TV Shows', path: '/entertainment/tv-shows', icon: <NewspaperIcon /> },
        { text: 'Gaming', path: '/entertainment/gaming', icon: <NewspaperIcon /> },
        { text: 'Celebrity', path: '/entertainment/celebrity', icon: <NewspaperIcon /> },
      ]
    },
    { text: 'Business', path: '/business', icon: <NewspaperIcon /> },
    { text: 'Sports', path: '/sports', icon: <NewspaperIcon /> },
    { text: 'Technology', path: '/technology', icon: <NewspaperIcon /> },
    { text: 'Health', path: '/health', icon: <NewspaperIcon /> },
  ];

  const renderMenuItems = (items) => (
    <List>
      {items.map((item, index) => (
        <div key={index}>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to={item.path || '#'} onClick={item.subItems ? handleEntertainmentClick : undefined}>
              <ListItemText primary={item.text} />
              {item.subItems && (entertainmentExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </ListItemButton>
          </ListItem>
          {item.subItems && entertainmentExpanded && renderMenuItems(item.subItems)}
        </div>
      ))}
    </List>
  );

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <Box sx={{ padding: '16px', borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search news, topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearchSubmit}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          size="small"
        />
      </Box>
      {renderMenuItems(menuItems)}
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          backgroundColor: '#1a1a2e',
          color: 'white',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="search"
            onClick={toggleDrawer(true)}
          >
            <SearchIcon />
          </IconButton>
        </Box>

        <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
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
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <StyledButton
            variant="outlined"
            startIcon={<PersonOutlineIcon sx={{ fontSize: '1rem' }} />}
            onClick={() => navigate('/login')}
          >
            Login
          </StyledButton>
          <StyledButton
            variant="contained"
            startIcon={<HowToRegIcon sx={{ fontSize: '1rem' }} />}
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </StyledButton>
        </Box>
      </Box>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Header; 