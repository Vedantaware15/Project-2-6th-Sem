import React from 'react';
import { getRelativeTime } from '../../../utils/timeUtils';

const CategoryColumn = ({ title, articles, onStoryClick }) => {
  return (
    <div>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#1D1D1D',
        marginBottom: '16px',
        paddingBottom: '8px',
        borderBottom: '2px solid #BB1919'
      }}>
        {title}
      </h3>
      {articles.slice(0, 3).map((article, index) => (
        <article 
          key={index}
          onClick={() => onStoryClick(article.url)}
          style={{ 
            cursor: 'pointer',
            borderBottom: index < 2 ? '1px solid #DCDCDC' : 'none',
            paddingBottom: '16px',
            marginBottom: '16px',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#BB1919'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#222222'}
        >
          <h4 style={{
            fontSize: '0.95rem',
            fontWeight: '600',
            color: 'inherit',
            marginBottom: '8px',
            lineHeight: '1.3'
          }}>
            {article.title}
          </h4>
          <div style={{
            display: 'flex',
            gap: '8px',
            color: '#6B6B6B',
            fontSize: '0.8rem'
          }}>
            <span>{getRelativeTime(article.publishedAt)}</span>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CategoryColumn; 