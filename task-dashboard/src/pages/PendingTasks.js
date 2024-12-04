// src/pages/PendingTasks.js
import React,{useState} from 'react';
import { TextField, Box } from '@mui/material';

import { useSelector } from 'react-redux'; // To get tasks from Redux store
import TaskCard from '../components/TaskCard'; // Assuming you're reusing TaskCard for displaying tasks

const PendingTasks = () => {
  // Get tasks from Redux state
  const tasks = useSelector((state) => state.tasks.tasks);
  
  // Filter tasks that are pending
  const pendingTasks = tasks.filter((task) => !task.completed);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const filteredTasks = pendingTasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 style={{color:"white"}}>Pending Tasks</h2>
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
      <div>
        {filteredTasks.length === 0 ? (
          <p style={{color:"yellow"}}>No pending tasks</p>
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

export default PendingTasks;
