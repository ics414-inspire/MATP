import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
      <Col xs={4}>
  <div className="landingPage">
    <div className="landing-center">
      <Container id={PAGE_IDS.LANDING} className="py-3">
        <Row className="align-middle text-center">

          <Col xs={-5} className="d-flex flex-column justify-content-center">
            <h1>Welcome to InSpire Hawaii</h1>
            <p>Our goal is to create an autonomous organization platform for the company SPIRE Hawaii</p>
          </Col>

        </Row>
      </Container>
    </div>
  </div>
);

export default Landing;
