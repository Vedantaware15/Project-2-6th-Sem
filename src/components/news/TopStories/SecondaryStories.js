import React from 'react';
import { getRelativeTime } from '../../../utils/timeUtils';

const SecondaryStories = ({ stories, onStoryClick }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {stories.map((story, index) => (
        <article 
          key={index} 
          onClick={() => onStoryClick(story.url)}
          style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr',
            gap: '15px',
            borderBottom: index !== stories.length - 1 ? '1px solid #DCDCDC' : 'none',
            paddingBottom: '20px',
            cursor: 'pointer',
            transition: 'opacity 0.2s ease',
            ':hover': {
              opacity: 0.85
            }
          }}
        >
          <img 
            src={story.urlToImage || 'https://via.placeholder.com/120x120?text=No+Image'}
            alt={story.title}
            style={{ 
              width: '120px',
              height: '120px',
              objectFit: 'cover'
            }}
          />
          <div>
            <h3 style={{ 
              fontSize: '1rem',
              lineHeight: '1.3',
              fontWeight: '600',
              marginBottom: '8px',
              color: '#1D1D1D'
            }}>
              {story.title}
            </h3>
            <div style={{ 
              display: 'flex',
              gap: '12px',
              color: '#6B6B6B',
              fontSize: '0.875rem'
            }}>
              <span>{story.source.name}</span>
              <span>•</span>
              <span>{getRelativeTime(story.publishedAt)}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default SecondaryStories; 