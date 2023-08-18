import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register the necessary controllers and scales
Chart.register(
  LineController,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale
);

function MyChartComponent({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: "line",
      data: data,
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "KP",
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Values",
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
}

export default MyChartComponent;
