import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/rooms');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        bgcolor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" gutterBottom>
        HomeWay
      </Typography>
      <h3>"There is only one boss.The Guest"</h3>
      <Button
        variant="outlined"
        sx={{
            backgroundColor: 'white',
            color: 'black',
         '&:hover': {
            backgroundColor: 'black',
            color: 'white',
            border: '2px solid white'
          },
        }}
        onClick={handleGetStarted}
      >
        GET STARTED
      </Button>
    </Box>
  );
};

export default LandingPage;