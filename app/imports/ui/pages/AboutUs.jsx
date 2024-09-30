import React from 'react';

const teamMembers = [
  { name: 'Lucas Sayin', position: 'Partner' },
  { name: 'Tyler Kimura', position: 'Partner' },
  { name: 'Rodney Lee', position: 'Executive Vice President' },
  { name: 'Lani Nakazawa', position: 'Director' },
  { name: 'Lisa Victor', position: 'Director' },
  { name: 'Alain Grant Mahmoud', position: 'Director' },
  { name: 'Creighton Liu', position: 'Director' },
  { name: 'Paul Shiraga', position: 'Senior Manager' },
  // Add more team members as needed
];

const AboutUs = () => {
  return (
    <div className="container mt-5">
      {/* Existing About Us Content */}
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            Welcome to InSpire Hawaii. Our goal is to create an autonomous organization platform for the company SPIRE Hawaii.
          </p>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h3 className="mb-4">Meet Our Team</h3>
        </div>

        {teamMembers.map((member, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3 text-center mb-4" key={index}>
            <h5>{member.name}</h5>
            <p className="text-muted">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
