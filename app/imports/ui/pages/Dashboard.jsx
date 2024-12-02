import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SnapShot from '../components/SnapShot';
import Dashboard4yr from '../components/Dashboard4yr';
import Dashboard8yr from '../components/Dashboard8yr';
import Dashboard12yr from '../components/Dashboard12yr';

const Dashboard = () => (
  <Container className="py-3">
    <Row className="text-center mb-3">
      <Col>
        <Link to="snapshot">
          <Button variant="primary" className="mx-2">
            Snap Shot
          </Button>
        </Link>
        <Link to="4yr">
          <Button variant="primary" className="mx-2">
            Dashboard 4yr
          </Button>
        </Link>
        <Link to="8yr">
          <Button variant="primary" className="mx-2">
            Dashboard 8yr
          </Button>
        </Link>
        <Link to="12yr">
          <Button variant="primary" className="mx-2">
            Dashboard 12yr
          </Button>
        </Link>
      </Col>
    </Row>

    {/* Dashboard Content */}
    <Row className="text-center">
      <Col>
        <Routes>
          <Route index element={<SnapShot />} />
          <Route path="snapshot" element={<SnapShot />} />
          <Route path="4yr" element={<Dashboard4yr />} />
          <Route path="8yr" element={<Dashboard8yr />} />
          <Route path="12yr" element={<Dashboard12yr />} />
          <Route path="*" element={<SnapShot />} /> {/* Default to SnapShot */}
        </Routes>
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
