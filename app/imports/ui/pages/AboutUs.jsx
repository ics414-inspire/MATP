import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => (
  <Container>
    <Row className="my-5">
      <Col>
        <h2>About Our Platform</h2>
        <p>
          Our platform is designed to simplify and streamline financial data entry and management,
          helping businesses and individuals keep track of their financial health. With a focus on
          accuracy and ease of use, we provide a range of features that make managing your financial
          data straightforward and efficient.
        </p>
        <p>
          Our key features include:
        </p>
        <ul>
          <li>
            <strong>Audited Balance Form:</strong> A comprehensive tool for entering data on the financial
            position, including assets, liabilities, and equity, providing a clear view of the company&apos;s
            financial status.
          </li>
          <li>
            <strong>Budget P&L Form:</strong> A detailed form to capture income and expenses for a given
            fiscal year, helping to analyze profitability and make informed budgeting decisions.
          </li>
          <li>
            <strong>Audited Form:</strong> A centralized form for gathering all critical financial information,
            ensuring accurate reporting and easy data retrieval.
          </li>
        </ul>
        <p>
          Additionally, we offer visual tools and views that enhance your understanding of financial data:
        </p>
      </Col>
    </Row>
    <Row className="my-5">
      <Col md={4}>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Feature 1: Dashboard</Card.Title>
            <Card.Text>
              Dashboard view of all the company assets, providing a quick overview of the organization&apos;s
              financial status.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Feature 2: Assets</Card.Title>
            <Card.Text>
              Individual asset view with detailed information, allowing you to explore specific entries
              and gain deeper insights.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Feature 3: Visualization</Card.Title>
            <Card.Text>
              Visualization tools for the company assets, helping to understand trends and make data-driven
              decisions.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default AboutUs;
