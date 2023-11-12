import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // This bypasses any real authentication check
    navigate('/dashboard'); // Redirect to the dashboard
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          value={loginData.username}
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
