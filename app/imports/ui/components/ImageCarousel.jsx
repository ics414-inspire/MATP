import React, { useState } from 'react';
import { Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CashFlowTrendsChart, FinancingChart, BudgetChart } from './GraphExamples';

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <div className="carousel-wrapper">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <FirstSlideContent />
        </Carousel.Item>
        {/* <Carousel.Item>
          <SecondSlideContent />
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

const FirstSlideContent = () => (
  <div className="d-block w-100 text-white">
    <Row className="text-center">
      <Col md={6} className="text-start">
        <h2 className="py-3 carousel-text-border">Streamlined Financial Data Entry</h2>
        <ButtonLink path="/auditedbalanceinput" text="Audited Balance Form" description="Data on financial position, including assets, liabilities, and equity" />
        <ButtonLink path="/budgetplinput" text="Budget P&L Form" description="Capture income and expenses for a given fiscal year" />
        <ButtonLink path="/audited" text="Audited Form" description="Gather comprehensive financial information" />
      </Col>
    </Row>
  </div>
);

/* const SecondSlideContent = () => (
  <Container className="d-block w-100">
    <Row className="mt-4">
      <Col md={6} className="ps-5">
        <Row className="text-center pt-3 ps-3">
          <h1>Explore Interactive Dashboards</h1>
        </Row>
        <Row className="justify-content-center pt-3">
          <DashboardButton text="Snapshot Data" path="/budgetplinput" />
          <DashboardButton text="Dashboard 4yr" path="/budgetplinput" />
          <DashboardButton text="Dashboard 8yr" path="/budgetplinput" />
          <DashboardButton text="Dashboard 12yr" path="/budgetplinput" />
        </Row>
      </Col>
      <Col md={6} className="pt-5">
        <CashFlowTrendsChart />
      </Col>
    </Row>
    <Row className="mt-4 pb-3">
      <Col md={6}><FinancingChart /></Col>
      <Col md={6}><BudgetChart /></Col>
    </Row>
  </Container>
); */

const ButtonLink = ({ path, text, description }) => (
  <div className="py-1">
    <Link to={path} className="btn btn-primary btn-lg btn-enlarge custom-btn">
      {text}
    </Link>
    <h6>{description}</h6>
  </div>
);

const DashboardButton = ({ text, path }) => (
  <Col md={4} className="py-2">
    <Button as={Link} to={path} className="btn btn-primary btn-lg btn-enlarge custom-btn">
      {text}
    </Button>
  </Col>
);

export default ImageCarousel;
