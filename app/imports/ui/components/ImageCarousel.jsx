import React, { useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CashFlowTrendsChart, FinancingChart, BudgetChart } from './GraphExamples';

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
        <div className="carousel-item-custom" style={{ backgroundColor: '#B7E2F2' }}>
          <Container className="d-block w-100">
            <Row className="text-center">
              <Col md={6}>
                <Link to="/auditedbalanceinput">
                  <img
                    className="img-fluid small-enlarge"
                    src="images/audited-balance-form.jpg"
                    alt="Audited Balance Form"
                    style={{ width: '80%' }}
                  />
                </Link>
              </Col>
              <Col md={6}>
                <Link to="/budgetplinput">
                  <img
                    className="img-fluid small-enlarge"
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
                    className="img-fluid small-enlarge"
                    src="images/audited-form.jpeg"
                    alt="audited form"
                    style={{ width: '80%' }}
                  />
                </Link>
              </Col>
              <Col md={6} className="text-start">
                <h2 className="py-3 carousel-text-border">Streamlined Financial Data Entry</h2>
                <h3 className="pt-2 pb-1">
                  <a href="/app/imports/ui/pages/AuditedBalanceSchemaInput" className="btn btn-primary btn-lg btn-enlarge" style={{ backgroundColor: '#25479D', borderColor: '#4CAF50' }}>
                    Audited Balance Form
                  </a>
                  <h6>Data on financial position, including assets, liabilities, and equity</h6>
                </h3>
                <h4 className="py-1">
                  <a href="/budgetplinput" className="btn btn-primary btn-lg btn-enlarge" style={{ backgroundColor: '#25479D', borderColor: '#4CAF50' }}>
                    Budget P&L Form
                  </a>
                  <h6>Capture income and expenses for a given fiscal year</h6>
                </h4>
                <h4 className="py-1">
                  <a href="/audited" className="btn btn-primary btn-lg btn-enlarge" style={{ backgroundColor: '#25479D', borderColor: '#4CAF50' }}>
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
            <Row className="mt-4">
              <Col md={6} className="ps-5">
                <Row className="text-center pt-3 ps-3"><h1>Explore Interactive Dashboards</h1></Row>
                <Row className="justify-content-center pt-3">
                  <Col md={4}>
                    <a href="/budgetplinput" className="btn btn-primary btn-lg btn-enlarge" style={{ backgroundColor: '#8884D8', borderColor: '#4CAF50' }}>
                      Snapshot Data
                    </a>
                  </Col>
                  <Col md={4}>
                    <a href="/budgetplinput" className="btn btn-primary btn-lg btn-enlarge" style={{ backgroundColor: '#8884D8', borderColor: '#4CAF50' }}>
                      Dashboard 4yr
                    </a>
                  </Col>
                </Row>
                <Row className="justify-content-center py-5">
                  <Col md={4}>
                    <a href="/budgetplinput" className="btn btn-primary btn-lg btn-enlarge" style={{ backgroundColor: '#8884D8', borderColor: '#4CAF50' }}>
                      Dashboard 8yr
                    </a>
                  </Col>
                  <Col md={4}>
                    <a href="/budgetplinput" className="btn btn-primary btn-lg btn-enlarge" style={{ backgroundColor: '#8884D8', borderColor: '#4CAF50' }}>
                      Dashboard 12yr
                    </a>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="pt-5">
                <CashFlowTrendsChart />
              </Col>
            </Row>
            <Row className="mt-4 pb-3">
              <Col md={6}>
                <FinancingChart />
              </Col>
              <Col md={6}>
                <BudgetChart />
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>

      {/* Third Slide */}
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/third-slide.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Some description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default ImageCarousel;
