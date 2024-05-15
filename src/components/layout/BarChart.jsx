import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export default function BarChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const data = {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [100000, 200000, 300000, 150000, 400000, 502000, 600000],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value / 1000 + "k"; // Convert to thousands
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.raw.toLocaleString(); // Format numbers with commas
          },
        },
      },
    },
  };
  const selectData = [
    { label: "6 Months", value: "6-months" },
    { label: "1 Year", value: "1-year" },
    { label: "2 Years", value: "2-years" },
    { label: "5 Years", value: "5-years" },
  ];

  return (
    <div>
      <div className="d-flex justify-content-between mb-3 p-2">
        <div>
          <h1 className="fs-4 fw-semibold">Transactions</h1>
        </div>
        <select className="form-select w-auto">
          {selectData.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}
