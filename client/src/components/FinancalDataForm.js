import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

function FinancialDataForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    savings: 0,
    investments: 0,
    expenses: 0,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: parseFloat(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Savings"
            type="number"
            name="savings"
            value={formData.savings}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Investments"
            type="number"
            name="investments"
            value={formData.investments}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Expenses"
            type="number"
            name="expenses"
            value={formData.expenses}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Update Data
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default FinancialDataForm;
