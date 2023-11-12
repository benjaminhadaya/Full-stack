import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function BalanceChart({ data }) {
  // Ensure that data is passed as a prop
  const chartData = {
    labels: ['Savings', 'Investments', 'Expenses'],
    datasets: [
      {
        label: 'My Portfolio',
        data: [data.savings, data.investments, data.expenses],
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

  return <Doughnut data={chartData} />;
}

export default BalanceChart;
