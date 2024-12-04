import React from 'react';
import { Box } from '@mui/material';
import StatsCard from '../components/StatsCard';
import Grid from '@mui/material/Grid2';
import TaskList from './TaskList';
import { useSelector } from 'react-redux';

import AddTaskForm from '../components/AddTaskForm';  // Import AddTaskForm

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // Get tasks from the Redux state

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const overdueTasks = tasks.filter((task) => new Date(task.dueDate) < new Date() && !task.completed).length;

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <StatsCard title="Total Tasks" value={totalTasks} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatsCard title="Completed Tasks" value={completedTasks} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatsCard title="Overdue Tasks" value={overdueTasks} />
        </Grid>
      </Grid>

      {/* Add Task Form */}
      <Box mt={5}>
        <AddTaskForm /> {/* Add task form to add new tasks */}
      </Box>
    </Box>
  );
};

export default Dashboard;



