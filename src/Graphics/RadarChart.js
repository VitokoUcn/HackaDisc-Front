// RadarChart.js

import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar componentes de Chart.js necesarios
ChartJS.register(
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

// Función para transformar datos para el gráfico Radar
const transformDataForRadarChart = (workers) => {
  const labels = ['Adaptabilidad al cambio', 'Conducta segura', 'Dinamismo/Energía', 'Efectividad personal', 'Iniciativa', 'Trabajo bajo presión'];
  const datasets = workers.map(worker => ({
    label: worker.name,
    data: [
      worker.evaluations.adaptability_to_change,
      worker.evaluations.safe_conduct,
      worker.evaluations.dynamism_energy,
      worker.evaluations.personal_effectiveness,
      worker.evaluations.initiative,
      worker.evaluations.working_under_pressure,
    ],
    backgroundColor: 'rgba(75,192,192,0.2)',
    borderColor: 'rgba(75,192,192,1)',
    borderWidth: 1,
  }));

  return {
    labels,
    datasets,
  };
};

const RadarChart = ({ workers }) => {
  return (
    <Radar
      data={transformDataForRadarChart(workers)}
      options={{
        scales: {
          r: { // En Chart.js 3.x, la escala radial se define como 'r'
            ticks: { beginAtZero: true },
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Evaluaciones de los Trabajadores',
          },
        },
      }}
    />
  );
};

export default RadarChart;
