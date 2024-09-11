import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <Container>
      <hr />
      <Row>
        <Col md={2}>
          <h5>OUR FIRM</h5>
          <ul className="list-unstyled">
            <li>Our Philosophy</li>
            <li>Our Roots</li>
            <li>Our Team</li>
            <li>Our Community</li>
            <li>Spire New York</li>
            <li>Careers</li>
          </ul>
        </Col>
        <Col md={2}>
          <h5>OUR WORK</h5>
          <ul className="list-unstyled">
            <li>Government</li>
            <li>Private Industry</li>
          </ul>
        </Col>
        <Col md={2}>
          <h5>OUR SERVICES</h5>
          <ul className="list-unstyled">
            <li>Assurance</li>
            <li>Legal Support</li>
            <li>Accounting</li>
            <li>Change Management</li>
            <li>Consulting</li>
            <li>IT Consulting</li>
          </ul>
        </Col>
        <Col md={3}>
          <h5>CONTACT US</h5>
          <address>
            700 Bishop Street,<br />
            Suite 2001<br />
            Honolulu, Hawaii<br />
            96813<br />
            (808) 536-0066<br />
            <a href="mailto:contactus@spirehi.com">contactus@spirehi.com</a>
          </address>
        </Col>
        <Col md={2}>
          <h5>FOLLOW ALONG</h5>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/company/spire-hawaii-llp/" aria-label="LinkedIn profile"><FaLinkedin /></a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/spirehawaii/" aria-label="Instagram profile"><FaInstagram /></a>
            </li>
            <li className="list-inline-item">
              <a href="https://x.com/spirehawaii" aria-label="Twitter profile"><FaTwitter /></a>
            </li>
          </ul>
        </Col>
        <Col md={1}>
          {/* Add logos here */}
          <a href="/" aria-label="Spire Hawaii Landing Page">
            <img
              src="https://github.com/manoa-inspire/MATP/blob/issue-32/app/public/images/spire_logo.jpg?raw=true"
              alt="Spire Hawaii Logo"
              className="footer-logo"
            />
          </a>
          <img src="https://github.com/manoa-inspire/MATP/blob/issue-32/app/public/images/aicpa_logo.png?raw=true" alt="Logo 2" className="footer-logo" />
          <img src="https://github.com/manoa-inspire/MATP/blob/issue-32/app/public/images/allinial.png?raw=true" alt="Logo 2" className="footer-logo" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center py-3">
          © Spire Hawaii LLP 2023
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
