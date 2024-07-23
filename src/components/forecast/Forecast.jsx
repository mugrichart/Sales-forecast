import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const ForeCast = ({ pastSales, futureSales }) => {
  const allSales = pastSales.concat(futureSales);

  // Determine the number of weeks to display based on the larger dataset
  const maxLength = Math.max(pastSales.length, allSales.length);
  const labels = Array.from({ length: maxLength }, (_, index) => `Week ${index + 1}`);

  const data = {
    labels,
    datasets: [
      {
        label: 'Past Sales',
        data: pastSales,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 0.7)', // Red color for past sales
        tension: 0.1, // Smooths the line
      },
      {
        label: 'Future Sales',
        data: allSales,
        fill: false,
        borderColor: 'rgba(54, 162, 235, 0.7)', // Blue color for all sales
        tension: 0.1, // Smooths the line
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false, // Starts Y-axis from minimum value in data
      },
    },
    animation: {
      duration: 0, // Disables animation for instant updates
    },
  };

  return <Line data={data} options={options} />;
};

export default ForeCast;
