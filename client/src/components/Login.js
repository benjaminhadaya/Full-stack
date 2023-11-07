import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData(prevLoginData => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Mock authentication by setting isLoggedIn flag
    localStorage.setItem('isLoggedIn', 'true');
    // Navigate to the dashboard or home page
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          value={loginData.email}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={loginData.password}
          onChange={handleChange}
          required
          margin="normal"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Sign In
        </Button>
      </form>
    </Container>
  );
}

export default Login;
