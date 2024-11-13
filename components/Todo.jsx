import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Grid, Typography } from '@mui/material';
import AppBarComponent from './AppBarComponent';
import TaskFormComponent from './TaskFormComponent';
import { TaskFilters } from './TaskFilters';
import { ProgressIndicator } from './ProgressIndicator';

const Todo_MUI = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [tasks, setTasks] = useState([]);
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

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // Function to update the current date and time
    const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString(); // Format as MM/DD/YYYY
      const time = now.toLocaleTimeString(); // Format as HH:MM:SS AM/PM
      setCurrentDateTime(`${date} ${time}`);
    };

    updateDateTime(); // Initial call to set the date and time

    // Set an interval to update the date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme} sx={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
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
        {/* Display current date and time */}
      </Grid>
    </ThemeProvider>
  );
};

export default Todo_MUI;
