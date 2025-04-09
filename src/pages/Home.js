import { useState, useEffect } from 'react';
import axios from 'axios';
import './../App.css';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        setArticles(res.data.articles);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <div className="loading">Loading news...</div>;

  return (
    <div>
      <h2 className="page-title">Top Headlines</h2>
      <div className="news-grid">
        {articles.map((article, index) => (
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
                style={{
                  display: 'inline-block', 
                  marginTop: '0.5rem', 
                  color: '#0f3460', 
                  textDecoration: 'none'
                }}
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;