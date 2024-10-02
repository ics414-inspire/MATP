import React from 'react';
import { Button, Col, Container, Form, Row, Tooltip } from 'react-bootstrap';
import { QuestionCircle } from 'react-bootstrap-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { PAGE_IDS } from '../utilities/PageIDs';

const pettyCashTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to a small amount of cash set aside for small fees.</Tooltip>
);

const cashTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to any regular cash for any fees. </Tooltip>
);

const cashInBanksTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to a financial loan that allows a business to borrow up to a certain amount of money.</Tooltip>
);

const accountsReceiveTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Outstanding payment owed to a business.</Tooltip>
);

const dueFundsTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to an asset account that keeps track of funds owed to another company at another firm.</Tooltip>
);

const interestTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Interests receivable is interest that has yet to be collected, and dividends receivable are dividends that a company claims but have yet to be paid to the shareholders.  These are both assets.</Tooltip>
);

const prepaidTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>These are administrative expenses like legal retainers, leases, and other ongoing expenses that are paid in advance.</Tooltip>
);

const notesReceiveTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>These are written promises by the debtor that record the amount they need to pay the creditor.</Tooltip>
);

const notesReceiveAfterTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Notes receivable expected to be paid after a year or longer (non-current asset).</Tooltip>
);

const securityTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Sum paid to a tenant to cover any potential loss or damage.</Tooltip>
);

const cashHeldTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>On-hand liquid assets held by an investment manager for short-term obligations and liquidity needs.</Tooltip>
);
const mutualFundsTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Investment vehicle where funds from multiple shareholders that trades in a variety of holdings. This program is managed by professionals.</Tooltip>
);
const commingledFundsTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>This is a fund accumulated from different investors into one fund courtesy of an investment manager.</Tooltip>
);
const hedgeFundsTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>This is a limited partnership where money from multiple investors using risky methods is pooled and managed by fund managers to make capital gains.</Tooltip>
);
const privateEquityTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>This refers to investments made into private companies not listed on public stock exchanges.</Tooltip>
);
const accountsPayableTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Accruals are expenses that have not been received or paid yet. Accounts payable is a type of accrual where a company receives goods prior to paying for it.</Tooltip>
);

const dueToFundTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>This is the amount of funds due to another company. They can be short term or long term funds. This is generally counted as liability on the balance sheet.</Tooltip>
);

const dueToOtherFund = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>This is amount of funds owed to another fund.</Tooltip>
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
