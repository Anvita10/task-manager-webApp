import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompletedTasks from './pages/CompletedTasks'; // Create this component
import PendingTasks from './pages/PendingTasks'; // Create this component
import OverdueTasks from './pages/OverdueTasks'; // Create this component
import Sidebar from './components/Sidebar'; // Sidebar component
import TaskList from './pages/TaskList';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex',minHeight:'100vh' }}>
        <CssBaseline/>
        <Sidebar /> {/* Sidebar stays visible */}
        <Box sx={{ flexGrow: 1, bgcolor: '#1E1E2D', p: 3 }}>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/all-tasks" element={<TaskList />} />
            <Route path="/completed" element={<CompletedTasks />} />
            <Route path="/pending" element={<PendingTasks />} />
            <Route path="/overdue" element={<OverdueTasks />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;


