import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import TaskCard from '../components/TaskCard';
import { TextField, Box } from '@mui/material';

const CompletedTasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks.filter((task) => task.completed));
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 style={{color:"white"}}>Completed Tasks</h2>
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
          <p style={{color:"yellow"}}>No Completed tasks</p>
        ) :
        
      filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default CompletedTasks;
