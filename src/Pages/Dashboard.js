import React from 'react';
import StateChart from '../Graphics/stateChart.js';
import WorkersList from '../Components/workersList.js';

const Dashboard = () => {
  return (
    <div className="d-flex flex-column" style={{ height: '100%' }}>
      <div className="mt-5"> {/* Aplicando margen top de 16 píxeles */}
        <StateChart />
      </div>
      <div style={{ flex: 1, marginTop: 50 }}>
        <WorkersList />
      </div>
    </div>
  );
};

export default Dashboard;
