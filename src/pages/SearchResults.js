import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { getRelativeTime } from '../utils/timeUtils';
import './../App.css';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summaries, setSummaries] = useState({}); // Optional: Keep summarize functionality

  useEffect(() => {
    if (!query) {
      setArticles([]);
      setLoading(false);
      return;
    }

    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        setArticles(res.data.articles || []);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching search results:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [query]); // Re-fetch when query changes

  // Optional: Summarize function (can be moved to a util if repeated)
  const handleSummarize = async (content, index) => {
    try {
      const res = await axios.post('http://localhost:5000/api/summarize', { content });
      setSummaries(prev => ({ ...prev, [index]: res.data.summary }));
    } catch (err) {
      console.error('Summarization failed', err);
    }
  };

  if (loading) return <div className="loading">Searching for "{query}"...</div>;
  if (error) return <div className="error-message">Error fetching results: {error}</div>;

  return (
    <div>
      <h2 className="page-title">Search Results for "{query}"</h2>
      <div className="news-grid">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            // Re-using the news card structure from other pages
            <div className="news-card" key={index}> 
              <img 
                src={article.urlToImage || 'https://via.placeholder.com/300x180?text=No+Image'} 
                alt={article.title} 
                className="news-image" 
              />
              <div className="news-content">
                <h3 className="news-title">{article.title}</h3>
                <p className="news-description">
                  {article.description || 'No description available'}
                </p>
                <div className="news-source">
                  <span>{article.source.name}</span>
                  <span>{getRelativeTime(article.publishedAt)}</span>
                </div>
                <button 
                  onClick={() => handleSummarize(article.content || article.description, index)}
                  style={{ marginTop: '10px', background: '#0f3460', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Summarize
                </button>
                {summaries[index] && (
                  <div className="summary" style={{ marginTop: '10px', background: '#f4f4f4', padding: '10px', borderRadius: '6px' }}>
                    <strong>Summary:</strong>
                    <p>{summaries[index]}</p>
                  </div>
                )}
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block', marginTop: '0.5rem', color: '#0f3460', textDecoration: 'none' }}
                >
                  Read more →
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">No articles found matching "{query}".</div>
        )}
      </div>
    </div>
  );
};

export default SearchResults; 