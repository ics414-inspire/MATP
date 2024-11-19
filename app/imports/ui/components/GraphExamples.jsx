import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data, lines, title }) => (
  <ResponsiveContainer width="100%" height={300} className="text-center">
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      {lines.map((line, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey={line.dataKey}
          stroke={line.stroke}
          name={line.name}
        />
      ))}
    </LineChart>
    <h7>{title}</h7>
  </ResponsiveContainer>
);

// Define PropTypes with a specific shape for `data`
Chart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      cashInflow: PropTypes.number, // replace or add properties based on your specific data structure
      cashOutflow: PropTypes.number,
      cashOnHand: PropTypes.number,
      debt: PropTypes.number,
      budget: PropTypes.number,
      actual: PropTypes.number,
    }),
  ).isRequired,
  lines: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      stroke: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

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

// Line configurations
const cashFlowTrendsLines = [
  { dataKey: 'cashInflow', stroke: '#8884d8', name: 'Cash Inflow' },
  { dataKey: 'cashOutflow', stroke: '#82ca9d', name: 'Cash Outflow' },
];

const financingLines = [
  { dataKey: 'cashOnHand', stroke: '#8884d8', name: 'Cash on Hand' },
  { dataKey: 'debt', stroke: '#82ca9d', name: 'Debt' },
];

const budgetLines = [
  { dataKey: 'budget', stroke: '#8884d8', name: 'Budget' },
  { dataKey: 'actual', stroke: '#82ca9d', name: 'Actual' },
];

/* Cash Flow Trends Chart From Dashboard 12 yr */
export const CashFlowTrendsChart = () => (
  <Chart data={cashFlowTrendsData} lines={cashFlowTrendsLines} title="Cash Flow Trends" />
);

/* Financing Chart From Dashboard 12 yr */

export const FinancingChart = () => (
  <Chart data={financingData} lines={financingLines} title=" " />
);

/* Budget Chart From Dashboard 12 yr */

export const BudgetChart = () => (
  <Chart data={budgetData} lines={budgetLines} title="Budget" />
);
