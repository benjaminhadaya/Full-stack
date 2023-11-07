const mockStockData = {
    labels: ['1d', '3d', '1wk', '1mo', '3mo', 'YTD', '1yr', '3yr'],
    datasets: [
      {
        label: 'My Mock Stock',
        data: [150, 160, 170, 165, 180, 190, 200, 220], // Example data points
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Choose your own color
        borderColor: 'rgba(54, 162, 235, 1)', // Choose your own color
        fill: false, // Decide if you want to fill the area under the line
      },
    ],
  };
  
  function MyMockStockChart() {
    return (
      <Doughnut data={mockStockData} />
    );
  }
  
  export default MyMockStockChart;
  