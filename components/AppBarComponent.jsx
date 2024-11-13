import { Brightness4, Brightness7 } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const AppBarComponent = ({ darkMode, toggleTheme }) => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'long' });
      const time = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentDateTime(`${date}, ${time}`);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            padding: "20px",
            textDecoration: "underline",
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Adjust font size for responsiveness
          }}
        >
          TodoList
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginRight: "10px",
            fontFamily: "",
            fontWeight:"100px",
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.25rem' }, // Adjust font size for responsiveness
          }}
        >
          {currentDateTime}
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          {darkMode ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
