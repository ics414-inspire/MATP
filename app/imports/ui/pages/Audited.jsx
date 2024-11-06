import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { QuestionCircle } from 'react-bootstrap-icons';
import { PAGE_IDS } from '../utilities/PageIDs';
import { TOOLTIP_TEXTS } from '../utilities/TooltipTexts';
import TooltipOverlay from '../components/TooltipOverlay';

// eslint-disable-next-line react/prop-types
const AuditedField = ({ label, tooltip, ...rest }) => (
  <Form.Group>
    <Form.Label>
      {label}{' '}
      <TooltipOverlay tooltipText={tooltip}>
        <QuestionCircle />
      </TooltipOverlay>
    </Form.Label>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Form.Control type="number" {...rest} />
  </Form.Group>
);

/* This is used as a mockup and doesn't require the schema. Uses the same format */
const Audited = () => (
  <Container id={PAGE_IDS.AUDITED_INPUT} className="inputDataBackground w-75 py-3 h-100">
    <Row className="justify-content-center">
      <Col className="mx-auto">
        <Col className="text-center pb-4 text-black"><h2>Audited</h2></Col>
        <Row className="inputDataWidth w-100 px-3 my-3">
          <Col>
            <h5 className="section-title">Cash and Cash Equivalents</h5> {/* Subtitle */}
          </Col>
        </Row>
        <Row className="inputDataWidth w-100 px-3">
          <Col>

            <AuditedField label="Petty Cash" tooltip={TOOLTIP_TEXTS.PETTY_CASH} />

          </Col>
          <Col>
            <AuditedField label="Cash" tooltip={TOOLTIP_TEXTS.CASH} />
          </Col>
          <Col>
            <AuditedField label="Cash in banks/Draw on Line of Credit" tooltip={TOOLTIP_TEXTS.CASH_IN_BANKS} />
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
              <AuditedField label="Accounts receivable" tooltip={TOOLTIP_TEXTS.ACCOUNTS_RECEIVE} />
            </Col>
            <Col>
              <AuditedField label="Due from other fund" tooltip={TOOLTIP_TEXTS.DUE_FUNDS} />

            </Col>
            <Col>
              <AuditedField label="Interest & dividends receivable" tooltip={TOOLTIP_TEXTS.INTEREST} />
            </Col>
            <Col>
              <AuditedField label="Inv prepaid items & assets" tooltip={TOOLTIP_TEXTS.PREPAID} />
            </Col>
          </Row>
          <Row>
            <Col>
              <AuditedField label="Notes Receivable (1 yr)" tooltip={TOOLTIP_TEXTS.NOTES_RECEIVE} />
            </Col>
            <Col>
              <AuditedField label="Notes Receivable (after 1 yr)" tooltip={TOOLTIP_TEXTS.NOTES_RECEIVE_AFTER} />
            </Col>
            <Col>
              <AuditedField label="Security Deposits" tooltip={TOOLTIP_TEXTS.SECURITY} />
            </Col>
            <Col>
              <AuditedField label="Cash Held by Invest Manager" tooltip={TOOLTIP_TEXTS.CASH_HELD} />
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
            <AuditedField label="Mutual Funds" tooltip={TOOLTIP_TEXTS.MUTUAL_FUNDS} />
          </Col>
          <Col>
            <AuditedField label="Commingled Funds" tooltip={TOOLTIP_TEXTS.COMMINGLED_FUNDS} />
          </Col>
          <Col>
            <AuditedField label="Hedge Funds" tooltip={TOOLTIP_TEXTS.HEDGE_FUNDS} />
          </Col>
          <Col>
            <AuditedField label="Private Equity" tooltip={TOOLTIP_TEXTS.PRIVATE_EQUITY} />
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
            <AuditedField label="Accounts payable and accrued liabilities" tooltip={TOOLTIP_TEXTS.ACCOUNTS_PAYABLE} />
          </Col>
          <Col>
            <AuditedField label="Due to fund" tooltip={TOOLTIP_TEXTS.DUE_TO_FUND} />
          </Col>
          <Col>
            <AuditedField label="Due to other fund" tooltip={TOOLTIP_TEXTS.DUE_TO_OTHER_FUND} />
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs="auto">
            <Button className="px-5 mt-5" type="button">Submit</Button>
          </Col>
        </Row>
        <Row className="justify-content-center mt-1">
          <Col xs="auto">
            <Button href="/auditedbalanceinput" className="px-5 m-5" type="button" style={{ backgroundColor: 'gray', borderColor: 'gray' }}>Audited Balance Input</Button>
            <Button href="/budgetplinput" className="px-5 m-5" type="button" style={{ backgroundColor: 'gray', borderColor: 'gray' }}>Budget P&L Input</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Audited;
