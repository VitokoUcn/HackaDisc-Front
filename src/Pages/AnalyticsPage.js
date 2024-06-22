import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import StackedBarChart from '../Graphics/StackedBarChart';

// Registrar componentes de Chart.js
ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const companiesData = [
  {
    id: 1,
    name: 'Alfaro y Pino Ltda.',
    subcompanies: [
      {
        id: 11,
        name: 'Fuentes Ltda.',
        workers: [
          {
            id: 101,
            name: 'Juan Pérez',
            area: 'Administración',
            position: 'Analista',
            status: 'Evaluado',
            evaluations: {
              adaptability_to_change: 8,
              safe_conduct: 7,
              dynamism_energy: 9,
              personal_effectiveness: 7,
              initiative: 8,
              working_under_pressure: 6,
            },
            last_evaluation_date: '2023-05-15',
          },
          {
            id: 102,
            name: 'María García',
            area: 'Producción',
            position: 'Operador',
            status: 'En Intervención',
            evaluations: {
              adaptability_to_change: 7,
              safe_conduct: 6,
              dynamism_energy: 8,
              personal_effectiveness: 6,
              initiative: 5,
              working_under_pressure: 7,
            },
            last_evaluation_date: '2023-06-20',
          },
        ],
      },
      {
        id: 12,
        name: 'Molina y Benítez Limitada',
        workers: [
          {
            id: 103,
            name: 'Carlos López',
            area: 'Ventas',
            position: 'Vendedor',
            status: 'Intervenido',
            evaluations: {
              adaptability_to_change: 9,
              safe_conduct: 8,
              dynamism_energy: 7,
              personal_effectiveness: 9,
              initiative: 8,
              working_under_pressure: 7,
            },
            last_evaluation_date: '2023-04-10',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Michelle Salazar Aravena EIRL',
    workers: [
      {
        id: 201,
        name: 'Laura Torres',
        area: 'Recursos Humanos',
        position: 'Gerente',
        status: 'Evaluado',
        evaluations: {
          adaptability_to_change: 7,
          safe_conduct: 8,
          dynamism_energy: 6,
          personal_effectiveness: 7,
          initiative: 6,
          working_under_pressure: 8,
        },
        last_evaluation_date: '2023-07-05',
      },
      {
        id: 202,
        name: 'Pedro Ramírez',
        area: 'Producción',
        position: 'Supervisor',
        status: 'En Intervención',
        evaluations: {
          adaptability_to_change: 6,
          safe_conduct: 7,
          dynamism_energy: 8,
          personal_effectiveness: 5,
          initiative: 6,
          working_under_pressure: 7,
        },
        last_evaluation_date: '2023-06-30',
      },
    ],
  },
];

// Función para transformar datos para el gráfico de barras
const transformDataForBarChart = (workers) => {
  const areas = [...new Set(workers.map(worker => worker.area))];
  const data = areas.map(area => {
    const areaWorkers = workers.filter(worker => worker.area === area);
    const averageScore = areaWorkers.reduce((sum, worker) => sum + Object.values(worker.evaluations).reduce((acc, score) => acc + score, 0) / Object.values(worker.evaluations).length, 0) / areaWorkers.length;
    return averageScore.toFixed(2);
  });

  return {
    labels: areas,
    datasets: [{
      label: 'Promedio de Puntaje por Área',
      data,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    }],
  };
};

// Función para transformar datos para el gráfico de pie
const transformDataForPieChart = (workers) => {
  const statusCounts = workers.reduce((acc, worker) => {
    acc[worker.status] = (acc[worker.status] || 0) + 1;
    return acc;
  }, {});

  return {
    labels: Object.keys(statusCounts),
    datasets: [{
      data: Object.values(statusCounts),
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
    }],
  };
};

const AnalyticsPage = () => {
  const allWorkers = companiesData.flatMap(company =>
    company.subcompanies
      ? company.subcompanies.flatMap(subcompany => subcompany.workers)
      : company.workers
  );

  return (
    <div className="container mt-4">
      <h2>Analytics</h2>
      {/* Sección de gráficos de desempeño */}
      <div className="row mb-4">
        <div className="col-12">
          <h3>Desempeño de Trabajadores</h3>
        </div>
        <div className="col-9 mx-auto mb-5">
          <StackedBarChart companies={companiesData} />
        </div>
        <div className="col-md-9 mx-auto">
          <Bar
            data={transformDataForBarChart(allWorkers)}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: 'Promedio de Puntaje por Área',
                  font: {
                    size: 16,
                  },
                },
              },
              scales: {
                y: {
                  ticks: { beginAtZero: true },
                },
              },
            }}
          />
        </div>
      </div>
      {/* Sección de gráficos de distribución */}
      <div className="row mb-4">
        <div className="col-10">
          <h3>Distribución de Trabajadores</h3>
        </div>
        <div className="col-md-6 mx-auto">
          <Pie
            data={transformDataForPieChart(allWorkers)}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: 'Distribución de Estados de Trabajadores',
                },
              },
            }}
          />
        </div>
      </div>
      {/* Puedes añadir más secciones y gráficos aquí según lo necesites */}
    </div>
  );
};

export default AnalyticsPage;
