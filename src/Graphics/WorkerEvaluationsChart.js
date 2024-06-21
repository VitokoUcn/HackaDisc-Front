import React from 'react';
import { Chart } from 'react-google-charts';

const WorkerEvaluationsChart = ({ workers }) => {
  const data = [
    ['Evaluación', 'Adaptabilidad al cambio', 'Conducta segura', 'Dinamismo/Energía', 'Efectividad personal', 'Iniciativa', 'Trabajo bajo presión'],
  ];

  workers.forEach(worker => {
    data.push([
      worker.name,
      worker.evaluations.adaptability_to_change,
      worker.evaluations.safe_conduct,
      worker.evaluations.dynamism_energy,
      worker.evaluations.personal_effectiveness,
      worker.evaluations.initiative,
      worker.evaluations.working_under_pressure,
    ]);
  });

  const options = {
    title: 'Evaluaciones de los Trabajadores',
    hAxis: { title: 'Evaluación' },
    vAxis: { title: 'Puntaje' },
    seriesType: 'line',
    series: { 1: { type: 'bars' } },
    radar: { grid: { color: '#ccc' } },
  };

  return (
    <div>
      <Chart
        chartType="RadarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default WorkerEvaluationsChart;
