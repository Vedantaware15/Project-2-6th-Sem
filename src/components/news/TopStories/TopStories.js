import React from 'react';
import MainStory from './MainStory';
import SecondaryStories from './SecondaryStories';
import SectionDivider from '../../layout/SectionDivider';

const TopStories = ({ articles, onStoryClick }) => {
  if (!articles || articles.length === 0) return null;

  // Separate main story and secondary stories
  const mainStory = articles[0];
  const secondaryStories = articles.slice(1, 5);

  return (
    <div>
      <SectionDivider title="Top Stories" />
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 300px',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <MainStory story={mainStory} onStoryClick={onStoryClick} />
        <SecondaryStories stories={secondaryStories} onStoryClick={onStoryClick} />
      </div>
    </div>
  );
};

export default TopStories; 