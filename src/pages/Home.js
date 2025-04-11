import React, { useState, useEffect } from 'react';
import { fetchNews } from '../utils/api';
import TopStories from '../components/news/TopStories/TopStories';
import FeaturedCategories from '../components/news/FeaturedCategories/FeaturedCategories';
import Interviews from '../components/news/Interviews/Interviews';
import { useTheme } from '../context/ThemeContext';
import { videoData, audioData, discoverMoreItems } from '../constants/mockData';
import './../App.css';

//parth jadhav is npc 

const Home = () => {
  const { isDarkMode } = useTheme();
  const [articles, setArticles] = useState([]);
  const [moviesNews, setMoviesNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [travelNews, setTravelNews] = useState([]);
  const [additionalTravelNews, setAdditionalTravelNews] = useState([]);
  const [sustainableCitiesNews, setSustainableCitiesNews] = useState([]);
  const [usCanadaNews, setUsCanadaNews] = useState([]);
  const [worldNews, setWorldNews] = useState([]);
  const [sportNews, setSportNews] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);
  const [scienceNews, setScienceNews] = useState([]);
  const [healthNews, setHealthNews] = useState([]);
  const [cultureNews, setCultureNews] = useState([]);
  const [artsNews, setArtsNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const [currentAudioSlide, setCurrentAudioSlide] = useState(0);
  const [currentDiscoverSlide, setCurrentDiscoverSlide] = useState(0);

  useEffect(() => {
    const fetchAllNews = async () => {
    try {
      setLoading(true);
        
        const [
          generalNews,
          movies,
          tech,
          interviewsData,
          travel,
          additionalTravel,
          sustainable,
          usCanada,
          world,
          sport,
          business,
          science,
          health,
          culture,
          arts
        ] = await Promise.all([
          fetchNews.topHeadlines(),
          fetchNews.entertainment(),
          fetchNews.technology(),
          fetchNews.interviews(),
          fetchNews.travel(),
          fetchNews.topicNews('travel+destination+guide'),
          fetchNews.sustainableCities(),
          fetchNews.categoryNews('general'),
          fetchNews.categoryNews('world'),
          fetchNews.categoryNews('sports'),
          fetchNews.categoryNews('business'),
          fetchNews.science(),
          fetchNews.health(),
          fetchNews.culture(),
          fetchNews.arts()
        ]);

        console.log('Science News:', science.articles); // Debug log
        console.log('Health News:', health.articles); // Debug log
        console.log('Culture News:', culture.articles); // Debug log
        console.log('Arts News:', arts.articles); // Debug log
        
        setArticles(generalNews.articles);
        setMoviesNews(movies.articles);
        setTechNews(tech.articles);
        setInterviews(interviewsData.articles);
        setTravelNews(travel.articles);
        setAdditionalTravelNews(additionalTravel.articles);
        setSustainableCitiesNews(sustainable.articles);
        setUsCanadaNews(usCanada.articles);
        setWorldNews(world.articles);
        setSportNews(sport.articles);
        setBusinessNews(business.articles);
        setScienceNews(science.articles);
        setHealthNews(health.articles);
        setCultureNews(culture.articles);
        setArtsNews(arts.articles);
      } catch (err) {
        console.error('Error fetching news:', err);
        alert('We are experiencing high traffic. Some news sections may be temporarily unavailable. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllNews();
  }, []);

  const handleStoryClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePrevSlide = () => {
    setCurrentVideoSlide(prev => {
      const newIndex = prev - 1;
      return newIndex < 0 ? videoData.length - 4 : newIndex;
    });
  };

  const handleNextSlide = () => {
    setCurrentVideoSlide(prev => {
      const newIndex = prev + 1;
      return newIndex > videoData.length - 4 ? 0 : newIndex;
    });
  };

  const handlePrevAudioSlide = () => {
    setCurrentAudioSlide(prev => {
      const newIndex = prev - 1;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  const handleNextAudioSlide = () => {
    setCurrentAudioSlide(prev => {
      const maxSlide = Math.max(0, audioData.length - 6);
      const newIndex = prev + 1;
      return newIndex > maxSlide ? maxSlide : newIndex;
    });
  };

  const handleNextDiscoverSlide = () => {
    setCurrentDiscoverSlide(prev => {
      const newIndex = prev + 1;
      return newIndex > discoverMoreItems.length - 3 ? 0 : newIndex;
    });
  };

  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) {
      return 'just now';
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    }
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays}d ago`;
    }
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Define theme-aware styles
  const styles = {
    container: {
      backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
      minHeight: '100vh',
      color: isDarkMode ? '#FFFFFF' : '#1D1D1D'
    },
    header: {
          display: 'flex',
          alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 0',
      borderBottom: `1px solid ${isDarkMode ? '#333333' : '#DCDCDC'}`
    },
    sectionTitle: {
            fontSize: '1.25rem',
            fontWeight: '600',
      color: isDarkMode ? '#FFFFFF' : '#1D1D1D',
      marginBottom: '16px',
      paddingBottom: '8px',
      borderBottom: `2px solid ${isDarkMode ? '#BB1919' : '#BB1919'}`
    },
    article: {
      backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
      border: `1px solid ${isDarkMode ? '#333333' : '#DCDCDC'}`,
      color: isDarkMode ? '#FFFFFF' : '#1D1D1D',
              cursor: 'pointer',
      padding: '16px',
      marginBottom: '16px',
      transition: 'all 0.2s ease'
    },
    articleTitle: {
      fontSize: '0.95rem',
              fontWeight: '600',
      color: isDarkMode ? '#FFFFFF' : '#1D1D1D',
      marginBottom: '8px',
      lineHeight: '1.3'
    },
    articleMeta: {
              display: 'flex',
      gap: '8px',
      color: isDarkMode ? '#BBBBBB' : '#6B6B6B',
      fontSize: '0.8rem'
    },
    articleDescription: {
      fontSize: '0.9rem',
      color: isDarkMode ? '#CCCCCC' : '#4A4A4A',
      marginBottom: '12px',
      lineHeight: '1.4'
    },
    button: {
      backgroundColor: isDarkMode ? '#BB1919' : '#FFFFFF',
      border: `1px solid ${isDarkMode ? '#BB1919' : '#1D1D1D'}`,
      color: isDarkMode ? '#FFFFFF' : '#1D1D1D',
      padding: '8px 16px',
      borderRadius: '20px',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }
  };

  if (loading) return <div className="loading">Loading news...</div>;

  return (
    <div style={styles.container}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
        <div style={styles.header}>
          <h1 style={{ color: isDarkMode ? '#FFFFFF' : '#1D1D1D' }}>News Hub</h1>
          </div>

        {/* Top Stories Section */}
        <TopStories articles={articles} onStoryClick={handleStoryClick} />
        
        {/* Featured Categories Section */}
        <FeaturedCategories 
          moviesNews={moviesNews}
          techNews={techNews}
          scienceNews={scienceNews}
          healthNews={healthNews}
          cultureNews={cultureNews}
          artsNews={artsNews}
          onStoryClick={handleStoryClick}
        />

        {/* Second News Categories Grid Section */}
        <div style={{ maxWidth: '1100px', margin: '40px auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {/* Science News */}
          <div>
            <h3 style={styles.sectionTitle}>
              Science
            </h3>
            {scienceNews.slice(0, 3).map((article, index) => (
              <article 
                key={index} 
                onClick={() => handleStoryClick(article.url)}
                style={styles.article}
                onMouseEnter={(e) => e.currentTarget.style.color = '#BB1919'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#222222'}
              >
                {index === 0 && (
                  <img 
                    src={article.urlToImage || 'https://via.placeholder.com/400x225?text=Science+News'}
                    alt={article.title}
                  style={{ 
                      width: '100%',
                      aspectRatio: '16/9',
                      objectFit: 'cover',
                      marginBottom: '12px'
                    }}
                  />
                )}
                <h4 style={styles.articleTitle}>
                  {article.title}
                </h4>
                <div style={styles.articleMeta}>
                  <span>{getRelativeTime(article.publishedAt)}</span>
                </div>
              </article>
            ))}
        </div>

          {/* Health News */}
          <div>
            <h3 style={styles.sectionTitle}>
              Health
            </h3>
            {healthNews.slice(0, 3).map((article, index) => (
            <article 
                key={index}
                onClick={() => handleStoryClick(article.url)}
                style={styles.article}
                onMouseEnter={(e) => e.currentTarget.style.color = '#BB1919'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#222222'}
              >
                {index === 0 && (
                  <img 
                    src={article.urlToImage || 'https://via.placeholder.com/400x225?text=Health+News'}
                    alt={article.title}
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  objectFit: 'cover',
                  marginBottom: '12px'
                }}
              />
                )}
                <h4 style={styles.articleTitle}>
                  {article.title}
              </h4>
                <div style={styles.articleMeta}>
                  <span>{getRelativeTime(article.publishedAt)}</span>
              </div>
            </article>
            ))}
          </div>

          {/* Culture News */}
          <div>
            <h3 style={styles.sectionTitle}>
              Culture
            </h3>
            {cultureNews.slice(0, 3).map((article, index) => (
            <article 
                key={index}
                onClick={() => handleStoryClick(article.url)}
                style={styles.article}
                onMouseEnter={(e) => e.currentTarget.style.color = '#BB1919'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#222222'}
              >
                {index === 0 && (
                  <img 
                    src={article.urlToImage || 'https://via.placeholder.com/400x225?text=Culture+News'}
                    alt={article.title}
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  objectFit: 'cover',
                  marginBottom: '12px'
                }}
              />
                )}
                <h4 style={styles.articleTitle}>
                  {article.title}
              </h4>
                <div style={styles.articleMeta}>
                  <span>{getRelativeTime(article.publishedAt)}</span>
              </div>
            </article>
            ))}
        </div>

          {/* Arts News */}
          <div>
            <h3 style={styles.sectionTitle}>
              Arts
            </h3>
            {artsNews.slice(0, 3).map((article, index) => (
                <article 
                key={index}
                onClick={() => handleStoryClick(article.url)}
                style={styles.article}
                onMouseEnter={(e) => e.currentTarget.style.color = '#BB1919'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#222222'}
              >
                {index === 0 && (
                  <img 
                    src={article.urlToImage || 'https://via.placeholder.com/400x225?text=Arts+News'}
                    alt={article.title}
                        style={{
                          width: '100%',
                      aspectRatio: '16/9',
                          objectFit: 'cover',
                      marginBottom: '12px'
                    }}
                  />
                )}
                <h4 style={styles.articleTitle}>
                  {article.title}
                </h4>
                <div style={styles.articleMeta}>
                  <span>{getRelativeTime(article.publishedAt)}</span>
                    </div>
              </article>
            ))}
          </div>
        </div>

        {/* Interviews Section */}
        <Interviews interviews={interviews} onStoryClick={handleStoryClick} />

        {/* Podcast Section */}
        <div style={{
          backgroundColor: '#1D1D1D',
          margin: '40px -20px 0',
          padding: '30px 20px'
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '30px',
              backgroundColor: '#2D2D2D',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              {/* Podcast Info */}
              <div style={{ padding: '30px' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  marginBottom: '12px'
                }}>
                  Higher US tariffs on hold but China trade war grows
                </h2>
                <p style={{
                  fontSize: '1rem',
                  color: '#CCCCCC',
                  marginBottom: '20px'
                }}>
                  President Trump has increased tariffs on Chinese goods to 125%
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  marginTop: '20px'
                }}>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#FFFFFF',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '24px',
                    cursor: 'pointer'
                  }}>
                    <span style={{
                      width: '0',
                      height: '0',
                      borderTop: '8px solid transparent',
                      borderLeft: '16px solid #000',
                      borderBottom: '8px solid transparent'
                    }}></span>
                    29 mins
                  </button>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'transparent',
                    border: '1px solid #FFFFFF',
                    padding: '12px 24px',
                    borderRadius: '24px',
                    color: '#FFFFFF',
                    cursor: 'pointer'
                  }}>
                    Save
                  </button>
                </div>
              </div>
              {/* Podcast Image */}
              <div style={{
                backgroundColor: '#BB1919',
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '200px',
                  height: '200px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: '#BB1919',
                    textAlign: 'center'
                  }}>
                    GLOBAL<br />NEWS<br />PODCAST
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Categories Grid Section */}
        <div style={{ maxWidth: '1100px', margin: '40px auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {/* US & Canada News */}
          <div>
            <h3 style={styles.sectionTitle}>
              US & Canada
                  </h3>
            {usCanadaNews.slice(0, 3).map((article, index) => (
              <article 
                key={index}
                onClick={() => handleStoryClick(article.url)}
                style={styles.article}
                onMouseEnter={(e) => e.currentTarget.style.color = '#BB1919'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#222222'}
                >
                  {index === 0 && (
                    <img 
                    src={article.urlToImage || 'https://via.placeholder.com/400x225?text=News'}
                      alt={article.title}
                      style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        objectFit: 'cover',
                        marginBottom: '12px'
                      }}
                    />
                  )}
                <h4 style={styles.articleTitle}>
                    {article.title}
                  </h4>
                <div style={styles.articleMeta}>
                    <span>{getRelativeTime(article.publishedAt)}</span>
                  </div>
                </article>
              ))}
            </div>

          {/* World News */}
          <div>
            <h3 style={styles.sectionTitle}>
              World
              </h3>
            {worldNews.slice(0, 3).map((article, index) => (
                <article 
                  key={index}
                  onClick={() => handleStoryClick(article.url)}
                style={styles.article}
                onMouseEnter={(e) => e.currentTarget.style.color = '#BB1919'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#222222'}
                >
                  {index === 0 && (
                    <img 
                    src={article.urlToImage || 'https://via.placeholder.com/400x225?text=News'}
                      alt={article.title}
                      style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        objectFit: 'cover',
                        marginBottom: '12px'
                      }}
                    />
                  )}
                <h4 style={styles.articleTitle}>
                    {article.title}
                  </h4>
                <div style={styles.articleMeta}>
                    <span>{getRelativeTime(article.publishedAt)}</span>
                  </div>
                </article>
              ))}
            </div>

          {/* Sport News */}
          <div>
            <h3 style={styles.sectionTitle}>
              Sport
              </h3>
            {sportNews.slice(0, 3).map((article, index) => (
                <article 
                    key={index}
                  onClick={() => handleStoryClick(article.url)}
                style={styles.article}
                onMouseEnter={(e) => e.currentTarget.style.color = '#BB1919'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#222222'}
                >
                  {index === 0 && (
                    <img 
                    src={article.urlToImage || 'https://via.placeholder.com/400x225?text=News'}
                      alt={article.title}
                      style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        objectFit: 'cover',
                        marginBottom: '12px'
                      }}
                    />
                  )}
                <h4 style={styles.articleTitle}>
                    {article.title}
                  </h4>
                <div style={styles.articleMeta}>
                    <span>{getRelativeTime(article.publishedAt)}</span>
                  </div>
                </article>
              ))}
            </div>

          {/* Business News */}
            <div>
            <h3 style={styles.sectionTitle}>
              Business
              </h3>
            {businessNews.slice(0, 3).map((article, index) => (
                <article 
                  key={index}
                  onClick={() => handleStoryClick(article.url)}
                style={styles.article}
                onMouseEnter={(e) => e.currentTarget.style.color = '#BB1919'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#222222'}
                >
                  {index === 0 && (
                    <img 
                    src={article.urlToImage || 'https://via.placeholder.com/400x225?text=News'}
                      alt={article.title}
                      style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        objectFit: 'cover',
                        marginBottom: '12px'
                      }}
                    />
                  )}
                <h4 style={styles.articleTitle}>
                    {article.title}
                  </h4>
                <div style={styles.articleMeta}>
                    <span>{getRelativeTime(article.publishedAt)}</span>
                  </div>
                </article>
              ))}
          </div>
        </div>

        {/* Travel Section */}
        <div style={{ maxWidth: '1100px', margin: '40px auto' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
            gap: '8px',
            marginBottom: '20px',
            borderBottom: '1px solid #DCDCDC',
            paddingBottom: '8px'
          }}>
            <h2 style={styles.sectionTitle}>
              Travel
              <span style={{
                fontSize: '1.25rem',
                color: '#BB1919'
              }}>›</span>
              </h2>
            </div>

          {travelNews && travelNews[0] && (
            <article style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: '24px',
              cursor: 'pointer',
              backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
              padding: '24px',
              borderRadius: '8px'
            }}
            onClick={() => handleStoryClick(travelNews[0].url)}>
              <div style={{ position: 'relative' }}>
                <img 
                  src={travelNews[0].urlToImage || 'https://via.placeholder.com/800x450?text=Travel'}
                  alt={travelNews[0].title}
                        style={{
                          width: '100%',
                          aspectRatio: '16/9',
                          objectFit: 'cover'
                        }}
                      />
                      </div>
                    <div style={{
                      display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '16px'
              }}>
                  <h3 style={{
                  fontSize: '1.75rem',
                    fontWeight: '600',
                  lineHeight: '1.2',
                  color: isDarkMode ? '#FFFFFF' : '#1D1D1D'
                  }}>
                  {travelNews[0].title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                  color: isDarkMode ? '#CCCCCC' : '#4A4A4A',
                  lineHeight: '1.5'
                  }}>
                  {travelNews[0].description}
                  </p>
                  <button style={{
                  width: 'fit-content',
                    backgroundColor: '#FFFFFF',
                  border: '1px solid #1D1D1D',
                    padding: '8px 16px',
                  fontSize: '0.875rem',
                    cursor: 'pointer',
                  transition: 'all 0.2s ease',
                    ':hover': {
                    backgroundColor: '#1D1D1D',
                    color: '#FFFFFF'
                    }
                  }}>
                    See more
                  </button>
              </div>
            </article>
          )}
        </div>

        {/* Sustainable Cities Section */}
        <div style={{ maxWidth: '1100px', margin: '40px auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px'
          }}>
            <h2 style={styles.sectionTitle}>
              Sustainable Cities
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            {sustainableCitiesNews.map((article, index) => (
              <article 
                key={index}
                onClick={() => handleStoryClick(article.url)}
                style={{
                  ...styles.article,
                  backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF'
                }}
              >
                <img 
                  src={article.urlToImage || `https://via.placeholder.com/400x225?text=Sustainable+City+${index + 1}`}
                  alt={article.title}
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    objectFit: 'cover',
                    marginBottom: '12px'
                  }}
                />
                <h3 style={styles.articleTitle}>
                  {article.title}
                </h3>
                <p style={styles.articleDescription}>
                  {article.description}
                </p>
                <div style={styles.articleMeta}>
                  <span>{getRelativeTime(article.publishedAt)}</span>
                  <span>•</span>
                  <span>{article.source.name}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Latest Audio Section */}
        <div style={{ maxWidth: '1100px', margin: '40px auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px'
          }}>
            <h2 style={styles.sectionTitle}>
              Latest Audio
              <span style={{
                fontSize: '1.25rem',
                color: '#BB1919'
              }}>›</span>
            </h2>
          </div>

          <div style={{
            display: 'flex',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}>
            {audioData.map((audio, index) => (
              <div key={index} style={{
                flex: '0 0 auto',
                width: '200px',
                marginRight: '20px',
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  backgroundColor: '#F5F5F5'
                }}>
                  <img 
                    src={audio.image}
                    alt={audio.title}
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
                    {audio.duration}
                  </div>
                </div>
                <div style={{ padding: '16px' }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '8px',
                    color: isDarkMode ? '#FFFFFF' : '#1D1D1D'
                }}>
                    {audio.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                    color: isDarkMode ? '#BBBBBB' : '#666666',
                    marginBottom: '12px'
                }}>
                    {audio.subtitle}
                </p>
                <div style={{
                  display: 'flex',
                    justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                    <span style={{
                      fontSize: '0.8rem',
                      color: isDarkMode ? '#BBBBBB' : '#666666'
                    }}>
                      {audio.program}
                    </span>
                    <button style={{
                      backgroundColor: 'transparent',
                      border: '1px solid #DCDCDC',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}>
                      Listen
                    </button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discover More Section */}
        <div style={{ marginTop: '40px' }}>
          {/* Add DiscoverMore component here */}
        </div>

        {/* Footer */}
        <footer>
          {/* Top Navigation */}
          <div style={{
            backgroundColor: '#1D1D1D',
            padding: '16px 0'
          }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
              <nav>
                <ul style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  alignItems: 'center'
                }}>
                  {['Home', 'News', 'Sport', 'Business', 'Innovation', 'Culture', 'Arts', 'Travel', 'Earth', 'Audio', 'Video', 'Live', 'Weather', 'News Hub Shop', 'BritBox'].map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                      <a href="#" style={{ 
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        fontSize: '14px',
                        ':hover': { textDecoration: 'underline' }
                      }}>
                        {item}
                      </a>
                      {index < 14 && (
                        <span style={{ 
                          color: '#FFFFFF',
                          margin: '0 8px',
                          opacity: 0.5
                        }}>|</span>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Footer Content */}
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 20px' }}>
            {/* Language Selector */}
            <div style={{ marginBottom: '24px' }}>
              <select 
                style={{ 
                  padding: '8px 12px',
                  backgroundColor: '#F2F2F2',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '14px',
                  color: '#1D1D1D',
                  cursor: 'pointer',
                  minWidth: '200px'
                }}
              >
                <option>News Hub in other languages</option>
              </select>
            </div>

            {/* Social Links */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px', color: '#1D1D1D', marginRight: '8px' }}>
                  Follow News Hub on:
                </span>
                <a href="#" style={{ color: '#1D1D1D', textDecoration: 'none', fontSize: '14px' }}>X</a>
                <a href="#" style={{ color: '#1D1D1D', textDecoration: 'none', fontSize: '14px' }}>Facebook</a>
                <a href="#" style={{ color: '#1D1D1D', textDecoration: 'none', fontSize: '14px' }}>Instagram</a>
                <a href="#" style={{ color: '#1D1D1D', textDecoration: 'none', fontSize: '14px' }}>TikTok</a>
                <a href="#" style={{ color: '#1D1D1D', textDecoration: 'none', fontSize: '14px' }}>LinkedIn</a>
                <a href="#" style={{ color: '#1D1D1D', textDecoration: 'none', fontSize: '14px' }}>YouTube</a>
              </div>
            </div>

            {/* Footer Links */}
            <div style={{ 
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px'
            }}>
              {[
                'Terms of Use',
                'About News Hub',
                'Privacy Policy',
                'Cookies',
                'Accessibility Help',
                'Contact News Hub',
                'Advertise with us',
                'Do not share or sell my info',
                'Contact technical support'
              ].map((link, index, array) => (
                <span key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <a 
                    href="#"
                    style={{ 
                      color: '#5A5A5A',
                      textDecoration: 'none',
                      fontSize: '14px',
                      ':hover': { textDecoration: 'underline' }
                    }}
                  >
                    {link}
                  </a>
                  {index < array.length - 1 && (
                    <span style={{ 
                      color: '#5A5A5A',
                      margin: '0 8px',
                      fontSize: '14px'
                    }}>•</span>
                  )}
                </span>
              ))}
            </div>

            {/* Copyright */}
            <p style={{ 
              fontSize: '14px',
              color: '#5A5A5A',
              margin: 0
            }}>
              Copyright © 2024 News Hub. All rights reserved. News Hub is not responsible for the content of external sites.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;