// components/RealTimeChart.tsx
"use client"
// components/RealTimeChart.tsx
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns'; 
import axios from 'axios';

const RealTimeChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [dataPoints, setDataPoints] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);


  const fetchStockData = async () => {
    try {
      const response = await axios.get('YOUR_API_URL');  // Replace with your API endpoint
      const stockPrice = response.data.price;  // Adjust based on the API response structure
      const currentTime = new Date().toLocaleTimeString();

      // Update state with new data point and label
      setDataPoints((prevData) => [...prevData, stockPrice]);
      setLabels((prevLabels) => [...prevLabels, currentTime]);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');

    // Destroy previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (ctx) {
      // Create new chart instance
      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',  // Line chart for financial data
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Stock Price',
              data: dataPoints,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'time',  // Set x-axis to time-based scale
              time: {
                unit: 'minute',  // Adjust time unit to minutes for real-time data
              },
            },
            y: {
              beginAtZero: false,
            },
          },
        },
      });
    }

    // Fetch data every 10 seconds
    const interval = setInterval(fetchStockData, 10000);  // Fetch every 10 seconds

    // Cleanup chart and interval on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      clearInterval(interval);
    };
  }, [dataPoints, labels]);  // Re-render chart when data points or labels change

  return <canvas ref={chartRef} />;
};

export default RealTimeChart;
