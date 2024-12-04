import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom'; // Import NavLink
import ListAltIcon from '@mui/icons-material/ListAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddHomeIcon from '@mui/icons-material/AddHome';

const Sidebar = () => {
  const menuItems = [
    { text: 'Home', icon: <AddHomeIcon />, path: '/' },
    { text: 'All Tasks', icon: <ListAltIcon />, path: '/all-tasks' },
    { text: 'Completed Tasks', icon: <CheckCircleIcon />, path: '/completed' },
    { text: 'Pending Tasks', icon: <PendingIcon />, path: '/pending' },
    { text: 'Overdue Tasks', icon: <CalendarTodayIcon />, path: '/overdue' },
  ];

  return (
    <Box sx={{ width: 240, bgcolor: '#252541', color: '#FFF'}}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Task Manager
        </Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={NavLink}
            to={item.path}
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#1E1E2F' : 'transparent',
              color: isActive ? '#6C63FF' : '#FFF',
            })}
          >
            <ListItemIcon sx={{ color: '#6C63FF' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;


