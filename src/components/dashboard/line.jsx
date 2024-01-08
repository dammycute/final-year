import Chart from 'chart.js/auto';
import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
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

  const data = {
    labels,
    datasets: [
      {
        label: "Target",
        data: labels.map(() => faker.datatype.number({ min: 10, max: 50 })),
        borderColor: "#6956E5",
        backgroundColor: "white",
        yAxisID: "y",
        tension: 0.5,
      },
      {
        label: "Achieved",
        data: labels.map(() => faker.datatype.number({ min: 10, max: 50 })),
        borderColor: "#FB896B",
        backgroundColor: "white",
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
      // y: {
      //   type: "linear",
      //   display: true,
      //   position: "left",
      //   max: 1500,
      // },
      // y1: {
      //   type: "linear",
      //   display: true,
      //   position: "right",
      //   grid: {
      //     drawOnChartArea: false,
      //   },
      // },
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
