import React from 'react';

const AboutUs = () => (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <h1 className="display-4">About Us</h1>
        <p className="lead">Welcome to InSpire Hawaii. Our goal is to create an autonomous organization platform for the company SPIRE Hawaii.</p>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-md-6 text-center">
        <img src="path-to-your-image.png" alt="Our Mission" className="img-fluid rounded-circle mb-4" />
        <h2>Our Mission</h2>
        <p>At InSpire Hawaii, we strive to innovate and automate organizational platforms for better efficiency and growth.</p>
      </div>
      <div className="col-md-6 text-center">
        <img src="path-to-another-image.png" alt="Our Values" className="img-fluid rounded-circle mb-4" />
        <h2>Our Values</h2>
        <p>We believe in teamwork, excellence, and delivering impactful solutions to our clients across various sectors.</p>
      </div>
    </div>

    <div className="row mt-4 justify-content-center">
      <div className="col-md-10">
        <h3 className="text-center mb-4">Meet Our Team</h3>
        <div className="row">
          <div className="col-sm-4 text-center">
            <img src="team-member1.png" alt="Team Member 1" className="img-fluid rounded-circle mb-2" />
            <h5>John Doe</h5>
            <p>CEO & Founder</p>
          </div>
          <div className="col-sm-4 text-center">
            <img src="team-member2.png" alt="Team Member 2" className="img-fluid rounded-circle mb-2" />
            <h5>Jane Smith</h5>
            <p>CTO</p>
          </div>
          <div className="col-sm-4 text-center">
            <img src="team-member3.png" alt="Team Member 3" className="img-fluid rounded-circle mb-2" />
            <h5>Mike Johnson</h5>
            <p>Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
