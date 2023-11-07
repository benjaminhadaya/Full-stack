import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@mui/material';
import BalanceChart from './BalanceChart'; // Import the BalanceChart component

function Dashboard() {
  const navigate = useNavigate();

  // Check if the user is logged in by looking for a token
  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login'); // Redirect to login if not logged in
    }
  }, [navigate]);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the stored token
    navigate('/login'); // Redirect to login
  };

  return (
    <Container component="main">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography component="h1" variant="h5">
            Dashboard
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => navigate('/stocks')} // Navigate to the stocks page
          >
            My Stocks
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
      <Typography variant="body1" gutterBottom>
        Welcome back, Tester!
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={3}> {/* Adjust the size as needed */}
          {/* Include the BalanceChart in your dashboard */}
          <BalanceChart />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
