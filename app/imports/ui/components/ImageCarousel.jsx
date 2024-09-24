import React, { useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Columns } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import CashFlowTrendsChart from './GraphExamples';

const ImageCarousel = () => {
  // State to track the currently active slide
  const [index, setIndex] = useState(0);

  // Function to handle when a slide is selected
  // eslint-disable-next-line no-unused-vars
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {/* First Slide: "Data Input Made Simple" */}
      <Carousel.Item>
        <div className="carousel-item-custom" style={{ backgroundColor: '#628FCA' }}>
          <Container className="d-block w-100">
            <Row className="text-center">
              <Col md={6}>
                <Link to="/auditedbalanceinput">
                  <img
                    className="img-fluid"
                    src="images/audited-balance-form.jpg"
                    alt="Audited Balance Form"
                    style={{ width: '80%' }}
                  />
                </Link>
              </Col>
              <Col md={6}>
                <Link to="/budgetplinput">
                  <img
                    className="img-fluid"
                    src="images/budget-form.jpeg"
                    alt="budget form"
                    style={{ width: '80%' }}
                  />
                </Link>
              </Col>
            </Row>
            <Row className="text-center">
              <Col md={6}>
                <Link to="/audited">
                  <img
                    className="img-fluid"
                    src="images/audited-form.jpeg"
                    alt="audited form"
                    style={{ width: '80%' }}
                  />
                </Link>
              </Col>
              <Col md={6} className="text-start">
                <h2 className="text-white py-3 carousel-text-border">Streamlined Financial Data Entry</h2>
                <h3 className="text-white pt-2 pb-1">
                  <a href="/auditedbalanceinput" className="btn btn-primary btn-lg" style={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50' }}>
                    Audited Balance Form
                  </a>
                  <h6>Data on financial position, including assets, liabilities, and equity</h6>
                </h3>
                <h4 className="text-white py-1">
                  <a href="/budgetplinput" className="btn btn-primary btn-lg" style={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50' }}>
                    Budget P&L Form
                  </a>
                  <h6>Capture income and expenses for a given fiscal year</h6>
                </h4>
                <h4 className="text-white py-1">
                  <a href="/audited" className="btn btn-primary btn-lg" style={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50' }}>
                    Audited Form
                  </a>
                  <h6>Gather comprehensive financial information</h6>
                </h4>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>

      {/* Second Slide: Examples of Dashboard Graphs */}
      <Carousel.Item>
        <div className="carousel-item-custom" style={{ backgroundColor: '#B7E2F2' }}>
          <Container className="d-block w-100">
            <Row className="text-center">
              <h3>Interactive Financial Dashboard</h3>
            </Row>
            <Row className="mt-4">
              <Col md={6}>
                <CashFlowTrendsChart />
              </Col>
              <Col md={6}>
                <CashFlowTrendsChart />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={6}>
                <CashFlowTrendsChart />
              </Col>
              <Col md={6}>
                <Row className="text-center"><h3>description stuff</h3></Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/third-slide.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Some description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
