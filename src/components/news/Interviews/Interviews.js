import React from 'react';
import SectionDivider from '../../layout/SectionDivider';

const Interviews = ({ interviews, onStoryClick }) => {
  if (!interviews || interviews.length === 0) return null;

  return (
    <>
      <SectionDivider title="Interviews" />
      
      <div style={{ 
        backgroundColor: '#1D1D1D',
        padding: '30px 0',
        margin: '0 -20px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '20px'
          }}>
            <article 
              onClick={() => onStoryClick(interviews[0]?.url)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr) 2fr',
                gap: '15px',
                alignItems: 'center',
                backgroundColor: '#000000',
                padding: '20px',
                borderRadius: '4px',
                transition: 'transform 0.2s ease',
                ':hover': {
                  transform: 'scale(1.01)'
                }
              }}
            >
              {/* Multiple images */}
              {interviews.slice(0, 3).map((interview, index) => (
                <div key={index} style={{
                  height: '200px',
                  position: 'relative',
                  backgroundColor: '#4A0082',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={interview.urlToImage || 'https://via.placeholder.com/200x200?text=No+Image'}
                    alt={interview.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: '0.8',
                      mixBlendMode: 'overlay'
                    }}
                  />
                </div>
              ))}

              {/* Text Content */}
              <div style={{ padding: '0 20px' }}>
                <h3 style={{ 
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  lineHeight: '1.2'
                }}>
                  {interviews[0]?.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#CCCCCC',
                  marginBottom: '16px',
                  lineHeight: '1.4'
                }}>
                  {interviews[0]?.description}
                </p>
                <button style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #FFFFFF',
                  color: '#FFFFFF',
                  padding: '8px 16px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                  ':hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}>
                  See more
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interviews; 