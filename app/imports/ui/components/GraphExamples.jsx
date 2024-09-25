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

const financingData = [
  { year: 'YEAR 8', cashOnHand: 50, debt: 60 },
  { year: 'YEAR 9', cashOnHand: 48, debt: 55 },
  { year: 'YEAR 1', cashOnHand: 47, debt: 50 },
  { year: 'YEAR 2', cashOnHand: 46, debt: 45 },
  { year: 'YEAR 3', cashOnHand: 45, debt: 42 },
  { year: 'YEAR 4', cashOnHand: 44, debt: 40 },
  { year: 'YEAR 5', cashOnHand: 43, debt: 38 },
  { year: 'YEAR 6', cashOnHand: 42, debt: 36 },
  { year: 'YEAR 7', cashOnHand: 41, debt: 34 },
  { year: 'YEAR 8', cashOnHand: 40, debt: 32 },
  { year: 'YEAR 9', cashOnHand: 39, debt: 30 },
  { year: 'YEAR 10', cashOnHand: 38, debt: 28 },
];

const budgetData = [
  { year: 'YEAR 1', budget: 35, actual: 34 },
  { year: 'YEAR 2', budget: 36, actual: 37 },
  { year: 'YEAR 3', budget: 35, actual: 35 },
  { year: 'YEAR 4', budget: 36, actual: 37 },
  { year: 'YEAR 5', budget: 35, actual: 36 },
  { year: 'YEAR 6', budget: 37, actual: 35 },
];

/* Cash Flow Trends Chart From Dashboard 12 yr */
export const CashFlowTrendsChart = () => (
  <ResponsiveContainer width="100%" height={300} className="text-center">
    <LineChart data={cashFlowTrendsData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="cashInflow" stroke="#8884d8" name="Cash Inflow" />
      <Line type="monotone" dataKey="cashOutflow" stroke="#82ca9d" name="Cash Outflow" />
    </LineChart>
    <h7>Cash Flow Trends</h7>
  </ResponsiveContainer>
);

/* Financing Chart From Dashboard 12 yr */
export const FinancingChart = () => (
  <ResponsiveContainer width="100%" height={300} className="text-center">
    <LineChart data={financingData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="cashOnHand" stroke="#8884d8" name="Cash on Hand" />
      <Line type="monotone" dataKey="debt" stroke="#82ca9d" name="Debt" />
    </LineChart>
    <h7>Financing</h7>
  </ResponsiveContainer>
);

/* Budget Chart From Dashboard 12 yr */
export const BudgetChart = () => (
  <ResponsiveContainer width="100%" height={300} className="text-center">
    <LineChart data={budgetData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="budget" stroke="#8884d8" name="Budget" />
      <Line type="monotone" dataKey="actual" stroke="#82ca9d" name="Actual" />
    </LineChart>
    <h7>Budget</h7>
  </ResponsiveContainer>
);
