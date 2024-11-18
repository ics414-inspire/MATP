import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { QuestionCircle } from 'react-bootstrap-icons';
import { PAGE_IDS } from '../utilities/PageIDs';
import { TOOLTIP_TEXTS } from '../utilities/TooltipTexts';
import TooltipOverlay from '../components/TooltipOverlay';

const percentages = [
  {
    year: 2,
    percentages: {
      pension_accumulation: 15.00,
      retiree_health_insurance: 7.96,
      other_post_employment_benefits: 0.00,
      employees_health_fund: 7.02,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.22,
      unemployment_compensation: 0.91,
      pension_administration: 0.00,
      composite_rate: 39.76,
    },
  },
  {
    year: 3,
    percentages: {
      pension_accumulation: 15.50,
      retiree_health_insurance: 10.35,
      other_post_employment_benefits: 0.00,
      employees_health_fund: 6.84,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 0.88,
      unemployment_compensation: 0.31,
      pension_administration: 0.01,
      composite_rate: 41.54,
    },
  },
  {
    year: 4,
    percentages: {
      pension_accumulation: 16.00,
      retiree_health_insurance: 10.12,
      other_post_employment_benefits: 0.00,
      employees_health_fund: 6.81,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.16,
      unemployment_compensation: 0.25,
      pension_administration: 0.00,
      composite_rate: 41.99,
    },
  },
  {
    year: 5,
    percentages: {
      pension_accumulation: 16.50,
      retiree_health_insurance: 10.12,
      other_post_employment_benefits: 0.00,
      employees_health_fund: 6.81,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.16,
      unemployment_compensation: 0.25,
      pension_administration: 0.00,
      composite_rate: 42.49,
    },
  },
  {
    year: 6,
    percentages: {
      pension_accumulation: 17.00,
      retiree_health_insurance: 8.07,
      other_post_employment_benefits: 7.78,
      employees_health_fund: 7.62,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.27,
      unemployment_compensation: 0.15,
      pension_administration: 0.00,
      composite_rate: 49.54,
    },
  },
  {
    year: 7,
    percentages: {
      pension_accumulation: 17.00,
      retiree_health_insurance: 9.39,
      other_post_employment_benefits: 12.69,
      employees_health_fund: 7.60,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.06,
      unemployment_compensation: 0.09,
      pension_administration: 0.01,
      composite_rate: 55.48,
    },
  },
  {
    year: 8,
    percentages: {
      pension_accumulation: 18.00,
      retiree_health_insurance: 10.14,
      other_post_employment_benefits: 14.33,
      employees_health_fund: 7.69,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.24,
      unemployment_compensation: 0.02,
      pension_administration: 0.01,
      composite_rate: 59.08,
    },
  },
  {
    year: 9,
    percentages: {
      pension_accumulation: 19.00,
      retiree_health_insurance: 10.14,
      other_post_employment_benefits: 14.33,
      employees_health_fund: 7.69,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.24,
      unemployment_compensation: 0.02,
      pension_administration: 0.01,
      composite_rate: 60.08,
    },
  },
  {
    year: 10,
    percentages: {
      pension_accumulation: 22.00,
      retiree_health_insurance: 10.14,
      other_post_employment_benefits: 14.33,
      employees_health_fund: 7.69,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.24,
      unemployment_compensation: 0.02,
      pension_administration: 0.01,
      composite_rate: 63.08,
    },
  },
];
// eslint-disable-next-line react/prop-types
const BudgetField = ({ label, tooltip, ...rest }) => (
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
              <BudgetField label="5% of the Investment Portfolio" tooltip={TOOLTIP_TEXTS.INVESTMENT_PORTFOLIO} />
            </Col>
            <Col>
              <BudgetField label="Revenues" tooltip={TOOLTIP_TEXTS.REVENUES} />
            </Col>
            <Col>
              <BudgetField label="General Funds" tooltip={TOOLTIP_TEXTS.GENERAL_FUNDS} />
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
                <BudgetField label="Personnel" tooltip={TOOLTIP_TEXTS.PERSONNEL} />
              </Col>
              <Row className="input-data-width margin-y-medium">
                <Col>
                  <h5 className="section-title">Personnel & Fringe</h5>
                </Col>
              </Row>
              <Col>
                <BudgetField label="Program" tooltip={TOOLTIP_TEXTS.PROGRAM} />
              </Col>
              <Col>
                <BudgetField label="Contacts" tooltip={TOOLTIP_TEXTS.CONTACTS} />
              </Col>
              <Col>
                <BudgetField label="Grants" tooltip={TOOLTIP_TEXTS.GRANTS} />
              </Col>
              <Col>
                <BudgetField label="Travel" tooltip={TOOLTIP_TEXTS.TRAVEL} />
              </Col>
            </Row>
            <Row>
              <Col>
                <BudgetField label="Equipment" tooltip={TOOLTIP_TEXTS.EQUIPMENT} />
              </Col>
              <Col>
                <BudgetField label="Overhead" tooltip={TOOLTIP_TEXTS.OVERHEAD} />
              </Col>
              <Col>
                <BudgetField label="Debt Service" tooltip={TOOLTIP_TEXTS.DEBT_SERVICE} />
              </Col>
              <Col>
                <BudgetField label="Other" tooltip={TOOLTIP_TEXTS.OTHER} />
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
              <BudgetField label="Management" tooltip={TOOLTIP_TEXTS.MANAGEMENT} />
            </Col>
            <Col>
              <BudgetField label="Support Services" tooltip={TOOLTIP_TEXTS.SUPPORT_SERVICES} />
            </Col>
            <Col>
              <BudgetField label="Beneficiary Advocacy" tooltip={TOOLTIP_TEXTS.BENEFICIARY_ADVOCACY} />
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
