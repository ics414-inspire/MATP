import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { QuestionCircle } from 'react-bootstrap-icons';
import { PAGE_IDS } from '../utilities/PageIDs';
import { TOOLTIP_TEXTS } from '../utilities/TooltipTexts';
import TooltipOverlay from '../components/TooltipOverlay';

// eslint-disable-next-line react/prop-types
const AuditedBalanceField = ({ label, tooltip, ...rest }) => (
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

const AuditedBalanceInput = () => (
  <Container id={PAGE_IDS.AUDITED_BALANCE_INPUT} className="input-data-background">
    <Row className="justify-content-center">
      <Col className="mx-auto">
        <Col className="text-center-heading">
          <h2>Audited Balance</h2>
        </Col>
        <Row className="input-data-width">
          <Col>
            <h5 className="section-title">Cash and Cash Equivalents</h5>
          </Col>
        </Row>
        <Row className="input-data-width">
          <Col><AuditedBalanceField label="Petty Cash" tooltip={TOOLTIP_TEXTS.PETTY_CASH} /></Col>
          <Col><AuditedBalanceField label="Cash" tooltip={TOOLTIP_TEXTS.CASH} /></Col>
          <Col><AuditedBalanceField label="Cash in banks/Draw on Line of Credit" tooltip={TOOLTIP_TEXTS.CASH_IN_BANKS} /></Col>
        </Row>
        <hr className="separator" />

        <Row className="input-data-width margin-top-large margin-bottom-small">
          <Col><h5 className="section-title">Other Assets</h5></Col>
        </Row>

        <Row className="input-data-width margin-bottom-medium">
          <Col><AuditedBalanceField label="Accounts receivable" tooltip={TOOLTIP_TEXTS.ACCOUNTS_RECEIVE} /></Col>
          <Col><AuditedBalanceField label="Due from other fund" tooltip={TOOLTIP_TEXTS.DUE_FUNDS} /></Col>
          <Col><AuditedBalanceField label="Interest & dividends receivable" tooltip={TOOLTIP_TEXTS.INTEREST} /></Col>
          <Col><AuditedBalanceField label="Inv prepaid items & assets" tooltip={TOOLTIP_TEXTS.PREPAID} /></Col>
        </Row>

        <Row className="input-data-width">
          <Col><AuditedBalanceField label="Notes Receivable (1 yr)" tooltip={TOOLTIP_TEXTS.NOTES_RECEIVE} /></Col>
          <Col><AuditedBalanceField label="Notes Receivable (after 1 yr)" tooltip={TOOLTIP_TEXTS.NOTES_RECEIVE_AFTER} /></Col>
          <Col><AuditedBalanceField label="Security Deposits" tooltip={TOOLTIP_TEXTS.SECURITY} /></Col>
          <Col><AuditedBalanceField label="Cash Held by Invest Manager" tooltip={TOOLTIP_TEXTS.CASH_HELD} /></Col>
        </Row>

        <Row className="input-data-width margin-y-medium">
          <Col><h5 className="section-title">Investments</h5></Col>
        </Row>

        <Row className="margin-bottom-medium input-data-width">
          <Col><AuditedBalanceField label="Mutual Funds" tooltip={TOOLTIP_TEXTS.MUTUAL_FUNDS} /></Col>
          <Col><AuditedBalanceField label="Commingled Funds" tooltip={TOOLTIP_TEXTS.COMMINGLED_FUNDS} /></Col>
          <Col><AuditedBalanceField label="Hedge Funds" tooltip={TOOLTIP_TEXTS.HEDGE_FUNDS} /></Col>
          <Col><AuditedBalanceField label="Private Equity" tooltip={TOOLTIP_TEXTS.PRIVATE_EQUITY} /></Col>
        </Row>

        <hr className="separator" />

        <Row className="input-data-width margin-top-large margin-bottom-small">
          <Col><h5 className="section-title">Liabilities</h5></Col>
        </Row>

        <Row className="input-data-width">
          <Col><AuditedBalanceField label="Accounts payable and accrued liabilities" tooltip={TOOLTIP_TEXTS.ACCOUNTS_PAYABLE} /></Col>
          <Col><AuditedBalanceField label="Due to fund" tooltip={TOOLTIP_TEXTS.DUE_TO_FUND} /></Col>
          <Col><AuditedBalanceField label="Due to other fund" tooltip={TOOLTIP_TEXTS.DUE_TO_OTHER_FUND} /></Col>
        </Row>

        <Row className="justify-content-center margin-top-medium">
          <Col xs="auto">
            <Button className="px-5 m-5" type="button">Submit</Button>
          </Col>
        </Row>

        <Row className="justify-content-center mt-1">
          <Col xs="auto">
            <Button href="/budgetplinput" className="px-4 mx-5" type="button" style={{ backgroundColor: 'gray', borderColor: 'gray' }}>
              Budget P&L Input
            </Button>
            <Button href="/audited" className="px-5 mx-4" type="button" style={{ backgroundColor: 'gray', borderColor: 'gray' }}>
              Audited Page
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default AuditedBalanceInput;
