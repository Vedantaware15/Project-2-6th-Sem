import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { isDarkMode } = useTheme();

  return (
    <header style={{
      backgroundColor: isDarkMode ? '#1D1D1D' : '#FFFFFF',
      borderBottom: `1px solid ${isDarkMode ? '#333333' : '#DCDCDC'}`,
      padding: '1rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          textDecoration: 'none',
          color: isDarkMode ? '#FFFFFF' : '#1D1D1D',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          News Hub
        </Link>
        <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center'
        }}>
          <ThemeToggle />
          <Link to="/login">
            <button style={{
              backgroundColor: isDarkMode ? '#BB1919' : '#FFFFFF',
              border: `1px solid ${isDarkMode ? '#BB1919' : '#1D1D1D'}`,
              color: isDarkMode ? '#FFFFFF' : '#1D1D1D',
              padding: '8px 16px',
              borderRadius: '20px',
              cursor: 'pointer',
              textDecoration: 'none'
            }}>
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button style={{
              backgroundColor: isDarkMode ? '#FFFFFF' : '#BB1919',
              border: `1px solid ${isDarkMode ? '#FFFFFF' : '#BB1919'}`,
              color: isDarkMode ? '#1D1D1D' : '#FFFFFF',
              padding: '8px 16px',
              borderRadius: '20px',
              cursor: 'pointer',
              textDecoration: 'none'
            }}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 