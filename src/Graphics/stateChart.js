import React, { useState } from 'react';
import { Chart } from 'react-google-charts';


const StateChart = () => {
  const [chartData] = useState([
    ['Estado', 'Número de Trabajadores'],
    ['Evaluado', 8],
    ['En Intervención', 10],
    ['Intervenido', 19],
  ]);

  return (
    <div>
      <Chart
        width={'100%'}
        height={'250px'} // Ajustar según tus necesidades
        chartType="Bar"
        loader={<div>Cargando Gráfico</div>}
        data={chartData}
        options={{
          title: 'Número de Trabajadores por Estado',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'N° de Trabajadores',
            minValue: 0,
          },
          vAxis: {
            title: 'Estado',
          },
          bars: 'horizontal',
        }}
      />
    </div>
  );
};

export default StateChart;
