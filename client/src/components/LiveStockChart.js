import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

function LiveStockChart() {
  const [chartData, setChartData] = useState({
    labels: [], // These will be your timestamps
    datasets: [
      {
        label: 'Tesla Stock Price',
        data: [], // These will be your stock prices
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  });

  useEffect(() => {
    // Here you would subscribe to live data updates, for example using WebSocket
    // For demonstration, I'll simulate live data with a timeout
    const interval = setInterval(() => {
      // Assuming you get your live data here
      const newData = { time: new Date().toLocaleTimeString(), price: Math.random() * 1000 };
      setChartData(prevData => ({
        ...prevData,
        labels: [...prevData.labels, newData.time],
        datasets: [{
          ...prevData.datasets[0],
          data: [...prevData.datasets[0].data, newData.price],
        }],
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return <Line data={chartData} />;
}

export default LiveStockChart;
