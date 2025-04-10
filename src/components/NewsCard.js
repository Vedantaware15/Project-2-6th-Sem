import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { getRelativeTime } from '../utils';

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