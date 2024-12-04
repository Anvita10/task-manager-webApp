import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Paper ,Snackbar, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice'; // Make sure addTask action is imported

const AddTaskForm = () => {
  const dispatch = useDispatch();

  const [openSnackbar, setOpenSnackbar] = useState(false); 

  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.description) {
      dispatch(addTask(task)); // Dispatch addTask to Redux
      setTask({ title: '', description: '', dueDate: '', completed: false }); // Clear the form
      setOpenSnackbar(true); // Show the Snackbar
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close the Snackbar
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#252541',
        padding: 3,
      }}
    >
      <Paper
        sx={{
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          maxWidth: 500,
          backgroundColor: '#2C2A4A',
        }}
      >
        <Typography variant="h5" sx={{ color: '#FFF', marginBottom: 2 }}>
          Add New Task
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            name="title"
            placeholder='Title'
            value={task.title}
            onChange={handleChange}
            required
            sx={{ backgroundColor: '#FFF' }}
          />
          <TextField
            name="description"
            placeholder="Task Description"
            value={task.description}
            onChange={handleChange}
            required
            sx={{ backgroundColor: '#FFF' }}
          />
          <TextField
            name="dueDate"
            placeholder="Due Date"
            type="date"
            value={task.dueDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            sx={{ backgroundColor: '#FFF' }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Add Task
          </Button>

          {/* Snackbar for Success Message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} // Automatically hides after 3 seconds
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Task added successfully!
        </Alert>
      </Snackbar>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddTaskForm;


