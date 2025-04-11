import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: 'transparent',
        border: '1px solid',
        borderColor: isDarkMode ? '#FFFFFF' : '#1D1D1D',
        color: isDarkMode ? '#FFFFFF' : '#1D1D1D',
        padding: '8px 16px',
        borderRadius: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.875rem',
        transition: 'all 0.2s ease'
      }}
    >
      {isDarkMode ? (
        <>
          <span role="img" aria-label="sun">☀️</span>
          Light
        </>
      ) : (
        <>
          <span role="img" aria-label="moon">🌙</span>
          Dark
        </>
      )}
    </button>
  );
};

export default ThemeToggle; 