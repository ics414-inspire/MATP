import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import { QuestionCircle } from 'react-bootstrap-icons';
import { useTracker } from 'meteor/react-meteor-data';
import { PAGE_IDS } from '../utilities/PageIDs';
// import { TOOLTIP_TEXTS } from '../utilities/TooltipTexts';
// import TooltipOverlay from '../components/TooltipOverlay';
import { AuditedBalanceSheet } from '../../api/Inputs/AuditedBalanceSheetCollection';
import DisplayAudBalSheet from '../components/DisplayAudBalSheet';
import LoadingSpinner from '../components/LoadingSpinner';
// TODO: Reimplement tooltips into form
// const AuditedBalanceField = ({ label, tooltip, ...rest }) => (
//   <Form.Group>
//     <Form.Label>
//       {label}{' '}
//       <TooltipOverlay tooltipText={tooltip}>
//         <QuestionCircle />
//       </TooltipOverlay>
//     </Form.Label>
//     {/* eslint-disable-next-line react/jsx-props-no-spreading */}
//     <Form.Control type="number" {...rest} />
//   </Form.Group>
// );

const AuditedBalanceInput = () => {
  const { audBalSheets, ready } = useTracker(() => {
    const subscription = AuditedBalanceSheet.subscribeAuditedBalanceSheet();
    const rdy = subscription.ready();
    const data = AuditedBalanceSheet.find({}, { sort: { name: 1 } }).fetch();
    return {
      audBalSheets: data,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container id={PAGE_IDS.AUDITED_BALANCE_INPUT}>
      <Row className="justify-content-center pb-3">
        <Col className="text-center">
          <h2>Audited Balance Sheet Temp</h2>
        </Col>
      </Row>
      <Row>
        <Col className="col-lg-4">
          <Row className="fw-bold">
            Fiscal Year
            <hr className="solid" />
          </Row>
          <Row className="justify-content-start fw-bold">
            Cash and Cash Equivalents
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '3px' }}>
            Petty Cash
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Cash
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Cash in banks/Draw on Line of Credit
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-end" style={{ paddingTop: '2px' }}>Total Cash and Cash Equivalents</h6>
          </Row>
          <Row className="justify-content-start fw-bold">
            Other Assets
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '3px' }}>
            Accounts Receivable
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Due from other fund
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Interest and dividends receivable
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Inventory, prepaid items and other assets
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Notes receivable - due within one year
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Notes receivable - due after one year
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Security Deposits
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Cash held by investment manager
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '6px' }} />
          <Row className="align-items-center ps-3 fw-bold">
            Investments:
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '3px' }}>
            Mutual Funds
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Commingled Funds
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Hedge Funds
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Private Equity
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Common Trust Fund
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Common & Preferred Stock
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Private Debt
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Other
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-center" style={{ paddingTop: '2px' }}>Subtotal - Investment</h6>
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '9px' }}>
            U.S. Treasuries
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            U.S. Agencies
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-center" style={{ paddingTop: '2px' }}>Subtotal - Loan Fund</h6>
          </Row>
          <Row className="justify-content-start ps-3 fw-bold" style={{ paddingTop: '20px' }}>
            <hr className="solid my-0" />
            Investments
          </Row>
          <Row className="justify-content-start ps-3 fw-bold">
            Capital Assets, Net:
          </Row>
          <Row className="align-content-center ps-5 fw-bold">
            Assets
          </Row>
          <Row className="justify-content-start ps-5" style={{ paddingTop: '3px' }}>
            Buildings
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Leasehold Improvements
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Furniture, Fixtures and Equipment
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Less Accumulated Depreciation
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-center" style={{ paddingTop: '2px' }}>Net</h6>
          </Row>
          <Row className="justify-content-start ps-5 fw-bold">
            Land:
          </Row>
          <Row className="align-items-center ms-3 ps-5" style={{ paddingTop: '5px' }}>
            Land A
          </Row>
          <Row className="align-items-center ms-3 ps-5" style={{ paddingTop: '17px' }}>
            Land B
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Construction in Progress
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-end" style={{ paddingTop: '2px' }}>Subtotal - Capital Assets, Net</h6>
          </Row>
          <Row className="justify-content-start ps-5 fw-bold">
            Limited Liability Company B&apos;s Assets
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '3px' }}>
            Buildings
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Leasehold Improvements
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Furniture, Fixtures and Equipment
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Vehicles
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Less Accumulated Depreciation
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Land
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-end mx-0 px-0" style={{ paddingTop: '2px' }}>Subtotal - Limited Liability Company B&apos;s Assets</h6>
          </Row>
          <Row className="justify-content-start ps-3 fw-bold" style={{ paddingTop: '3px' }}>
            <hr className="solid my-0" />
            Capital Assets, Net
          </Row>
          <Row className="justify-content-start ps-3" style={{ paddingTop: '12px' }}>
            Restricted Cash
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-end" style={{ paddingTop: '3px' }}>Total Other Assets</h6>
          </Row>
          <Row className="justify-content-start ps-3" style={{ paddingTop: '6px' }}>
            Deferred Outflows of Resources Related to Pensions
          </Row>
          <Row className="justify-content-start ps-3" style={{ paddingTop: '17px' }}>
            Deferred Outflows of Resources Related to OPEB
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '6px' }}>
            <hr className="solid my-0" />
            <h6 className="text-end" style={{ paddingTop: '2px' }}>Total Assets and Deferred Outflows of Resource</h6>
          </Row>
          <Row className="justify-content-start fw-bold">
            Liabilities
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '3px' }}>
            Accounts Payable and Accrued Liabilities
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Due To Fund
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Due To Other Fund
          </Row>
          <Row className="justify-content-start ps-3 fw-bold" style={{ paddingTop: '17px' }}>
            Long-term Liabilities - due within one year:
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Accrued vacation
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Workers&apos; Compensation
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Accrued Management Retirement Plan
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Accrued Lease Guaranty Obligation
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Capital Lease Obligation
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Notes Payable - Building A Acquisition
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Net Pension Liability
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Net OPEB Liability
          </Row>
          <Row className="align-items-center ps-5 fw-bold" style={{ paddingTop: '17px' }}>
            Line of Credit
          </Row>
          <Row className="align-items-center ms-3 ps-5" style={{ paddingTop: '17px' }}>
            Line of Credit - Building A
          </Row>
          <Row className="align-items-center ms-3 ps-5" style={{ paddingTop: '17px' }}>
            Line of Credit - Building B
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Debt Service
          </Row>
          <Row className="align-items-center ps-3 fw-bold" style={{ paddingTop: '7px' }}>
            Long-Term Liabilities - Due Within One Year:
          </Row>
          <Row className="align-items-center ps-3 fw-bold" style={{ paddingTop: '5px' }}>
            Long-Term Liabilities - Due After One Year:
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '3px' }}>
            Accrued vacation
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Workers&apos; Compensation
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Accrued Management Retirement Plan
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Accrued Lease Guaranty Obligation
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Capital Lease Obligation
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Notes Payable - Building A Acquisition
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Net Pension Liability
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Net OPEB Liability
          </Row>
          <Row className="align-items-center ps-3 fw-bold" style={{ paddingTop: '17px' }}>
            Line of Credit
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Line of Credit - Building A
          </Row>
          <Row className="align-items-center ps-5" style={{ paddingTop: '17px' }}>
            Line of Credit - Building B
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Debt Service
          </Row>
          <Row className="align-items-center ps-3 fw-bold" style={{ paddingTop: '10px' }}>
            Long-Term Liabilities - Due After One Year:
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '2px' }}>
            <hr className="solid my-0" />
            <h6 className="text-center">Total Liabilities</h6>
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '6px' }}>
            Deferred Inflows of Resources Related to Pensions
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Deferred Inflows of Resources Related to OPEB
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '11px' }}>
            <hr className="solid my-0" />
            <h6 className="text-end">Total Liabilities and Deferred Inflows of Resources</h6>
          </Row>
          <Row className="justify-content-start fw-bold">
            Commitments and Contingencies
          </Row>
          <Row className="justify-content-start fw-bold">
            Net Position
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '3px' }}>
            Invested in Capital Assets, Net of Related Debt
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Restricted - Federal Funds
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '17px' }}>
            Unrestricted
          </Row>
          <Row className="align-items-center ps-3" style={{ paddingTop: '10px' }}>
            <hr className="solid my-0" />
            <h6 className="text-center">Total Net Position</h6>
          </Row>
          <Row className="align-items-center ps-3">
            <hr className="solid my-0" />
            <h6 className="text-center">Total Liabilities, Deferred Inflows of Resources</h6>
          </Row>
        </Col>
        {audBalSheets.map((data) => (
          <Col key={data._id}>
            <DisplayAudBalSheet audBalSheet={data} />
          </Col>
        ))}
      </Row>
    </Container>
  ) : <LoadingSpinner message="Loading Data" />);
};

export default AuditedBalanceInput;
