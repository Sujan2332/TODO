import React, { useState } from 'react';
import { ButtonGroup, Button, Box } from '@mui/material';
import { TaskList } from './TaskListComponent';

export const TaskFilters = ({ tasks, setTasks }) => {
  const [filter, setFilter] = useState("All");

  const getFilteredTasks = () => {
    if (filter === "Completed") return tasks.filter(task => task.completed);
    if (filter === "Pending") return tasks.filter(task => !task.completed);
    return tasks;
  };

  return (
    <Box sx={{ width: '100%', mt: 3, px: { xs: 2, sm: 3, md: 5 }, textAlign: 'center' }}>
      <ButtonGroup
        fullWidth
        variant="outlined"
        sx={{
          marginTop: 2,
          marginBottom: 3,
          '& .MuiButton-root': {
            padding: { xs: '8px', sm: '10px', md: '12px' },
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            textTransform: "capitalize",
          },
        }}
      >
        <Button onClick={() => setFilter("All")}>All</Button>
        <Button onClick={() => setFilter("Completed")}>Completed</Button>
        <Button onClick={() => setFilter("Pending")}>Pending</Button>
      </ButtonGroup>

      <TaskList tasks={getFilteredTasks()} setTasks={setTasks} />
    </Box>
  );
};
