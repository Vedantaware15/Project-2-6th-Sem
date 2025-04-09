import { useState, useEffect } from 'react';
import axios from 'axios';
import './../App.css';

const Technology = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        setArticles(res.data.articles);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching technology news:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <div className="loading">Loading technology news...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div>
      <h2 className="page-title">Technology News</h2>
      <div className="news-grid">
        {articles.length > 0 ? (
          articles.map((article, index) => (
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
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="read-more-link"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="error-message">
            No technology articles found. Please try again later.
          </div>
        )}
      </div>
    </div>
  );
};

export default Technology;