import React from 'react';
import { Box, Typography } from '@mui/material';

const StatsCard = ({ title, value }) => {
  return (
    <Box
      sx={{
        bgcolor: '#2C2C3C',
        color: '#FFF',
        borderRadius: 2,
        p: 3,
        boxShadow: 3,
        textAlign: 'center',
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4" mt={2} sx={{ color: '#6C63FF' }}>
        {value}
      </Typography>
    </Box>
  );
};

export default StatsCard;
