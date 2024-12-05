import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, ArcElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
);

const Chart = () => {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Bar Chart Data',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Line Chart Data',
        data: [45, 56, 78, 65, 90],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-gray-400 mt-10 p-8 shadow-lg rounded-lg">
      <div className="flex justify-between space-x-10">
        <div className="w-1/2 p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-center font-bold mb-4">Bar Chart</h3>
          <Bar data={barData} />
        </div>
        <div className="w-1/2 p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-center font-bold mb-4">Line Chart</h3>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
