import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const TaskFormComponent = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const addTaskToList = () => {
    if (task.trim() !== "") {
      const newTask = {
        text: task,
        description,
        completed: false,
        dueDate: dueDate || new Date(),
      };
      setTasks([...tasks, newTask]);
      setTask("");
      setDescription("");
      setDueDate(null);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        noValidate
        onSubmit={(e) => e.preventDefault()}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 2,
          width: '100%',
          maxWidth: { xs: '100%', sm: '80%', md: '60%' },
          mx: 'auto',
          mt: 4,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, width: '100%' }}>
          <TextField
            label="Todo"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            margin="normal"
            sx={{ flex: 1, fontSize: { xs: '1rem', sm: '1.1rem' } }}
          />
          <DateTimePicker
            label="Due Date and Time"
            value={dueDate}
            onChange={(newDate) => setDueDate(newDate)}
            renderInput={(params) => (
              <TextField {...params} margin="normal" sx={{ flex: 1, fontSize: { xs: '0.9rem', sm: '1rem' } }} />
            )}
          />
        </Box>
        <TextField
          label="Description"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}
        />
        
        <Button
          type="button"
          variant="contained"
          fullWidth
          onClick={addTaskToList}
          sx={{
            mt: 2,
            textTransform: 'capitalize',
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            padding: { xs: '10px', sm: '12px', md: '14px' },
          }}
        >
          Add Task
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default TaskFormComponent;
