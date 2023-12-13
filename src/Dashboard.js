// Dashboard.js
import React from 'react';
import App from './App';
import ApexChart from './ApexChart';
import DonutChart from './DonutChart';
import PyramidChart from './PyramidChart';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center mt-4">Tablero IWS</h1>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="chart-container">
                <h2 className="text-center">Venta 2024</h2>
                <ApexChart />
              </div>
            </div>
            <div className="col-md-6">
              <div className="chart-container">
                <h2 className="text-center">Mejor Vendedor</h2>
                <DonutChart />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="chart-container">
                <h2 className="text-center">Ventas</h2>
                <PyramidChart />
              </div>
            </div>
            <div className="col-md-6">
              <div className="app-container">
                <h2 className="text-center">Binance</h2>
                <App />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
