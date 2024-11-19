import React, { useState } from 'react';
import { Carousel, Col, Row, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FinancingChart } from './GraphExamples';

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      controls={false}
      style={{ width: '1425px', height: '500px' }}
      className="carousel-background py-0"
    >
      <Carousel.Item interval={3000} className="p-5">
        <FirstSlideContent />
      </Carousel.Item>
      <Carousel.Item interval={3000} className="p-5">
        <SecondSlideContent />
      </Carousel.Item>
    </Carousel>
  );
};

const FirstSlideContent = () => (
  <div className="d-block w-100 text-white">
    <Row className="text-center grey-box">
      <Col md={6} className="text-start">
        <h2 className="py-3 carousel-text-border">Financial Data Entry</h2>
        <ButtonLink path="/auditedbalanceinput" text="Audited Balance Form" description="Data on financial position, including assets, liabilities, and equity" />
        <ButtonLink path="/budgetplinput" text="Budget P&L Form" description="Capture income and expenses for a given fiscal year" />
        <ButtonLink path="/audited" text="Audited Form" description="Gather comprehensive financial information" />
      </Col>
    </Row>
  </div>
);

const SecondSlideContent = () => (
  <Container className="d-block w-100">
    <Row>
      <Col md={6} className="d-flex align-items-center pt-3 mt-5 white-box">
        <h1>Interactive Graphs</h1>
        <FinancingChart />
      </Col>
      <Col md={6} className="mt-5 justify-content-center">
        <Row className="justify-content-center pt-3">
          <DashboardButton text="Snapshot Data" path="/budgetplinput" />
        </Row>
        <Row className="justify-content-center pt-3">
          <DashboardButton text="Dashboard 4yr" path="/budgetplinput" />
        </Row>
        <Row className="justify-content-center pt-3">
          <DashboardButton text="Dashboard 8yr" path="/budgetplinput" />
        </Row>
        <Row className="justify-content-center pt-3">
          <DashboardButton text="Dashboard 12yr" path="/budgetplinput" />
        </Row>
      </Col>
    </Row>
  </Container>
);

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
