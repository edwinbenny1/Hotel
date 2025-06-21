import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = null; 

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black', width: '100%' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>       
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          HOMEWAY
        </Typography>

       
        <Box>
          {user ? (
            <>
              <Button color="inherit">Profile</Button>
              <Button color="inherit">Logout</Button>
            </>
          ) : (
            <>
             <Button color="inherit" onClick={() => navigate('/')}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate('/login')}>
                Login
              </Button>
             
           
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;