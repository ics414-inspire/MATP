import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

/* This is used as a mockup and doesn't require the schema. Will use the same format */
const AuditedBalanceInput = () => (
  <Container id={PAGE_IDS.AUDITED_BALANCE_INPUT} className="inputDataBackground w-75 py-3 h-100">
    <Row className="justify-content-center">
      <Col className="mx-auto">
        <Col className="text-center pb-4 text-black"><h2>Audited Balance</h2></Col>
        <Row className="inputDataWidth w-100 px-3 my-3">
          <Col>
            <h5 className="section-title">Cash and Cash Equivalents</h5> {/* Subtitle */}
          </Col>
        </Row>
        <Row className="inputDataWidth w-100 px-3">
          <Col>
            <Form.Group>
              <Form.Label>Petty Cash</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Cash</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Cash in banks/Draw on Line of Credit</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
        </Row>
        <hr className="my-5" />

        <Row className="inputDataWidth w-100 px-3 mt-5 mb-2">
          <Col>
            <h5 className="section-title">Other Assets</h5> {/* Subtitle */}
          </Col>
        </Row>
        <Row className="inputDataWidth w-100 px-3">
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Accounts receivable</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Due from other fund</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Interest & dividends receivable</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Inv prepaid items & assets</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Notes Receivable (1 yr)</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Notes Receivable (after 1 yr)</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Security Deposits</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Cash Held by Invest Manager</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
          </Row>
        </Row>
        <Row className="inputDataWidth w-100 px-3 my-3">
          <Col>
            <h5 className="section-title my-3">Investments</h5> {/* Subtitle */}
          </Col>
        </Row>
        <Row className="mb-3 w-100 px-3">
          <Col>
            <Form.Group>
              <Form.Label>Mutual Funds</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Commingled Funds</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Hedge Funds</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Private Equity</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
        </Row>
        <hr className="my-5" />

        <Row className="inputDataWidth w-100 px-3 mt-5 mb-2">
          <Col>
            <h5 className="section-title">Liabilities</h5> {/* Subtitle */}
          </Col>
        </Row>
        <Row className="inputDataWidth w-100 px-3">
          <Col>
            <Form.Group>
              <Form.Label>Accounts payable and accrued liabilities</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Due to fund</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Due to other fund</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs="auto">
            <Button className="px-5 m-5" type="button">Submit</Button> {/* Mock submit button */}
          </Col>
        </Row>
        <Row className="justify-content-center mt-1">
          <Col xs="auto">
            <Button href="/budgetplinput" className="px-4 mx-5" type="button" style={{ backgroundColor: 'gray', borderColor: 'gray' }}>Budget P&L Input</Button>
            <Button href="/audited" className="px-5 mx-4" type="button" style={{ backgroundColor: 'gray', borderColor: 'gray' }}>Audited Page</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default AuditedBalanceInput;
