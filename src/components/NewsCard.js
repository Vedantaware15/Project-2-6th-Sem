import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { getRelativeTime } from '../utils';

const getRelativeTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  
  if (diffInSeconds < 60) {
    return 'just now';
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
  }
  
  return date.toLocaleDateString();
};

const NewsCard = ({ article }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={article.urlToImage || 'https://via.placeholder.com/300x180?text=No+Image'}
        alt={article.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description || 'No description available'}
        </Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          {article.source.name} • {getRelativeTime(article.publishedAt)}
        </Typography>
        <Button 
          size="small" 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ mt: 1 }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsCard;