import { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import NewsCard from '../components/NewsCard';
import axios from 'axios';

const Movies = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
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

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Entertainment News
      </Typography>
      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Movies;