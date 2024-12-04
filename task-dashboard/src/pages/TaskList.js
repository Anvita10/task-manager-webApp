import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from '../redux/tasksSlice'; // Import actions
import TaskCard from '../components/TaskCard';
import { TextField, Box } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // Access tasks from Redux state
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const handleUpdateTask = (updatedTask) => {
    console.log('Updating Task:', updatedTask); // Debugging log
    dispatch(editTask(updatedTask)); // Dispatch updated task
  };

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 style={{ color: 'white' }}>All Tasks</h2>

      {/* Search Bar */}
      <Box sx={{ marginBottom: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Tasks using title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          sx={{
            bgcolor: 'pink', // Light background for visibility
            borderRadius: '5px',
          }}
        />
      </Box>

      {/* Task Cards */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onUpdateTask={handleUpdateTask}
            onDelete={() => dispatch(deleteTask(task.id))} // Dispatch deleteTask action
          />
        ))
      ) : (
        <p style={{ color: 'white' }}>No tasks found.</p> // Message when no tasks match search query
      )}
    </div>
  );
};

export default TaskList;




