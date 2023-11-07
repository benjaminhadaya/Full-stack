import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Replace this with dynamic data eventually
const data = {
  labels: ['Savings', 'Investments', 'Expenses'],
  datasets: [
    {
      label: 'Overview',
      data: [300, 50, 100], // These data points should be dynamic
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function BalanceChart() {
  return <Doughnut data={data} />;
}

export default BalanceChart;
