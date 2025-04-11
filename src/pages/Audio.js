import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { audioData } from '../constants/mockData';

const Audio = () => {
  const { isDarkMode } = useTheme();

  return (
    <div style={{
      backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
      minHeight: '100vh',
      padding: '24px'
    }}>
      <div className="container">
        <h1 className="page-title">Audio</h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
          marginTop: '24px'
        }}>
          {audioData.map((audio, index) => (
            <div key={index} style={{
              backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%'
              }}>
                <img 
                  src={audio.image}
                  alt={audio.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: '#FFFFFF',
                  padding: '4px 8px',
                  fontSize: '0.75rem',
                  borderRadius: '2px'
                }}>
                  {audio.duration}
                </div>
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: isDarkMode ? '#FFFFFF' : '#1D1D1D'
                }}>
                  {audio.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: isDarkMode ? '#BBBBBB' : '#666666',
                  marginBottom: '12px'
                }}>
                  {audio.subtitle}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    fontSize: '0.8rem',
                    color: isDarkMode ? '#BBBBBB' : '#666666'
                  }}>
                    {audio.program}
                  </span>
                  <button style={{
                    backgroundColor: '#BB1919',
                    border: 'none',
                    color: '#FFFFFF',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}>
                    Listen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Audio; 