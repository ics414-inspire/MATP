import React, { useState } from 'react';
import { Col, Container, Row, Carousel, Card } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import ImageCarousel from '../components/ImageCarousel';

/* A simple static component to render some text for the landing page. */
const Landing = () => {
  const [index, setIndex] = useState(0);

  // Handle selection of the active slide in the carousel
  // eslint-disable-next-line no-unused-vars
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="landingPage">
      <div className="landing-center">
        <Container id={PAGE_IDS.LANDING} className="py-3">
          <Row className="align-middle text-center">
            <Col xs={12} className="d-flex flex-column justify-content-center">
              <h1>Welcome to InSpire Hawaii</h1>
              <p>
                Our goal is to create an autonomous organization platform for the company SPIRE Hawaii
              </p>
            </Col>
          </Row>

          {/* Integrated Carousel */}
          <Row className="mt-4">
            <Col>
              {/* Set interval to null to disable automatic sliding */}
              <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                <Carousel.Item>
                  <ImageCarousel />
                </Carousel.Item>
                <Carousel.Item>
                  <ImageCarousel />
                </Carousel.Item>
                {/* <Carousel.Item>
                  <ImageCarousel src="images/third-slide.jpg" />
                </Carousel.Item> */}
              </Carousel>
            </Col>
          </Row>
          {/* Features Section */}
          <Row className="mt-7 text-center">
            <Col>
              <h2>Our Features</h2>
              <p>Explore the features that this application has to offer</p>
              <Row className="justify-content-center">
                <Col md={4} className="mb-4">
                  <Card>
                    <Card.Body>
                      <Card.Title>Feature One</Card.Title>
                      <Card.Text>
                        Dashboard view of all the company assets
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="mb-4">
                  <Card>
                    <Card.Body>
                      <Card.Title>Feature Two</Card.Title>
                      <Card.Text>
                        Individual asset view with detailed information
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="mb-4">
                  <Card>
                    <Card.Body>
                      <Card.Title>Feature Three</Card.Title>
                      <Card.Text>
                        Visualization for the company assets
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Landing;
