import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    age: '',
    country: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleGeStarted = () => {
    navigate('/login');
  };

  const handleSubmit = () => {
    axios.post('http://localhost:3000/users', user)
      .then((res) => {
        alert('Registration successful!');
        navigate('/login');
      })
      .catch((err) => {
        console.error(err);
        alert('Registration failed');
      });
  };

  return (
    <div>
     <br /><br /><br /> <Typography variant="h2">User Registration</Typography><br /><br />

      <TextField label="Name" name="name" value={user.name} onChange={handleChange} style={{marginLeft: '6em'}} /><br /><br />
      <TextField label="Age" name="age" value={user.age} onChange={handleChange} style={{marginLeft: '6em'}}/><br /><br />
      <TextField label="Country" name="country" value={user.country} onChange={handleChange} style={{marginLeft: '6em'}}/><br /><br />
      <TextField label="Phone Number" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} style={{marginLeft: '6em'}}/><br /><br />
      <TextField label="Email" name="email" value={user.email} onChange={handleChange} style={{marginLeft: '6em'}}/><br /><br />
      <TextField label="Password" type="password" name="password" value={user.password} onChange={handleChange} style={{marginLeft: '6em'}} /><br /><br />

      <Button variant="contained" onClick={handleSubmit} style={{marginLeft: '10.5em'}}>Register</Button><br /><br />
      <Typography variant='body2' style={{marginLeft: '10em'}}>Already registered?</Typography>
      <Typography variant='body2' style={{marginLeft: '10em'}}>Click here to login</Typography><br />
        <Button
          variant="outlined"
          style={{marginLeft: '11.5em'}}
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
          Login
        </Button>
    </div>
  );
};

export default Register;