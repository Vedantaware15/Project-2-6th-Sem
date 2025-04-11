import React from 'react';
import { getRelativeTime } from '../../../utils/timeUtils';

const MainStory = ({ story, onStoryClick }) => {
  if (!story) return null;

  return (
    <div 
      onClick={() => onStoryClick(story.url)}
      style={{ 
        borderBottom: '1px solid #DCDCDC',
        paddingBottom: '20px',
        cursor: 'pointer',
        transition: 'opacity 0.2s ease',
        ':hover': {
          opacity: 0.85
        }
      }}
    >
      <img 
        src={story.urlToImage || 'https://via.placeholder.com/800x450?text=No+Image'} 
        alt={story.title}
        style={{
          width: '100%',
          aspectRatio: '16/9',
          objectFit: 'cover',
          marginBottom: '16px'
        }}
      />
      <h1 style={{ 
        fontSize: '2rem',
        lineHeight: '1.2',
        fontWeight: '600',
        marginBottom: '12px',
        color: '#1D1D1D'
      }}>
        {story.title}
      </h1>
      <p style={{ 
        fontSize: '1.1rem',
        lineHeight: '1.4',
        color: '#2F2F2F',
        marginBottom: '16px'
      }}>
        {story.description}
      </p>
      <div style={{ 
        display: 'flex',
        gap: '16px',
        color: '#6B6B6B',
        fontSize: '0.875rem'
      }}>
        <span>{story.source.name}</span>
        <span>•</span>
        <span>{getRelativeTime(story.publishedAt)}</span>
      </div>
    </div>
  );
};

export default MainStory; 