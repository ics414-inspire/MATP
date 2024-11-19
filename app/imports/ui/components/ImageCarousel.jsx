import React, { useState } from 'react';
import { Carousel, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ width: '1425px', height: '300px', margin: 'auto', backgroundImage: 'url("https://cdn.prod.website-files.com/5fdc0b9dd1ec174b0890bf37/601d7376aaa536a141d25d41_spire-case-study-major-state-agencies.jpg")',
        backgroundSize: 'cover', marginTop: '20px' }}
    >
      <Carousel.Item interval={1500}>
        <ImageSlideContent />
      </Carousel.Item>
      {/* <Carousel.Item>
        <SecondSlideContent />
      </Carousel.Item> */}
    </Carousel>
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

const ImageSlideContent = () => (
  <img
    className="d-block w-100"
    src="https://cdn.prod.website-files.com/5fdc0b9dd1ec174b0890bf37/601d7376aaa536a141d25d41_spire-case-study-major-state-agencies.jpg"
    alt="First slide"
    style={{ height: '300px', objectFit: 'cover' }}
  />
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
