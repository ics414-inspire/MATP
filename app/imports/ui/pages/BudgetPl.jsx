import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

/* This is used as a mockup and doesn't require the schema. */
const BudgetPl = () => (
  <Container id={PAGE_IDS.ADD_STUFF} className="inputDataBackground w-75 py-3 h-100">
    <Row className="justify-content-center">
      <Col className="mx-auto"> {/* Adjust the size as needed */}
        <Col className="text-center pb-4 text-black"><h2>Budget P&L</h2></Col>
        <Row className="inputDataWidth w-100 px-3 my-3">
          <Col>
            <h5 className="section-title">Revenue</h5> {/* Subtitle */}
          </Col>
        </Row>
        <Row className="inputDataWidth w-100 px-3">
          <Col>
            <Form.Group>
              <Form.Label>5% of the Investment Portfolio</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Revenues</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>General Funds</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
        </Row>
        <hr className="my-5" />

        <Row className="inputDataWidth w-100 px-3 mt-5 mb-2">
          <Col>
            <h5 className="section-title">Expenses</h5> {/* Subtitle */}
          </Col>
        </Row>
        <Row className="inputDataWidth w-100 px-3">
          <Row className="mb-3">
            <Col>
              <Form.Group className="w-25">
                <Form.Label>Personnel</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Row className="inputDataWidth w-100 px-3 my-3">
              <Col>
                <h5 className="section-title my-3">Personnel & Fringe</h5> {/* Subtitle */}
              </Col>
            </Row>
            <Col>
              <Form.Group>
                <Form.Label>Program</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Contacts</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Grants</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Travel</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Equipment</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Overhead</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Debt Service</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Other</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
          </Row>
        </Row>
        <hr className="my-5" />

        <Row className="inputDataWidth w-100 px-3 mt-5 mb-2">
          <Col>
            <h5 className="section-title">Surplus Deficit</h5> {/* Subtitle */}
          </Col>
        </Row>
        <Row className="inputDataWidth w-100 px-3">
          <Col>
            <Form.Group>
              <Form.Label>Management</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Support Services</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Beneficiary Advocacy</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4"> {/* Adds margin-top for spacing */}
          <Col xs="auto"> {/* Auto-sizing column for centering */}
            <Button className="px-5 m-5" type="button">Submit</Button> {/* Mock submit button */}
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default BudgetPl;
