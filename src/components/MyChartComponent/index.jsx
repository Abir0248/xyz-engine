import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register the necessary controllers and scales for Chart.js
Chart.register(
  LineController,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale
);

function MyChartComponent({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // store the chart instance here

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // destroy previous instance
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: "line", // change this to your desired type if not 'line'
      data: data,
      options: { maintainAspectRatio: false }, // or any other options you need
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // cleanup on unmount
      }
    };
  }, [data]); // re-run effect if data changes

  return <canvas ref={chartRef}></canvas>;
}

export default MyChartComponent;
