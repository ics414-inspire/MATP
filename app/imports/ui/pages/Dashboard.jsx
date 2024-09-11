import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

const Dashboard = () => (
  <Container id={PAGE_IDS.LANDING} className="py-3">
    <Row className="align-middle text-center">
      <Col xs={4}>
        <Image src="/images/spire_logo.jpg" width="300px" />
      </Col>
      <Col xs={8} className="d-flex flex-column justify-content-center">
        <h1>DASHBOARD</h1>
        <p>Dashboard things</p>
      </Col>

    </Row>
  </Container>
);

export default Dashboard;
