import React from 'react';
import { LinearProgress, Typography, Box } from '@mui/material';

export const ProgressIndicator = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = tasks.length ? (completedTasks / tasks.length) * 100 : 0;

  return (
    <Box 
      sx={{ 
        width: '100%', 
        textAlign: 'center', 
        mt: { xs: 2, sm: 3, md: 4 },
        px: { xs: 2, sm: 4, md: 6 }
      }}
    >
      <LinearProgress 
        variant="determinate" 
        value={progress} 
        sx={{ 
          height: { xs: 6, sm: 8, md: 10 }, 
          borderRadius: 1 
        }} 
      />
      <Typography 
        variant="body1" 
        sx={{ 
          mt: 2, 
          fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
          color: 'text.secondary',
          margin:"20px" 
        }}
      >
        {`Progress: ${Math.round(progress)}%`}
      </Typography>
    </Box>
  );
};
