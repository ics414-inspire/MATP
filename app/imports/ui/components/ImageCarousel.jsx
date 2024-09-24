import React, { useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import { Columns } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

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
      {/* First Slide */}
      <Carousel.Item>
        <Container className="d-block w-100">
          <Row className="text-center"> <h1>Easy Form Access</h1></Row>
          <Row className="text-center">
            <div className="col-md-4">
              <Link to="/auditedbalanceinput">
                <img
                  className="d-block w-100"
                  src="images/audited-balance-form.jpg"
                  alt="Audited Balance Form"
                />
              </Link>
              <h3>Audited Balance Form</h3>
            </div>
            <div className="col-md-4">
              <Link to="/budgetplinput">
                <img
                  className="d-block w-100"
                  src="images/budget-form.jpeg"
                  alt="budget form"
                />
              </Link>
              <h3>Budget P&L Form</h3>
            </div>
            <div className="col-md-4">
              <Link to="/audited">
                <img
                  className="d-block w-100"
                  src="images/audited-form.jpeg"
                  alt="audited form"
                />
              </Link>
              <h3>Audited Form</h3>
            </div>
          </Row>
        </Container>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/second-slide.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Some description for the second slide.</p>
        </Carousel.Caption>
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
