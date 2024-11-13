import React from 'react';
import { List, ListItem, ListItemText, Checkbox, Button, Typography, Box, Divider } from '@mui/material';

export const TaskList = ({ tasks, setTasks }) => {
  const toggleCompletion = (index) => {
    setTasks(tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const formatDueDate = (date) => {
    const options = { month: 'short', day: 'numeric'};
    const weekdayOptions = { weekday: 'long' };
    const dateString = new Date(date).toLocaleDateString('en-US', options);
    const weekdayString = new Date(date).toLocaleDateString('en-US', weekdayOptions);
    const timeString = new Date(date).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    return `${dateString},${weekdayString}, ${timeString}`;
  };

  return (
    <List>
      {tasks.map((task, index) => (
        <Box key={index}>
          <ListItem sx={{ display: "flex", justifyContent: "space-between", padding: "10px", gap: "20px", alignItems: "center" }}>
            <Checkbox checked={task.completed} onChange={() => toggleCompletion(index)} color="primary" />
            
            <Box sx={{ flexGrow: 1 }}>
              <ListItemText 
                primary={task.text} 
                secondary={task.description} 
                sx={{ textDecoration: task.completed ? "line-through" : "none" }} 
              />

              {/* Display the due date in the custom format */}
              {task.dueDate && (
                <Typography variant="body2" sx={{ color: "gray", marginTop: "5px"}}>
                  Due: {formatDueDate(task.dueDate)}
                </Typography>
              )}
            </Box>

            <Button 
              variant="contained" 
              sx={{ background: "red", color: "white" }} 
              onClick={() => deleteTask(index)}
            >
              Delete
            </Button>
          </ListItem>

          {/* Add a white line (divider) after each task */}
          <Divider sx={{ borderColor: "white" }} />
        </Box>
      ))}
    </List>
  );
};
