import React from 'react';
import { Button, Col, Container, Form, Row, Tooltip } from 'react-bootstrap';
import { QuestionCircle } from 'react-bootstrap-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { PAGE_IDS } from '../utilities/PageIDs';

const pettyCashTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);

const cashTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the cash button</Tooltip>
);

const cashInBanksTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);

const accountsReceiveTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the accounts receivable button</Tooltip>
);

const dueFundsTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);

const interestTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);

const prepaidTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);

const notesReceiveTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);

const notesReceiveAfterTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);

const securityTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);

const cashHeldTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);
const mutualFundsTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);
const commingledFundsTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);
const hedgeFundsTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);
const privateEquityTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);
const accountsPayableTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);

const dueToFundTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);

const dueToOtherFund = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Tooltip for the petty cash button</Tooltip>
);

const AuditedBalanceInput = () => (
  <Container id={PAGE_IDS.AUDITED_BALANCE_INPUT} className="input-data-background">
    <Row className="justify-content-center">
      <Col className="mx-auto">
        <Col className="text-center-heading">
          <h2>Audited Balance</h2>
        </Col>
        <Row className="input-data-width">
          <Col>
            <h5 className="section-title">Cash and Cash Equivalents
            </h5>
          </Col>
        </Row>
        <Row className="input-data-width">
          <Col>
            <Form.Group>
              <Form.Label>
                Petty Cash { ' ' }
                <OverlayTrigger placement="top" overlay={pettyCashTt}>
                  <QuestionCircle />
                </OverlayTrigger>
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Cash { ' ' }
                <OverlayTrigger placement="top" overlay={cashTt}>
                  <QuestionCircle />
                </OverlayTrigger>
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Cash in banks/Draw on Line of Credit { ' ' }
                <OverlayTrigger placement="top" overlay={cashInBanksTt}>
                  <QuestionCircle />
                </OverlayTrigger>
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
        </Row>
        <hr className="separator" />

        <Row className="input-data-width margin-top-large margin-bottom-small">
          <Col>
            <h5 className="section-title">Other Assets</h5>
          </Col>
        </Row>
        <Row className="input-data-width">
          <Row className="margin-bottom-medium">
            <Col>
              <Form.Group>
                <Form.Label>Accounts receivable { ' ' }
                  <OverlayTrigger placement="top" overlay={accountsReceiveTt}>
                    <QuestionCircle />
                  </OverlayTrigger>

                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Due from other fund { ' ' }
                  <OverlayTrigger placement="top" overlay={dueFundsTt}>
                    <QuestionCircle />
                  </OverlayTrigger>

                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Interest & dividends receivable { ' ' }
                  <OverlayTrigger placement="top" overlay={interestTt}>
                    <QuestionCircle />
                  </OverlayTrigger>

                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Inv prepaid items & assets { ' ' }
                  <OverlayTrigger placement="top" overlay={prepaidTt}>
                    <QuestionCircle />
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Notes Receivable (1 yr) { ' ' }
                  <OverlayTrigger placement="top" overlay={notesReceiveTt}>
                    <QuestionCircle />
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Notes Receivable (after 1 yr) { ' ' }
                  <OverlayTrigger placement="top" overlay={notesReceiveAfterTt}>
                    <QuestionCircle />
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Security Deposits { ' ' }
                  <OverlayTrigger placement="top" overlay={securityTt}>
                    <QuestionCircle />
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Cash Held by Invest Manager { ' ' }
                  <OverlayTrigger placement="top" overlay={cashHeldTt}>
                    <QuestionCircle />
                  </OverlayTrigger>

                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
          </Row>
        </Row>

        <Row className="input-data-width margin-y-medium">
          <Col>
            <h5 className="section-title">Investments</h5>
          </Col>
        </Row>

        <Row className="margin-bottom-medium input-data-width">
          <Col>
            <Form.Group>
              <Form.Label>Mutual Funds { ' ' }
                <OverlayTrigger placement="top" overlay={mutualFundsTt}>
                  <QuestionCircle />
                </OverlayTrigger>
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Commingled Funds { ' ' }
                <OverlayTrigger placement="top" overlay={commingledFundsTt}>
                  <QuestionCircle />
                </OverlayTrigger>
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Hedge Funds { ' ' }
                <OverlayTrigger placement="top" overlay={hedgeFundsTt}>
                  <QuestionCircle />
                </OverlayTrigger>
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Private Equity { ' ' }
                <OverlayTrigger placement="top" overlay={privateEquityTt}>
                  <QuestionCircle />
                </OverlayTrigger>
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
        </Row>

        <hr className="separator" />

        <Row className="input-data-width margin-top-large margin-bottom-small">
          <Col>
            <h5 className="section-title">Liabilities</h5>
          </Col>
        </Row>
        <Row className="input-data-width">
          <Col>
            <Form.Group>
              <Form.Label>Accounts payable and accrued liabilities { ' ' }
                <OverlayTrigger placement="top" overlay={accountsPayableTt}>
                  <QuestionCircle />
                </OverlayTrigger>
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Due to fund { ' ' }
                <OverlayTrigger placement="top" overlay={dueToFundTt}>
                  <QuestionCircle />
                </OverlayTrigger>
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Due to other fund { ' ' }
                <OverlayTrigger placement="top" overlay={dueToOtherFund}>
                  <QuestionCircle />
                </OverlayTrigger>
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center margin-top-medium">
          <Col xs="auto">
            <Button className="px-5 m-5" type="button">Submit</Button>
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
