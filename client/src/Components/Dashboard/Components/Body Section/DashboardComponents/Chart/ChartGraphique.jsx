import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from 'axios';

const ChartGraphique = () => {

    const data = {
        labels: ["viande", "oeuf", "lait"],
        datasets: [
            {
                label: "Chart graphique",
                backgroundColor: [
                    "#007D9C",
                    "#244D70",
                    "D123B3",
            ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                ],
                data: [2, 3, 10],
            },
        ],
    };
  return (
    <div>
      <Bar data={data} />
    </div>
  )
}

export default ChartGraphique
