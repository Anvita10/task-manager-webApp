import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import { setFilter } from '../redux/tasksSlice';

const FilterBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);

  return (
    <Box sx={{ marginBottom: 3, display: 'flex', gap: 2 }}>
      {['all', 'completed', 'pending', 'overdue'].map((status) => (
        <Button
          key={status}
          variant={filter === status ? 'contained' : 'outlined'}
          onClick={() => dispatch(setFilter(status))}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Button>
      ))}
    </Box>
  );
};

export default FilterBar;