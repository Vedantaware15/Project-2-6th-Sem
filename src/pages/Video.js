import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { videoData } from '../constants/mockData';

const Video = () => {
  const { isDarkMode } = useTheme();

  return (
    <div style={{
      backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
      minHeight: '100vh',
      padding: '24px'
    }}>
      <div className="container">
        <h1 className="page-title">Video</h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          marginTop: '24px'
        }}>
          {videoData.map((video, index) => (
            <div key={index} style={{
              backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              ':hover': {
                transform: 'scale(1.02)'
              }
            }}>
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%'
              }}>
                <img 
                  src={video.thumbnail}
                  alt={video.title}
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
                  {video.duration}
                </div>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: 0,
                    height: 0,
                    borderTop: '8px solid transparent',
                    borderLeft: '16px solid #FFFFFF',
                    borderBottom: '8px solid transparent',
                    marginLeft: '4px'
                  }} />
                </div>
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: isDarkMode ? '#FFFFFF' : '#1D1D1D'
                }}>
                  {video.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: isDarkMode ? '#BBBBBB' : '#666666'
                }}>
                  {video.views} views • {video.uploadedAt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video; 