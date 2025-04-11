import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Live = () => {
  const { isDarkMode } = useTheme();

  const liveChannels = [
    {
      id: 1,
      title: 'News Hub News Channel',
      description: 'Watch our 24/7 live news coverage',
      viewers: '245K watching'
    },
    {
      id: 2,
      title: 'News Hub World Service',
      description: 'Global news coverage 24 hours a day',
      viewers: '182K watching'
    }
  ];

  return (
    <div style={{
      backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
      minHeight: '100vh',
      padding: '24px'
    }}>
      <div className="container">
        <h1 className="page-title">Live</h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginTop: '24px'
        }}>
          {liveChannels.map(channel => (
            <div key={channel.id} style={{
              backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid #DCDCDC'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#BB1919',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite'
                }} />
                <span style={{
                  color: '#BB1919',
                  fontWeight: '600'
                }}>LIVE</span>
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '12px',
                color: isDarkMode ? '#FFFFFF' : '#1D1D1D'
              }}>
                {channel.title}
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: isDarkMode ? '#BBBBBB' : '#666666',
                marginBottom: '16px'
              }}>
                {channel.description}
              </p>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px'
              }}>
                <span style={{
                  fontSize: '0.9rem',
                  color: isDarkMode ? '#BBBBBB' : '#666666'
                }}>
                  {channel.viewers}
                </span>
              </div>
              
              <button style={{
                backgroundColor: '#BB1919',
                color: '#FFFFFF',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
                width: '100%'
              }}>
                Watch Live
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(187, 25, 25, 0.4);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(187, 25, 25, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(187, 25, 25, 0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Live; 