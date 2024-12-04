// src/pages/OverdueTasks.js
import React,{useState}  from 'react';
import { TextField, Box } from '@mui/material';

import { useSelector } from 'react-redux'; // To get tasks from Redux store
import TaskCard from '../components/TaskCard'; // Reuse TaskCard to display tasks

const OverdueTasks = () => {
  // Get tasks from Redux state
  const tasks = useSelector((state) => state.tasks.tasks);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  
  
  // Get the current date
  const currentDate = new Date();
  
  // Filter tasks that are overdue
  const overdueTasks = tasks.filter((task) => {
      const taskDueDate = new Date(task.dueDate);
      return taskDueDate < currentDate && !task.completed; // Overdue and not completed
    });
    const filteredTasks = overdueTasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div>
      <h2 style={{color:"white"}}>Overdue Tasks</h2>
      <div>
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
        {filteredTasks.length === 0 ? (
          <p style={{color:"yellow"}}>No overdue tasks</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={() => { /* Handle delete logic if needed */ }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default OverdueTasks;
