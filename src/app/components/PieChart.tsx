"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import { AppStore } from "../Redux/store";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { pieChartData } = useSelector((state: AppStore) => state.chart);

  const chartData = {
    labels: ["Income", "Expense", "Invest"],
    datasets: [
      {
        label: "Pie Chart Example",
        data: pieChartData,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
