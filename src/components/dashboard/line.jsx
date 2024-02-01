import Chart from 'chart.js/auto';
// import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
import { Line } from "react-chartjs-2";

const LineGraph = ({ chartId }) => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const targetData = [30, 35, 40, 45, 40, 38, 42];

  // Replace this array with your actual achieved data
  const achievedData = [28, 32, 37, 42, 38, 36, 40];

  const data = {
    labels,
    datasets: [
      {
        label: "Target",
        data: targetData,
        borderColor: "#FB896B",
        backgroundColor: "#FB896B",
        yAxisID: "y",
        tension: 0.5,
      },
      {
        label: "Achieved",
        data: achievedData,
        borderColor: "limegreen",
        backgroundColor: "limegreen",
        tension: 0.5,
        yAxisID: "y1",
      },
    ],
  };
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Performance",
      },
    },
    scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
    },
  };

  return (
    <div>
      <Line options={options} className="canvas" data={data} />
    </div>
  );
};

export default LineGraph;
