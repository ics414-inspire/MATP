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

const UserPage = () => (
  <div className="user-page-container">
    <h1> Company Name</h1>
    <h2 className={"my-3"}> Company details </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      A accusantium at atque deleniti dolorum enim esse eum id mollitia nisi,
      provident reprehenderit sit vitae. Beatae dolore fugit nulla sunt vero?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      A accusantium at atque deleniti dolorum enim esse eum id mollitia nisi,
      provident reprehenderit sit vitae. Beatae dolore fugit nulla sunt vero?</p>
    <h2>Your Data Logs</h2>

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
