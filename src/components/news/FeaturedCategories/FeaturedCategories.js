import React from 'react';
import SectionDivider from '../../layout/SectionDivider';
import FeaturedArticle from './FeaturedArticle';
import CategoryColumn from './CategoryColumn';

const FeaturedCategories = ({ 
  moviesNews, 
  techNews, 
  scienceNews, 
  healthNews, 
  cultureNews, 
  artsNews, 
  onStoryClick 
}) => {
  return (
    <div style={{ marginBottom: '40px' }}>
      <SectionDivider title="Featured Categories" />

      {/* Featured Articles Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '40px',
        marginBottom: '40px'
      }}>
        <FeaturedArticle article={moviesNews[0]} onStoryClick={onStoryClick} />
        <FeaturedArticle article={techNews[0]} onStoryClick={onStoryClick} />
      </div>

      {/* Categories Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
        borderTop: '1px solid #DCDCDC',
        paddingTop: '24px'
      }}>
        <CategoryColumn title="Science" articles={scienceNews} onStoryClick={onStoryClick} />
        <CategoryColumn title="Health" articles={healthNews} onStoryClick={onStoryClick} />
        <CategoryColumn title="Culture" articles={cultureNews} onStoryClick={onStoryClick} />
        <CategoryColumn title="Arts" articles={artsNews} onStoryClick={onStoryClick} />
      </div>
    </div>
  );
};

export default FeaturedCategories; 