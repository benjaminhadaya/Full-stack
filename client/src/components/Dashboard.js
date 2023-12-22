import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@mui/material';
import BalanceChart from './BalanceChart';
import BarChart from './BarChart'; 
import TransactionView from './TransactionView';

function Dashboard() {
  const navigate = useNavigate();
  const [financialData /* , setFinancialData */] = useState({ // Commented out setFinancialData
    savings: 300, // Example default values
    investments: 200,
    expenses: 150,
  });

  React.useEffect(() => {
    localStorage.setItem('token', 'demo-token');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Mock transaction data
  const [transactions] = useState([
    { date: '01.01.2023', category: 'Groceries', amount: 50, type: 'Expense' },
    { date: '02.12.2023', category: 'Salary', amount: 2000, type: 'Income' },
  ]);

  return (
    <Container component="main">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography component="h1" variant="h5">
            Dashboard
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </Grid>
      </Grid>
      <Typography variant="body1" gutterBottom>
        Welcome back, Tester!
      </Typography>

      {/* Add "My Portfolio" title above the chart */}
      <Typography component="h2" variant="h4" align="center" gutterBottom>
        My Portfolio
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BalanceChart data={financialData} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BarChart data={financialData} /> {/* pass the same data to BarChart */}
        </Grid>
      </Grid>
      <TransactionView transactions={transactions} />
    </Container>
  );
}

export default Dashboard;
