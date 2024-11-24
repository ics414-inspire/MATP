import { Col, Container, Row } from 'react-bootstrap';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import React from 'react';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

const Dashboard12yr = () => { // Hardcoded data for each chart (based on the image you provided)
  const netPositionData = [
    { year: 'YEAR 8', assets: 690, liabilities: 130 },
    { year: 'YEAR 9', assets: 700, liabilities: 125 },
    { year: 'YEAR 1', assets: 710, liabilities: 120 },
    { year: 'YEAR 2', assets: 720, liabilities: 110 },
    { year: 'YEAR 3', assets: 730, liabilities: 105 },
    { year: 'YEAR 4', assets: 740, liabilities: 100 },
    { year: 'YEAR 5', assets: 750, liabilities: 95 },
    { year: 'YEAR 6', assets: 760, liabilities: 90 },
    { year: 'YEAR 7', assets: 770, liabilities: 85 },
    { year: 'YEAR 8', assets: 780, liabilities: 80 },
    { year: 'YEAR 9', assets: 790, liabilities: 75 },
    { year: 'YEAR 10', assets: 800, liabilities: 70 },
  ];

  const yearsOfSolvencyData = [
    { year: 'YEAR 8', liquidity: 430, opex: 35 },
    { year: 'YEAR 9', liquidity: 440, opex: 36 },
    { year: 'YEAR 1', liquidity: 450, opex: 37 },
    { year: 'YEAR 2', liquidity: 460, opex: 38 },
    { year: 'YEAR 3', liquidity: 470, opex: 39 },
    { year: 'YEAR 4', liquidity: 480, opex: 40 },
    { year: 'YEAR 5', liquidity: 490, opex: 41 },
    { year: 'YEAR 6', liquidity: 500, opex: 42 },
    { year: 'YEAR 7', liquidity: 510, opex: 43 },
    { year: 'YEAR 8', liquidity: 520, opex: 44 },
  ];

  const demandForCapitalData = [
    { year: 'YEAR 8', liquidity: 500 },
    { year: 'YEAR 9', liquidity: 510 },
    { year: 'YEAR 1', liquidity: 520 },
    { year: 'YEAR 2', liquidity: 530 },
    { year: 'YEAR 3', liquidity: 540 },
    { year: 'YEAR 4', liquidity: 550 },
    { year: 'YEAR 5', liquidity: 560 },
    { year: 'YEAR 6', liquidity: 570 },
    { year: 'YEAR 7', liquidity: 580 },
    { year: 'YEAR 8', liquidity: 590 },
    { year: 'YEAR 9', liquidity: 600 },
    { year: 'YEAR 10', liquidity: 610 },
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

  const budgetData = [
    { year: 'YEAR 1', budget: 35, actual: 34 },
    { year: 'YEAR 2', budget: 36, actual: 37 },
    { year: 'YEAR 3', budget: 35, actual: 35 },
    { year: 'YEAR 4', budget: 36, actual: 37 },
    { year: 'YEAR 5', budget: 35, actual: 36 },
    { year: 'YEAR 6', budget: 37, actual: 35 },
  ];

  return (
    <Container id={COMPONENT_IDS.DASHBOARD_12YR_PAGE}>
      <Row>
        {/* Net Position Chart */}
        <Col md={6}>
          <h4>Table 1: Net Position</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={netPositionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="assets" stroke="#8884d8" name="Assets" />
              <Line type="monotone" dataKey="liabilities" stroke="#82ca9d" name="Liabilities" />
            </LineChart>
          </ResponsiveContainer>
        </Col>

        {/* Years of Solvency Chart */}
        <Col md={6}>
          <h4>Table 2: Years of Solvency</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={yearsOfSolvencyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="liquidity" stroke="#8884d8" name="Liquidity" />
              <Line type="monotone" dataKey="opex" stroke="#82ca9d" name="Opex" />
            </LineChart>
          </ResponsiveContainer>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Demand for Capital Chart */}
        <Col md={6}>
          <h4>Table 3: Demand for Capital</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={demandForCapitalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="liquidity" stroke="#8884d8" name="Liquidity" />
            </LineChart>
          </ResponsiveContainer>
        </Col>

        {/* Financing Chart */}
        <Col md={6}>
          <h4>Table 4: Financing</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={financingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="cashOnHand" stroke="#8884d8" name="Cash on Hand" />
              <Line type="monotone" dataKey="debt" stroke="#82ca9d" name="Debt" />
            </LineChart>
          </ResponsiveContainer>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Cash Flow Trends Chart */}
        <Col md={6}>
          <h4>Table 5: Cash Flow Trends</h4>
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
        </Col>

        {/* Budget Chart */}
        <Col md={6}>
          <h4>Table 6: Budget</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={budgetData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="budget" stroke="#8884d8" name="Budget" />
              <Line type="monotone" dataKey="actual" stroke="#82ca9d" name="Actual" />
            </LineChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard12yr;
