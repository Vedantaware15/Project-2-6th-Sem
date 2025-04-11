import React from 'react';

const SectionDivider = ({ title, isDark }) => {
  return (
    <div style={{ 
      borderBottom: '4px solid #BB1919',
      marginBottom: '30px',
      paddingBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <h2 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        color: isDark ? '#FFFFFF' : '#1D1D1D',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }}>
        {title}
        {title !== 'Top Stories' && (
          <span style={{
            fontSize: '1.25rem',
            color: '#BB1919'
          }}>›</span>
        )}
      </h2>
    </div>
  );
};

export default SectionDivider; 