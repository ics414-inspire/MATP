import React from 'react';

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
];

const UserPage = () => (
  <div className="user-page-container">
    <h1>Your Data Logs</h1>

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
        {mockLogs.map((log, index) => (
          <tr key={index}>
            <td>{log.date}</td>
            <td>{`$${log.revenue.toLocaleString()}`}</td>
            <td>{`$${log.expenses.toLocaleString()}`}</td>
            <td>{`$${log.netProfit.toLocaleString()}`}</td>
            <td>{`$${log.assets.toLocaleString()}`}</td>
            <td>{`$${log.liabilities.toLocaleString()}`}</td>
            <td>
              <button className="view-button">
                View Data
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <button className="add-data-button my-3">
      Add New Data
    </button>
  </div>
);

export default UserPage;
