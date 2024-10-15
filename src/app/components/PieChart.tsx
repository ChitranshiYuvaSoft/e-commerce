"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useAppSelector } from "../Redux/hooks";
import { RootState } from "../Redux/store";

const PieChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  // const chartInstanceRef = useRef<Chart | null>(null);
  const chartInstanceRef: React.MutableRefObject<Chart<"pie", number[], unknown> | null> = useRef(null);

  const {pieChartData} = useAppSelector((state:RootState) => state.chart);
console.log(pieChartData)

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (ctx) {
        chartInstanceRef.current = new Chart<'pie', number[], string>(ctx, {
        type: "pie",
        data: {
          labels: ["Income", "Expense", "Invest"],
          datasets: [
            {
              label: "My First Dataset",
              data: pieChartData,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.label || "";
                  const value = context.raw || 0;
                  return `${label}: ${value}`;
                },
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);
  return <canvas ref={chartRef} />;
};

export default PieChart;
