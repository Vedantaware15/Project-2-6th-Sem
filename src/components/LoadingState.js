import React from 'react';
import { Box, Skeleton, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
  transform: 'none',
  '&::after': {
    background: `linear-gradient(90deg, 
      transparent, 
      ${theme.palette.background.paper}, 
      transparent
    )`,
  },
}));

export const NewsCardSkeleton = ({ variant = 'standard' }) => {
  if (variant === 'featured') {
    return (
      <Box sx={{ width: '100%', height: 400, position: 'relative' }}>
        <StyledSkeleton variant="rectangular" width="100%" height="100%" />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 3,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          }}
        >
          <StyledSkeleton width={100} height={24} sx={{ mb: 1 }} />
          <StyledSkeleton width="80%" height={40} sx={{ mb: 1 }} />
          <StyledSkeleton width="60%" height={24} />
        </Box>
      </Box>
    );
  }

  if (variant === 'secondary') {
    return (
      <Box sx={{ width: '100%', height: 300, position: 'relative' }}>
        <StyledSkeleton variant="rectangular" width="100%" height="100%" />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          }}
        >
          <StyledSkeleton width="70%" height={24} />
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <StyledSkeleton variant="rectangular" width="100%" height={160} />
      <Box sx={{ p: 2 }}>
        <StyledSkeleton width="90%" height={24} sx={{ mb: 1 }} />
        <StyledSkeleton width="60%" height={20} />
      </Box>
    </Box>
  );
};

export const LoadingState = ({ type = 'standard' }) => {
  if (type === 'featured') {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <NewsCardSkeleton variant="featured" />
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NewsCardSkeleton variant="secondary" />
            </Grid>
            <Grid item xs={12}>
              <NewsCardSkeleton variant="secondary" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={3}>
      {[1, 2, 3, 4].map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item}>
          <NewsCardSkeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export default LoadingState; 