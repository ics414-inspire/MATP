import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

// Mockup Data
const mockLogs = [
  {
    id: 1,
    date: '2024-09-01',
    revenue: 50000,
    expenses: 30000,
    netProfit: 20000,
    assets: 100000,
    liabilities: 40000,
  },
  {
    id: 2,
    date: '2024-09-05',
    revenue: 60000,
    expenses: 35000,
    netProfit: 25000,
    assets: 110000,
    liabilities: 45000,
  },
  {
    id: 3,
    date: '2024-09-08',
    revenue: 55000,
    expenses: 32000,
    netProfit: 23000,
    assets: 105000,
    liabilities: 42000,
  },
  {
    id: 4,
    date: '2024-09-12',
    revenue: 62000,
    expenses: 40000,
    netProfit: 22000,
    assets: 115000,
    liabilities: 46000,
  },
  {
    id: 5,
    date: '2024-09-15',
    revenue: 48000,
    expenses: 28000,
    netProfit: 20000,
    assets: 102000,
    liabilities: 41000,
  },
  {
    id: 6,
    date: '2024-09-18',
    revenue: 70000,
    expenses: 45000,
    netProfit: 25000,
    assets: 120000,
    liabilities: 47000 },
];

const dates = mockLogs.map(log => log.date);
const revenues = mockLogs.map(log => log.revenue);
const expenses = mockLogs.map(log => log.expenses);
const netProfit = mockLogs.map(log => log.netProfit);

const revenueData = {
  labels: dates,
  datasets: [
    {
      label: 'Revenue',
      data: revenues,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      fill: true,
    },
  ],
};
const expensesData = {
  labels: dates,
  datasets: [
    {
      label: 'expenses',
      data: expenses,
      borderColor: 'rgb(192,141,75)',
      backgroundColor: 'rgba(192,141,75,0.2)',
      borderWidth: 2,
      fill: true,
    },
  ],
};
const netProfitData = {
  labels: dates,
  datasets: [
    {
      label: 'Net Profit',
      data: netProfit,
      borderColor: 'rgb(192,141,75)',
      backgroundColor: 'rgba(192,141,75,0.2)',
      borderWidth: 2,
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: 'Date',
      },
      type: 'category',
    },
    y: {
      title: {
        display: true,
        text: 'Amount ($)',
      },
      beginAtZero: false,
      type: 'linear',
    },
  },
};

const UserPage = () => (
  <div className="user-page-container">
    <h1><b> Account Name&apos;s</b></h1>
    <h4>Financial Overview</h4>

    <hr />
    <h2>Your Data Logs</h2>
    <div className="row justify-content-center">
      <div className="col-lg-11">
        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Revenue</th>
              <th>Expenses</th>
              <th>Net Profit</th>
              <th>Assets</th>
              <th>Liabilities</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockLogs.map((log) => (
              <tr key={log.id}>
                <td>{log.date}</td>
                <td>{`$${log.revenue.toLocaleString()}`}</td>
                <td>{`$${log.expenses.toLocaleString()}`}</td>
                <td>{`$${log.netProfit.toLocaleString()}`}</td>
                <td>{`$${log.assets.toLocaleString()}`}</td>
                <td>{`$${log.liabilities.toLocaleString()}`}</td>
                <td>
                  <button type="button" className="view-button">
                    View Data
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <button type="button" className="add-data-button my-3 mx-5 ">
      Add New Data
    </button>
    <hr />
    <div className="chart-container">
      <h2>Revenue Over Time</h2>
      <Line data={revenueData} options={chartOptions} />
    </div>

    <div className="chart-container my-2">
      <div className="row">
        <div className="col-md-6">
          <h2>Net Profit Over Time</h2>
          <Line data={netProfitData} options={chartOptions} />
        </div>
        <div className="col-md-6">
          <h2>Expenses Over Time</h2>
          <Line data={expensesData} options={chartOptions} />
        </div>
      </div>
    </div>
  </div>
);

export default UserPage;
