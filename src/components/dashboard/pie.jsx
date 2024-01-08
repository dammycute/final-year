// PieChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const PieChart = ({ data, chartId }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: data.colors,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Adjust as needed
    layout: {
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
  };

  return (
    <div>
      <Doughnut key={chartId} data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
