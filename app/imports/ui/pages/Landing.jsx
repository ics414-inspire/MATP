import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import ImageCarousel from '../components/ImageCarousel';

/* A simple static component to render some text for the landing page. */
const Landing = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  // eslint-disable-next-line no-unused-vars
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Handle selection of the active slide in the carousel
  // eslint-disable-next-line no-unused-vars
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Handler to navigate to the sign-in page
  const handleGetStartedClick = () => {
    if (currentUser) {
      navigate('/dashboard'); // Navigate to the dashboard if the user is signed in
    } else {
      navigate('/signin-signup?form=signin'); // Navigate to the sign-in page if the user is not signed in
    }
  };

  // const featureLink = currentUser ? '/dashboard' : '/signin-signup?form=signin';

  return (
    <>
      {/* Background image section with overlay text */}
      <div className="landingPage">
        <div className="overlay-text">
          <h1><strong>Welcome to InSpire Hawai{'\u02BB'}i</strong></h1>
          <p>Our goal is to create an autonomous organization platform for the company SPIRE Hawai{'\u02BB'}i</p>
          <button type="button" className="get-started-button" onClick={handleGetStartedClick}>Get Started</button>
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
                <h3>Feature 1: Dashboard</h3>
                <p>Dashboard view of all the company assets</p>
              </div>
              <div className="g-col-4 feature-card">
                <i className="fas fa-eye feature-icon" />
                <h3>Feature 2: Assets</h3>
                <p>Individual asset view with detailed information</p>
              </div>
              <div className="g-col-4 feature-card">
                <i className="fas fa-chart-pie feature-icon" />
                <h3>Feature 3: Visualization</h3>
                <p>Visualization for the company assets</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <ImageCarousel />
    </>
  );
};

export default Landing;
