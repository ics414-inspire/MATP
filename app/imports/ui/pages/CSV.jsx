import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const CSV = () => (
  <Container>
    <Form.Group controlId="formFile" className="mb-3 pt-4">
      <Form.Label>CSV File Input</Form.Label>
      <Form.Control type="file" />
    </Form.Group>
  </Container>
);
export default CSV;
