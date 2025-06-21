import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleGeStarted = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    axios.post('http://localhost:3000/users/login', credentials) 
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));  
        alert('Login successful!');
        navigate('/rooms');
      })
      .catch((err) => {
        console.error(err);
        alert('Invalid email or password');
      });
  };

  return (
    <div>
      <Typography variant="h2" style={{ marginLeft: '30px' }}>Login</Typography><br /><br /><br />

      <TextField
        label="Email"
        name="email"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
      /><br /><br />

      <TextField
        label="Password"
        type="password"
        name="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      /><br /><br /><br />

      <Button variant="contained" onClick={handleLogin} style={{ marginLeft: '4.8em' }}>
        Login
      </Button><br /><br />

      <Typography variant='body2' style={{ marginLeft: '4em' }}>Not registered?</Typography>
      <Typography variant='body2' style={{ marginLeft: '3em' }}>Click here to register</Typography><br />

      <Button
        variant="outlined"
        style={{ marginLeft: '50px' }}
        sx={{
          color: 'black',
          borderColor: 'black',
          '&:hover': {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
        onClick={handleGeStarted}
      >
        Register
      </Button>
    </div>
  );
};

export default Login;