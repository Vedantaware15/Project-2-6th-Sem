import React from 'react';
import { getRelativeTime } from '../../../utils/timeUtils';

const FeaturedArticle = ({ article, onStoryClick }) => {
  if (!article) return null;

  return (
    <article 
      onClick={() => onStoryClick(article.url)}
      style={{
        cursor: 'pointer',
        transition: 'opacity 0.2s ease',
        ':hover': { opacity: 0.85 }
      }}
    >
      <img 
        src={article.urlToImage || 'https://via.placeholder.com/600x340?text=No+Image'}
        alt={article.title}
        style={{
          width: '100%',
          aspectRatio: '16/9',
          objectFit: 'cover',
          marginBottom: '16px'
        }}
      />
      <div style={{ padding: '0 4px' }}>
        <h3 style={{
          fontSize: '1.5rem',
          lineHeight: '1.2',
          fontWeight: '600',
          marginBottom: '12px',
          color: '#1D1D1D'
        }}>
          {article.title}
        </h3>
        <p style={{
          fontSize: '1rem',
          lineHeight: '1.5',
          color: '#4A4A4A',
          marginBottom: '16px'
        }}>
          {article.description}
        </p>
        <div style={{
          display: 'flex',
          gap: '12px',
          color: '#6B6B6B',
          fontSize: '0.875rem',
          alignItems: 'center'
        }}>
          <span>{article.source.name}</span>
          <span>•</span>
          <span>{getRelativeTime(article.publishedAt)}</span>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle; 