// StackedBarChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar componentes de Chart.js necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const transformDataForStackedBarChart = (companies) => {
  const criteria = ['adaptability_to_change', 'safe_conduct', 'dynamism_energy', 'personal_effectiveness', 'initiative', 'working_under_pressure'];
  const labels = companies.map(company => company.name);

  const datasets = criteria.map((criterion, index) => {
    const data = companies.map(company => {
      const workers = company.subcompanies 
        ? company.subcompanies.flatMap(subcompany => subcompany.workers)
        : company.workers;
      const totalScore = workers.reduce((sum, worker) => sum + worker.evaluations[criterion], 0);
      return (totalScore / workers.length).toFixed(2);
    });

    return {
      label: criterion.replace(/_/g, ' '),
      data,
      backgroundColor: `rgba(${index * 50}, ${index * 30}, ${index * 20}, 0.5)`,
      borderColor: `rgba(${index * 50}, ${index * 30}, ${index * 20}, 1)`,
      borderWidth: 1,
    };
  });

  return {
    labels,
    datasets,
  };
};

const StackedBarChart = ({ companies }) => {
  return (
    <Bar
      data={transformDataForStackedBarChart(companies)}
      options={{
        plugins: {
          title: {
            display: true,
            text: 'Distribución de Puntajes por Empresa',
            font: {
              size: 16,
            },
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            beginAtZero: true,
          },
        },
      }}
    />
  );
};

export default StackedBarChart;


