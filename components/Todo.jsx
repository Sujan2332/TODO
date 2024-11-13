import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Grid, Typography } from '@mui/material';
import AppBarComponent from './AppBarComponent';
import TaskFormComponent from './TaskFormComponent';
import { TaskFilters } from './TaskFilters';
import { ProgressIndicator } from './ProgressIndicator';

const Todo_MUI = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [tasks, setTasks] = useState(() => {
    // Initialize tasks from localStorage or set to an empty array
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [currentDateTime, setCurrentDateTime] = useState('');

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: darkMode ? "#90caf9" : "#1976d2" },
      secondary: { main: darkMode ? "#f48fb1" : "#d32f2f" },
    },
    typography: {
      fontFamily: "Edu AU VIC WA NT Hand",
    },
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setCurrentDateTime(`${date} ${time}`);
    };

    updateDateTime(); // Initial call to set the date and time
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent darkMode={darkMode} toggleTheme={toggleTheme}>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          {currentDateTime}
        </Typography>
      </AppBarComponent>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <TaskFormComponent setTasks={setTasks} tasks={tasks} />
        <TaskFilters tasks={tasks} setTasks={setTasks} />
        <ProgressIndicator tasks={tasks} />
      </Grid>
    </ThemeProvider>
  );
};

export default Todo_MUI;
