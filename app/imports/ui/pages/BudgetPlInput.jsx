import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

const BudgetPlInput = () => (
  <div>
    <Container id={PAGE_IDS.BUDGET_PL_INPUT} className="input-data-background">
      <Row className="justify-content-center">
        <Col className="mx-auto">
          <Col className="text-center-heading">
            <h2>Budget P&L</h2>
          </Col>
          <Row className="input-data-width">
            <Col>
              <h5 id="top" className="section-title">Revenue</h5>
            </Col>
          </Row>
          <Row className="input-data-width">
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
          <hr className="separator" />

          <Row className="input-data-width margin-top-large margin-bottom-small">
            <Col>
              <h5 className="section-title">Expenses</h5>
            </Col>
          </Row>
          <Row className="input-data-width">
            <Row className="margin-bottom-medium">
              <Col>
                <Form.Group className="width-quarter">
                  <Form.Label>Personnel</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
              <Row className="input-data-width margin-y-medium">
                <Col>
                  <h5 className="section-title">Personnel & Fringe</h5>
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
          <hr className="separator" />

          <Row className="input-data-width margin-top-large margin-bottom-small">
            <Col>
              <h5 className="section-title">Surplus Deficit</h5>
            </Col>
          </Row>
          <Row className="input-data-width">
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
          <Row className="justify-content-center margin-top-medium">
            <Col xs="auto">
              <Button className="padding-x-large margin-all-large" type="button">Submit</Button>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="auto">
              <Button href="/auditedbalanceinput" className="px-4 mx-5" type="button" style={{ backgroundColor: 'gray', borderColor: 'gray' }}>Audited Balance Input</Button>
              <Button href="/audited" className="px-5 mx-5" type="button" style={{ backgroundColor: 'gray', borderColor: 'gray' }}>Audited Page</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default BudgetPlInput;
