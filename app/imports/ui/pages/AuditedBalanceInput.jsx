import React, { useEffect } from 'react';
import { Col, Container, NavDropdown, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SubmitField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { defineMethod } from '../../api/base/BaseCollection.methods';
import { PAGE_IDS } from '../utilities/PageIDs';
import { AuditedBalance } from '../../api/Inputs/auditedBalanceCollection';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  Petty_cash: Number,
  Cash: Number,
  Cash_in_banksDraw_on_Line_of_Credit: Number,
  Total_Cash_and_Cash_Equivalents: {
    type: Number,
    optional: true,
  },
  Accounts_receivable: Number,
  Due_from_other_fund: Number,
  Interest_and_dividends_receivable: Number,
  Inventory_prepaid_items_and_other_assets: Number,
  Notes_receivable_due_within_one_year: Number,
  Notes_receivable_due_after_one_year: Number,
  Security_Deposits: Number,
  Cash_held_by_investment_manager: Number,
  Mutual_Funds: Number,
  Commingled_funds: Number,
  Hedge_funds: Number,
  Private_equity: Number,
  Common_trust_fund: Number,
  Common_preferred_stock: Number,
  Private_debt: Number,
  Other: Number,
  Subtotal_Investment: {
    type: Number,
    optional: true,
  },
  US_treasuries: Number,
  US_agencies: Number,
  Subtotal_Loan_Fund: {
    type: Number,
    optional: true,
  },
  Investments: {
    type: Number,
    optional: true,
  },
  Buildings: Number,
  Leasehold_improvements: Number,
  Furniture_fixtures_and_equipment: Number,
  Less_accumulated_depreciation: Number,
  Net: {
    type: Number,
    optional: true,
  },
  Land_A: Number,
  Land_B: Number,
  Construction_in_Progress: Number,
  Subtotal_Capital_Assets_net: {
    type: Number,
    optional: true,
  },
  Investments_Buildings: Number,
  Investments_Leasehold_improvements: Number,
  Investments_Furniture_fixtures_and_equipment: Number,
  Vehicles: Number,
  Investments_Less_accumulated_depreciation: Number,
  Investments_Net: {
    type: Number,
    optional: true,
  },
  Land: Number,
  Subtotal_Limited_Liability_Company_Bs_assets_net: {
    type: Number,
    optional: true,
  },
  Capital_Assets_net: {
    type: Number,
    optional: true,
  },
  Restricted_cash: Number,
  Total_Other_Assets: {
    type: Number,
    optional: true,
  },
  Deferred_outflows_of_resources_related_to_pensions: Number,
  Deferred_outflows_of_resources_related_to_OPEB: Number,
  Total_assets_and_deferred_outflows_of_resources: {
    type: Number,
    optional: true,
  },
  Accounts_payable_and_accrued_liabilities: Number,
  Due_to_fund: Number,
  Due_to_other_fund: Number,
  Accrued_vacation: Number,
  Workers_compensation: Number,
  Accrued_management_retirement_plan: Number,
  Accrued_lease_guaranty_obligation: Number,
  Capital_lease_obligation: Number,
  Notes_payable_Building_A_acquisition: Number,
  Net_Pension_Liability: Number,
  Net_OPEB_Liability: Number,
  Line_of_Credit_Building_A: Number,
  Line_of_Credit_Building_B: Number,
  Debt_service: Number,
  Longterm_liabilities_due_within_one_year: {
    type: Number,
    optional: true,
  },
  Long_term_Accrued_vacation: Number,
  Long_term_Workers_compensation: Number,
  Long_term_Accrued_management_retirement_plan: Number,
  Long_term_Accrued_lease_guaranty_obligation: Number,
  Long_term_Capital_lease_obligation: Number,
  Long_term_Notes_payable_Building_A_acquisition: Number,
  Long_term_Net_Pension_Liability: Number,
  Long_term_Net_OPEB_Liability: Number,
  Long_term_Line_of_Credit_Building_A: Number,
  Long_term_Line_of_Credit_Building_B: Number,
  Long_term_Debt_service: Number,
  Longterm_liabilities_due_after_one_year: {
    type: Number,
    optional: true,
  },
  Total_Liabilities: {
    type: Number,
    optional: true,
  },
  Deferred_inflows_of_resources_related_to_pensions: Number,
  Deferred_inflows_of_resources_related_to_OPEB: Number,
  Total_liabilities_and_deferred_inflows_of_resources: {
    type: Number,
    optional: true,
  },
  Invested_in_capital_assets_net_of_related_debt: Number,
  Restricted_federal_funds: Number,
  Unrestricted: Number,
  Total_net_position: {
    type: Number,
    optional: true,
  },
  Total_Liabilities_Deferred_Inflows_of_Resources_and_Net_Position: {
    type: Number,
    optional: true,
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the Audited Balance Input page for adding a document. */
const AuditedBalanceInput = () => {

  useEffect(() => {
    const handle = Meteor.subscribe('AuditedBalance');
    return () => handle.stop(); // Stop the subscription when the component unmounts
  }, []);

  // On submit, insert the data.
  const submit = (data) => {
    const Total_Cash_and_Cash_Equivalents = data.Petty_cash + data.Cash + data.Cash_in_banksDraw_on_Line_of_Credit;
    const Subtotal_Investments = data.Mutual_Funds + data.Commingled_funds + data.Hedge_funds + data.Private_equity + data.Common_trust_fund + data.Common_preferred_stock + data.Private_debt + data.Other;
    const Subtotal_Loan_Funds = data.US_treasuries + data.US_agencies;
    const Investments = Subtotal_Investments + Subtotal_Loan_Funds;
    const Net = data.Buildings + data.Leasehold_improvements + data.Furniture_fixtures_and_equipment + data.Less_accumulated_depreciation;
    const Subtotal_Capital_Assets_net = data.Land_A + data.Land_B + data.Construction_in_Progress;
    const Investments_Net = data.Investments_Buildings + data.Investments_Leasehold_improvements + data.Investments_Furniture_fixtures_and_equipment + data.Vehicles + data.Investments_Less_accumulated_depreciation;
    const Subtotal_Limited_Liability_Company_Bs_assets_net = (Number(data.Land) || 0) + (Number(Investments_Net) || 0);
    const Capital_Assets_net = Net + Subtotal_Capital_Assets_net + Subtotal_Limited_Liability_Company_Bs_assets_net;
    // eslint-disable-next-line max-len
    const Total_Other_Assets = data.Restricted_cash + Capital_Assets_net + Investments + data.Accounts_receivable + data.Due_to_other_fund + data.Interest_and_dividends_receivable + data.Inventory_prepaid_items_and_other_assets + data.Notes_receivable_due_within_one_year + data.Notes_receivable_due_after_one_year + data.Security_Deposits + data.Cash_held_by_investment_manager;
    const Total_assets_and_deferred_outflows_of_resources = Total_Cash_and_Cash_Equivalents + Total_Other_Assets + data.Deferred_outflows_of_resources_related_to_pensions + data.Deferred_outflows_of_resources_related_to_OPEB;
    // eslint-disable-next-line max-len
    const Longterm_liabilities_due_within_one_year = data.Accrued_vacation + data.Workers_compensation + data.Accrued_management_retirement_plan + data.Accrued_lease_guaranty_obligation + data.Capital_lease_obligation + data.Notes_payable_Building_A_acquisition + data.Net_Pension_Liability + data.Net_OPEB_Liability + data.Line_of_Credit_Building_A + data.Line_of_Credit_Building_B + data.Debt_service;
    // eslint-disable-next-line max-len
    const Longterm_liabilities_due_after_one_year = data.Long_term_Accrued_vacation + data.Long_term_Workers_compensation + data.Long_term_Accrued_management_retirement_plan + data.Long_term_Accrued_lease_guaranty_obligation + data.Long_term_Capital_lease_obligation + data.Long_term_Notes_payable_Building_A_acquisition + data.Long_term_Net_Pension_Liability + data.Long_term_Net_OPEB_Liability + data.Long_term_Line_of_Credit_Building_A + data.Long_term_Line_of_Credit_Building_B + data.Long_term_Debt_service;
    const Total_Liabilities = data.Accounts_payable_and_accrued_liabilities + data.Due_to_fund + data.Due_to_other_fund + Longterm_liabilities_due_within_one_year + Longterm_liabilities_due_after_one_year;
    const Total_liabilities_and_deferred_inflows_of_resources = data.Deferred_inflows_of_resources_related_to_pensions + data.Deferred_inflows_of_resources_related_to_OPEB + Total_Liabilities;
    const Total_net_position = data.Invested_in_capital_assets_net_of_related_debt + data.Restricted_federal_funds + data.Unrestricted;
    const Total_Liabilities_Deferred_Inflows_of_Resources_and_Net_Position = Total_liabilities_and_deferred_inflows_of_resources + Total_net_position;

    // Prepare the definitionData by copying everything from the form data
    const definitionData = {
      ...data, // Spread all form data directly
      Total_Cash_and_Cash_Equivalents,
      Subtotal_Investments,
      Subtotal_Loan_Funds,
      Investments,
      Net,
      Subtotal_Capital_Assets_net,
      Investments_Net,
      Subtotal_Limited_Liability_Company_Bs_assets_net,
      Capital_Assets_net,
      Total_Other_Assets,
      Total_assets_and_deferred_outflows_of_resources,
      Longterm_liabilities_due_within_one_year,
      Longterm_liabilities_due_after_one_year,
      Total_Liabilities,
      Total_liabilities_and_deferred_inflows_of_resources,
      Total_net_position,
      Total_Liabilities_Deferred_Inflows_of_Resources_and_Net_Position,
      owner: Meteor.user().username, // Add additional fields (e.g., owner)
    };

    // Insert the data into the collection
    const collectionName = AuditedBalance.getCollectionName();

    defineMethod.callPromise({ collectionName, definitionData })
      .catch(error => swal('Error', error.message, 'error'))
      .then(() => {
        swal('Success', 'Item added successfully', 'success');
        // formRef.reset(); // Reset form after success
      });
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container id={PAGE_IDS.ADD_STUFF}>
      <Row className="justify-content-center">
        <Col className="mx-auto"> {/* Adjust the size as needed */}
          <Col className="text-center p-4 text-black"><h2>Audited Balance</h2></Col>
          <NavDropdown className="float-end" title="Year">
            <NavDropdown.Item>3</NavDropdown.Item>
            <NavDropdown.Item>4</NavDropdown.Item>
            <NavDropdown.Item>5</NavDropdown.Item>
            <NavDropdown.Item>6</NavDropdown.Item>
          </NavDropdown>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Row className="inputDataWidth w-100 px-3 my-3">
              <Col>
                <h4 className="section-title">Cash and Cash Equivalents</h4>
              </Col>
            </Row>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Petty_cash" decimal={null} />
              </Col>
              <Col>
                <NumField name="Cash" decimal={null} />
              </Col>
              <Col>
                <NumField name="Cash_in_banksDraw_on_Line_of_Credit" decimal={null} />
              </Col>
            </Row>
            <hr className="separator" />

            <Row className="w-100 px-3 my-3">
              <Col>
                <h4 className="section-title">Other Assets</h4>
              </Col>
            </Row>
            <Row className="w-100 px-3 custom-label">
              <Col>
                <NumField name="Accounts_receivable" decimal={null} />
              </Col>
              <Col>
                <NumField name="Due_from_other_fund" decimal={null} />
              </Col>
              <Col>
                <NumField name="Interest_and_dividends_receivable" decimal={null} />
              </Col>
              <Col>
                <NumField name="Inventory_prepaid_items_and_other_assets" decimal={null} />
              </Col>
            </Row>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Notes_receivable_due_within_one_year" decimal={null} />
              </Col>
              <Col>
                <NumField name="Notes_receivable_due_after_one_year" decimal={null} />
              </Col>
              <Col>
                <NumField name="Security_Deposits" decimal={null} />
              </Col>
              <Col>
                <NumField name="Cash_held_by_investment_manager" decimal={null} />
              </Col>
            </Row>

            <Col className="w-100 px-3 my-3">
              <h6 className="section-title">Investments</h6>
            </Col>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Mutual_Funds" decimal={null} />
              </Col>
              <Col>
                <NumField name="Commingled_funds" decimal={null} />
              </Col>
              <Col>
                <NumField name="Hedge_funds" decimal={null} />
              </Col>
              <Col>
                <NumField name="Private_equity" decimal={null} />
              </Col>
            </Row>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Common_trust_fund" decimal={null} />
              </Col>
              <Col>
                <NumField name="Common_preferred_stock" decimal={null} />
              </Col>
              <Col>
                <NumField name="Private_debt" decimal={null} />
              </Col>
              <Col>
                <NumField name="Other" decimal={null} />
              </Col>
            </Row>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="US_treasuries" decimal={null} />
              </Col>
              <Col>
                <NumField name="US_agencies" decimal={null} />
              </Col>
            </Row>

            <Col className="w-100 px-3 my-3">
              <h6 className="section-title">Capital Assets, Net:</h6>
              <h7>Assets</h7>
            </Col>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Buildings" decimal={null} />
              </Col>
              <Col>
                <NumField name="Leasehold_improvements" decimal={null} />
              </Col>
              <Col>
                <NumField name="Furniture_fixtures_and_equipment" decimal={null} />
              </Col>
              <Col>
                <NumField name="Less_accumulated_depreciation" decimal={null} />
              </Col>
            </Row>
            <Col className="w-100 px-3 my-3">
              <h7>Land</h7>
            </Col>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Land_A" decimal={null} />
              </Col>
              <Col>
                <NumField name="Land_B" decimal={null} />
              </Col>
              <Col>
                <NumField name="Construction_in_Progress" decimal={null} />
              </Col>
              <Col>
                <NumField name="Land" decimal={null} />
              </Col>
            </Row>
            <Col className="w-100 px-3 my-3">
              <h7>Limited Liability Company B Asset</h7>
            </Col>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Investments_Buildings" decimal={null} />
              </Col>
              <Col>
                <NumField name="Investments_Leasehold_improvements" decimal={null} />
              </Col>
              <Col>
                <NumField name="Investments_Furniture_fixtures_and_equipment" decimal={null} />
              </Col>
              <Col>
                <NumField name="Vehicles" decimal={null} />
              </Col>
            </Row>
            <Col className="inputDataWidth w-50 px-3 custom-label">
              <NumField name="Investments_Less_accumulated_depreciation" decimal={null} />
            </Col>
            <Col className="w-100 px-3 my-3">
              <h7>Capital Assets</h7>
            </Col>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Restricted_cash" decimal={null} />
              </Col>
              <Col>
                <NumField name="Deferred_outflows_of_resources_related_to_pensions" decimal={null} />
              </Col>
              <Col>
                <NumField name="Deferred_outflows_of_resources_related_to_OPEB" decimal={null} />
              </Col>
            </Row>
            <hr className="separator" />

            <Row className="inputDataWidth w-100 px-3 my-3">
              <Col>
                <h4 className="section-title">Liabilities</h4>
              </Col>
            </Row>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Accounts_payable_and_accrued_liabilities" decimal={null} />
              </Col>
              <Col>
                <NumField name="Due_to_fund" decimal={null} />
              </Col>
              <Col>
                <NumField name="Due_to_other_fund" decimal={null} />
              </Col>
            </Row>
            <Col className="w-100 px-3 my-3">
              <h6>Long-Term Liabilities (Due within one year):</h6>
            </Col>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Accrued_vacation" decimal={null} />
              </Col>
              <Col>
                <NumField name="Workers_compensation" decimal={null} />
              </Col>
              <Col>
                <NumField name="Accrued_management_retirement_plan" decimal={null} />
              </Col>
              <Col>
                <NumField name="Accrued_lease_guaranty_obligation" decimal={null} />
              </Col>
            </Row>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Capital_lease_obligation" decimal={null} />
              </Col>
              <Col>
                <NumField name="Notes_payable_Building_A_acquisition" decimal={null} />
              </Col>
              <Col>
                <NumField name="Net_Pension_Liability" decimal={null} />
              </Col>
              <Col>
                <NumField name="Net_OPEB_Liability" decimal={null} />
              </Col>
            </Row>
            <Col className="w-100 px-3 my-3">
              <h7>Line of Credit</h7>
            </Col>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Line_of_Credit_Building_A" decimal={null} />
              </Col>
              <Col>
                <NumField name="Line_of_Credit_Building_B" decimal={null} />
              </Col>
              <Col>
                <NumField name="Debt_service" decimal={null} />
              </Col>
            </Row>

            <Col className="w-100 px-3 my-3">
              <h6>Long-Term Liabilities (Due after one year):</h6>
            </Col>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Long_term_Accrued_vacation" decimal={null} />
              </Col>
              <Col>
                <NumField name="Long_term_Workers_compensation" decimal={null} />
              </Col>
              <Col>
                <NumField style={{ fontSize: '12px' }} name="Long_term_Accrued_management_retirement_plan" decimal={null} />
              </Col>
              <Col>
                <NumField name="Long_term_Accrued_lease_guaranty_obligation" decimal={null} />
              </Col>
            </Row>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Long_term_Capital_lease_obligation" decimal={null} />
              </Col>
              <Col>
                <NumField name="Long_term_Notes_payable_Building_A_acquisition" decimal={null} />
              </Col>
              <Col>
                <NumField name="Long_term_Net_Pension_Liability" decimal={null} />
              </Col>
              <Col>
                <NumField name="Long_term_Net_OPEB_Liability" decimal={null} />
              </Col>
            </Row>
            <Col className="w-100 px-3 my-3">
              <h7>Line of Credit</h7>
            </Col>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Long_term_Line_of_Credit_Building_A" decimal={null} />
              </Col>
              <Col>
                <NumField name="Long_term_Line_of_Credit_Building_B" decimal={null} />
              </Col>
              <Col>
                <NumField name="Long_term_Debt_service" decimal={null} />
              </Col>
            </Row>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Deferred_inflows_of_resources_related_to_pensions" decimal={null} />
              </Col>
              <Col>
                <NumField name="Deferred_inflows_of_resources_related_to_OPEB" decimal={null} />
              </Col>
            </Row>
            <hr className="separator" />

            <Row className="inputDataWidth w-100 px-3 my-3">
              <Col>
                <h4 className="section-title">Commitments and Contingencies</h4>
              </Col>
            </Row>
            <Col className="w-100 px-3 my-3">
              <h6>Net Positions</h6>
            </Col>
            <Row className="inputDataWidth w-100 px-3 custom-label">
              <Col>
                <NumField name="Invested_in_capital_assets_net_of_related_debt" decimal={null} />
              </Col>
              <Col>
                <NumField name="Restricted_federal_funds" decimal={null} />
              </Col>
              <Col>
                <NumField name="Unrestricted" decimal={null} />
              </Col>
            </Row>
            <SubmitField value="Submit" className="px-3" />
            <ErrorsField />
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AuditedBalanceInput;
