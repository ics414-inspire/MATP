import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Carousel } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import ImageCarousel from '../components/ImageCarousel';

/* A simple static component to render some text for the landing page. */
const Landing = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Handle selection of the active slide in the carousel
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Handler to navigate to the sign-in page
  const handleGetStartedClick = () => {
    navigate('/signin'); // Replace '/signin' with the correct path for your sign-in page
  };

  return (
    <>
      {/* Background image section with overlay text */}
      <div className="landingPage">
        <div className="overlay-text">
          <h1><strong>Welcome to InSpire Hawai{'\u02BB'}i</strong></h1>
          <p>Our goal is to create an autonomous organization platform for the company SPIRE Hawai{'\u02BB'}i</p>
          <button className="get-started-button" onClick={handleGetStartedClick}>Get Started</button>
        </div>
      </div>

      {/* Main content section */}
      <div className="content-section">
        <Container id={PAGE_IDS.LANDING} className="py-3">

          {/* Features Section */}
          <div className="features-section text-center">
            <h2>Our Features</h2>
            <p>Explore the features that this application has to offer</p>
            <div className="grid">
              <div className="g-col-4 feature-card">
                <i className="fas fa-chart-line feature-icon" />
                <h3>Feature One</h3>
                <p>Dashboard view of all the company assets</p>
              </div>
              <div className="g-col-4 feature-card">
                <i className="fas fa-eye feature-icon" />
                <h3>Feature Two</h3>
                <p>Individual asset view with detailed information</p>
              </div>
              <div className="g-col-4 feature-card">
                <i className="fas fa-chart-pie feature-icon" />
                <h3>Feature Three</h3>
                <p>Visualization for the company assets</p>
              </div>
            </div>
          </div>

          {/* Integrated Carousel */}
          <div className="carousel-section mt-5">
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
              <Carousel.Item>
                <ImageCarousel />
              </Carousel.Item>
              <Carousel.Item>
                <ImageCarousel />
              </Carousel.Item>
            </Carousel>
          </div>

        </Container>
      </div>
    </>
  );
};

export default Landing;
