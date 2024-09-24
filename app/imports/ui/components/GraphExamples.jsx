import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const cashFlowTrendsData = [
  { year: 'YEAR 6', cashInflow: 35, cashOutflow: 36 },
  { year: 'YEAR 7', cashInflow: 36, cashOutflow: 37 },
  { year: 'YEAR 8', cashInflow: 37, cashOutflow: 38 },
  { year: 'YEAR 9', cashInflow: 38, cashOutflow: 39 },
  { year: 'YEAR 1', cashInflow: 39, cashOutflow: 40 },
  { year: 'YEAR 2', cashInflow: 40, cashOutflow: 41 },
  { year: 'YEAR 3', cashInflow: 41, cashOutflow: 42 },
  { year: 'YEAR 4', cashInflow: 42, cashOutflow: 43 },
  { year: 'YEAR 5', cashInflow: 43, cashOutflow: 44 },
  { year: 'YEAR 6', cashInflow: 44, cashOutflow: 45 },
];

const CashFlowTrendsChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={cashFlowTrendsData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="cashInflow" stroke="#8884d8" name="Cash Inflow" />
      <Line type="monotone" dataKey="cashOutflow" stroke="#82ca9d" name="Cash Outflow" />
    </LineChart>
  </ResponsiveContainer>
);

export default CashFlowTrendsChart;
