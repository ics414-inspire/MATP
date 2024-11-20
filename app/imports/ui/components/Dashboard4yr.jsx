import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

const Dashboard4yr = () => { // Hardcoded data for each chart
  const netPositionData = [
    { year: 'YEAR 8', assets: 700, liabilities: 140 },
    { year: 'YEAR 9', assets: 690, liabilities: 120 },
    { year: 'YEAR 1', assets: 700, liabilities: 150 },
    { year: 'YEAR 2', assets: 710, liabilities: 130 },
  ]; const yearsOfSolvencyData = [
    { year: 'YEAR 8', liquidity: 415, opex: 35 },
    { year: 'YEAR 9', liquidity: 420, opex: 36 },
    { year: 'YEAR 1', liquidity: 425, opex: 37 },
    { year: 'YEAR 2', liquidity: 430, opex: 37 },
  ]; const demandForCapitalData = [
    { year: 'YEAR 8', liquidity: 420 },
    { year: 'YEAR 9', liquidity: 430 },
    { year: 'YEAR 1', liquidity: 440 },
    { year: 'YEAR 2', liquidity: 450 },
  ]; const financingData = [
    { year: 'YEAR 8', cashOnHand: 50, debt: 60 },
    { year: 'YEAR 9', cashOnHand: 48, debt: 55 },
    { year: 'YEAR 1', cashOnHand: 47, debt: 50 },
    { year: 'YEAR 2', cashOnHand: 46, debt: 48 },
  ]; const solvencyBasedOnCashFlowData = [
    { year: 'YEAR 8', cashInflow: 35, cashOutflow: 37 },
    { year: 'YEAR 9', cashInflow: 36, cashOutflow: 38 },
    { year: 'YEAR 1', cashInflow: 37, cashOutflow: 39 },
    { year: 'YEAR 2', cashInflow: 38, cashOutflow: 40 },
  ]; const budgetData = [
    { year: 'YEAR 1', budget: 35, actual: 34 },
    { year: 'YEAR 2', budget: 36, actual: 37 },
    { year: 'YEAR 3', budget: 35, actual: 35 },
    { year: 'YEAR 4', budget: 36, actual: 37 },

    { year: 'YEAR 5', budget: 35, actual: 36 },
    { year: 'YEAR 6', budget: 37, actual: 35 },
  ];

  return (
    <Container id={COMPONENT_IDS.DASHBOARD_4YR_PAGE}>
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
        {/* Solvency Based on Cash Flow Chart */}
        <Col md={6}>
          <h4>Table 5: Years of Solvency Based on Cash Flow</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={solvencyBasedOnCashFlowData}>
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

export default Dashboard4yr;
