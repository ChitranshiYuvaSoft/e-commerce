// components/RealTimeAreaChart.tsx
"use client"
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns'; // Import the date adapter
import axios from 'axios';

const AreaChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [dataPoints, setDataPoints] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  // Fetch real-time data
  const fetchStockData = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=1');  // Replace with your API endpoint
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
        type: 'line',  // Use 'line' chart type for area chart
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Stock Price',
              data: dataPoints,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Color for the filled area
              fill: true,  // This enables the area to be filled
              tension: 0.4,  // Smooth the line for a nicer look
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

export default AreaChart;
