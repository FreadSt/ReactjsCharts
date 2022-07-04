import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
    const lineChartData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            data: [1,5,10,1,2],
            label: "Data",
            borderColor: "#3333ff",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            fill: true
          }
        ]
    };
  
    return (
      <Line
        type="line"
        width={160}
        height={60}
        options={{
          title: {
            display: true,
            text: "COVID-19 Cases of Last 6 Months",
            fontSize: 20
          },
          legend: {
            display: true, //Is the legend shown?
            position: "top" //Position of the legend.
          }
        }}
        data={lineChartData}
      />
    );
  };
  export default LineChart;