import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { PAGE_IDS } from '../utilities/PageIDs';
import { Budget } from '../../api/Inputs/BudgetP&LCollection';
import DisplayBudgetPl from '../components/DisplayBudgetPl';
import LoadingSpinner from '../components/LoadingSpinner';

const BudgetPlInput = () => {
  const { budget, ready } = useTracker(() => {
    const subscription = Budget.subscribeBudget();
    const rdy = subscription.ready();
    const data = Budget.find({}, { sort: { name: 1 } }).fetch();
    return {
      budget: data,
      ready: rdy,
    };
  }, []);

  console.log({ ready, budget });

  return (ready ? (
    <Container id={PAGE_IDS.AUDITED_BALANCE_INPUT}>
      <Row className="justify-content-center pb-3">
        <Col className="text-center">
          <h2>Budget P&L</h2>
        </Col>
      </Row>
      <Row>
        <Col className="col-lg-4">
          <Row className="fw-bold">
            Fiscal Year
            <hr className="solid" />
          </Row>
          <Row className="justify-content-start fw-bold">
            Revenue
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '3px' }}>
            A
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Revenues
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            General Funds
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Core Op Budget NOT Auth
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-end" style={{ paddingTop: '2px' }}>Total Revenue</h6>
          </Row>
          <Row className="justify-content-start fw-bold">
            Expenses
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '3px' }}>
            Personnel
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Program
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Contracts
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Grants
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Travel
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Equipment
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Overhead
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Data Service
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Other
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-end" style={{ paddingTop: '2px' }}>Total Expenses</h6>
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '6px' }} />
          <Row className="justify-content-start ps-3 fw-bold" style={{ paddingTop: '20px' }}>
            <hr className="solid my-0" />
            Personnel & Fringe (Admin)
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '3px' }}>
            Salary
          </Row>
          <Row className="justify-content-start ps-3 fw-bold">
            Fringe Benefits
          </Row>
          <Row className="align-content-center ps-5 fw-bold">
            Pension Accumulation
          </Row>
          <Row className="justify-content-start ps-5" style={{ paddingTop: '3px' }}>
            Retiree Health Insurance
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Other Post-Employment Benefits
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Employees Health Fund
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Social Security
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Medicare
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Workers Compensation
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Unemployment Compensation
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Pension Administration
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-center" style={{ paddingTop: '2px' }}>Fringe Benefits</h6>
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-end" style={{ paddingTop: '2px' }}>Personnel & Fringe (Admin)</h6>
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '6px' }} />
          <Row className="justify-content-start ps-3 fw-bold" style={{ paddingTop: '20px' }}>
            <hr className="solid my-0" />
            Personnel & Fringe (Admin Staff)
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '3px' }}>
            Salary
          </Row>
          <Row className="justify-content-start ps-3 fw-bold">
            Fringe Benefits
          </Row>
          <Row className="align-content-center ps-5 fw-bold">
            Pension Accumulation
          </Row>
          <Row className="justify-content-start ps-5" style={{ paddingTop: '3px' }}>
            Retiree Health Insurance
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Other Post-Employment Benefits
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Employees Health Fund
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Social Security
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Medicare
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Workers Compensation
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Unemployment Compensation
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Pension Administration
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-center" style={{ paddingTop: '2px' }}>Fringe Benefits</h6>
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-end" style={{ paddingTop: '2px' }}>Personnel & Fringe (Admin Staff)</h6>
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '6px' }} />
          <Row className="justify-content-start ps-3 fw-bold" style={{ paddingTop: '20px' }}>
            <hr className="solid my-0" />
            Personnel & Fringe (Management)
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '3px' }}>
            Salary
          </Row>
          <Row className="justify-content-start ps-3 fw-bold">
            Fringe Benefits
          </Row>
          <Row className="align-content-center ps-5 fw-bold">
            Pension Accumulation
          </Row>
          <Row className="justify-content-start ps-5" style={{ paddingTop: '3px' }}>
            Retiree Health Insurance
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Other Post-Employment Benefits
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Employees Health Fund
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Social Security
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Medicare
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Workers Compensation
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Unemployment Compensation
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Pension Administration
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-center" style={{ paddingTop: '2px' }}>Fringe Benefits</h6>
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-end" style={{ paddingTop: '2px' }}>Personnel & Fringe (Management)</h6>
          </Row>
          <Row className="justify-content-start fw-bold">
            Surplus (Deficit)
          </Row>
          <Row className="justify-content-start ps-3 fw-bold" style={{ paddingTop: '17px' }}>
            Expenditure line items per audited financials
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Management
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Support Services
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Beneficiary Advocacy
          </Row>
        </Col>
        {budget.map((data) => (
          <Col key={data._id}>
            <DisplayBudgetPl budget={data} />
          </Col>
        ))}
      </Row>
    </Container>
  ) : <LoadingSpinner message="Loading Data" />);
};

export default BudgetPlInput;
