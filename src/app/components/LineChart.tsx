
"use client";
import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { useAppSelector } from "../Redux/hooks";
import { RootState } from "../Redux/store";

const LineChart: React.FC = () => {

  const {lineChartData} = useAppSelector((state:RootState) => state.chart);
  console.log(lineChartData, "Linechart")

  const month = lineChartData.map(item => item.month );
  const sales = lineChartData.map(item => item.sales );
  const purchase = lineChartData.map(item => item.purchase );
  console.log(month, sales, purchase);

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
          // labels: [
          //   "January",
          //   "February",
          //   "March",
          //   "April",
          //   "May",
          //   "June",
          //   "July",
          // ], 
          labels : lineChartData.map(item => item.month ),
          datasets: [
            {
              label: "Sales",
              // data: [12, 19, 3, 5, 2, 3, 7],
              data: lineChartData.map(item => item.sales ),
              borderColor: "#FFC0CB",
              backgroundColor: "rgb(170, 51, 106)",
              fill: false,
              pointStyle: 'circle'
            },
            {
              label: "Purchase",
              // data: [3, 5, 7, 1, 2, 13, 6],
              data: lineChartData.map(item => item.purchase ),
              borderColor: "#FFFF00",
              backgroundColor: "#008000",
              fill: false,
              pointStyle: 'circle'
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

export default LineChart;
