import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Utils/navbar';
import Sidebar from './Utils/sidebar';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import WorkerAdministrationPage from './Pages/workersAdmin';
import AnalyticsPage from './Pages/AnalyticsPage';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10">
              <main className="ms-sm-auto px-md-4 mt-5">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/worker-administration" element={<WorkerAdministrationPage/>} />
                  <Route path="/analytics" element={<AnalyticsPage />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
