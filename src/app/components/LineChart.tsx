"use client";
import React, { useRef, useEffect } from "react";
import Chart, { BubbleDataPoint, Point } from "chart.js/auto";
import { useAppSelector } from "../Redux/hooks";
import { RootState } from "../Redux/store";

const LineChart: React.FC = () => {
  const { lineChartData } = useAppSelector((state: RootState) => state.chart);

  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (ctx) {
      chartInstanceRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: lineChartData.map((item: any) => item.month),
          datasets: [
            {
              label: "Sales",
              data: lineChartData.map((item: any) => item.sales),
              borderColor: "#FFC0CB",
              backgroundColor: "rgb(170, 51, 106)",
              fill: false,
              pointStyle: "circle",
            },
            {
              label: "Purchase",
              data: lineChartData.map((item: any) => item.purchase),
              borderColor: "#FFFF00",
              backgroundColor: "#008000",
              fill: false,
              pointStyle: "circle",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Sales Over Time",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      } as any);
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineChart;
