// Create dynamic schema
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Meteor } from 'meteor/meteor';
import swal from 'sweetalert';
import { Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SubmitField } from 'uniforms-bootstrap5';
import React from 'react';
import { PAGE_IDS } from '../utilities/PageIDs';
import { defineMethod } from '../../api/base/BaseCollection.methods';
import { AuditedBalance } from '../../api/Inputs/auditedBalanceCollection';

const fields = [
  { key: 'Petty_cash', label: 'Petty Cash' },
  { key: 'Cash', label: 'Cash' },
  { key: 'Cash_in_banksDraw_on_Line_of_Credit', label: 'Cash in Banks/Draw on Line of Credit' },
  { key: 'Total_Cash_and_Cash_Equivalents', label: 'Total Cash and Cash Equivalents' },
  { key: 'Accounts_receivable', label: 'Accounts Receivable' },
  { key: 'Due_from_other_fund', label: 'Due from Other Fund' },
  { key: 'Interest_and_dividends_receivable', label: 'Interest and Dividends Receivable' },
  { key: 'Inventory_prepaid_items_and_other_assets', label: 'Inventory/Prepaid Items and Other Assets' },
  { key: 'Notes_receivable_due_within_one_year', label: 'Notes Receivable (Due Within One Year)' },
  { key: 'Notes_receivable_due_after_one_year', label: 'Notes Receivable (Due After One Year)' },
  { key: 'Security_Deposits', label: 'Security Deposits' },
  { key: 'Cash_held_by_investment_manager', label: 'Cash Held by Investment Manager' },
  { key: 'Mutual_Funds', label: 'Mutual Funds' },
  { key: 'Commingled_funds', label: 'Commingled Funds' },
  { key: 'Hedge_funds', label: 'Hedge Funds' },
  { key: 'Private_equity', label: 'Private Equity' },
  { key: 'Common_trust_fund', label: 'Common Trust Fund' },
  { key: 'Common_preferred_stock', label: 'Common/Preferred Stock' },
  { key: 'Private_debt', label: 'Private Debt' },
  { key: 'Other', label: 'Other' },
  { key: 'Subtotal_Investment', label: 'Subtotal Investment' },
  { key: 'US_treasuries', label: 'US Treasuries' },
  { key: 'US_agencies', label: 'US Agencies' },
  { key: 'Subtotal_Loan_Fund', label: 'Subtotal Loan Fund' },
  { key: 'Investments', label: 'Investments' },
  { key: 'Buildings', label: 'Buildings' },
  { key: 'Leasehold_improvements', label: 'Leasehold Improvements' },
  { key: 'Furniture_fixtures_and_equipment', label: 'Furniture, Fixtures, and Equipment' },
  { key: 'Less_accumulated_depreciation', label: 'Less Accumulated Depreciation' },
  { key: 'Net', label: 'Net' },
  { key: 'Land_A', label: 'Land A' },
  { key: 'Land_B', label: 'Land B' },
  { key: 'Construction_in_Progress', label: 'Construction in Progress' },
  { key: 'Subtotal_Capital_Assets_net', label: 'Subtotal Capital Assets (Net)' },
  { key: 'Investments_Buildings', label: 'Investments in Buildings' },
  { key: 'Investments_Leasehold_improvements', label: 'Investments in Leasehold Improvements' },
  { key: 'Investments_Furniture', label: 'Investments in Furniture' },
  { key: 'Investments_fixtures_and_equipment', label: 'Investments in Fixtures and Equipment' },
  { key: 'Vehicles', label: 'Vehicles' },
  { key: 'Investments_Less_accumulated_depreciation', label: 'Investments (Less Accumulated Depreciation)' },
  { key: 'Investments_Net', label: 'Investments Net' },
  { key: 'Land', label: 'Land' },
  { key: 'Subtotal_Limited_Liability_Company_Bs_assets_net', label: 'Subtotal Limited Liability Company\'s Assets (Net)' },
  { key: 'Capital_Assets_net', label: 'Capital Assets (Net)' },
  { key: 'Restricted_cash', label: 'Restricted Cash' },
  { key: 'Total_Other_Assets', label: 'Total Other Assets' },
  { key: 'Deferred_outflows_of_resources_related_to_pensions', label: 'Deferred Outflows Related to Pensions' },
  { key: 'Deferred_outflows_of_resources_related_to_OPEB', label: 'Deferred Outflows Related to OPEB' },
  { key: 'Total_assets_and_deferred_outflows_of_resources', label: 'Total Assets and Deferred Outflows of Resources' },
  { key: 'Accounts_payable_and_accrued_liabilities', label: 'Accounts Payable and Accrued Liabilities' },
  { key: 'Due_to_fund', label: 'Due to Fund' },
  { key: 'Due_to_other_fund', label: 'Due to Other Fund' },
  { key: 'Accrued_vacation', label: 'Accrued Vacation' },
  { key: 'Workers_compensation', label: 'Workers Compensation' },
  { key: 'Accrued_management_retirement_plan', label: 'Accrued Management Retirement Plan' },
  { key: 'Accrued_lease_guaranty_obligation', label: 'Accrued Lease Guaranty Obligation' },
  { key: 'Capital_lease_obligation', label: 'Capital Lease Obligation' },
  { key: 'Notes_payable_Building_A_acquisition', label: 'Notes Payable for Building A Acquisition' },
  { key: 'Net_Pension_Liability', label: 'Net Pension Liability' },
  { key: 'Net_OPEB_Liability', label: 'Net OPEB Liability' },
  { key: 'Line_of_Credit_Building_A', label: 'Line of Credit for Building A' },
  { key: 'Line_of_Credit_Building_B', label: 'Line of Credit for Building B' },
  { key: 'Debt_service', label: 'Debt Service' },
  { key: 'Longterm_liabilities_due_within_one_year', label: 'Long-Term Liabilities Due Within One Year' },
  { key: 'Long_term_Accrued_vacation', label: 'Long-Term Accrued Vacation' },
  { key: 'Long_term_Workers_compensation', label: 'Long-Term Workers Compensation' },
  { key: 'Long_term_Accrued_management_retirement_plan', label: 'Long-Term Accrued Management Retirement Plan' },
  { key: 'Long_term_Accrued_lease_guaranty_obligation', label: 'Long-Term Accrued Lease Guaranty Obligation' },
  { key: 'Long_term_Capital_lease_obligation', label: 'Long-Term Capital Lease Obligation' },
  { key: 'Long_term_Notes_payable_Building_A_acquisition', label: 'Long-Term Notes Payable for Building A Acquisition' },
  { key: 'Long_term_Net_Pension_Liability', label: 'Long-Term Net Pension Liability' },
  { key: 'Long_term_Net_OPEB_Liability', label: 'Long-Term Net OPEB Liability' },
  { key: 'Long_term_Line_of_Credit_Building_A', label: 'Long-Term Line of Credit for Building A' },
  { key: 'Long_term_Line_of_Credit_Building_B', label: 'Long-Term Line of Credit for Building B' },
  { key: 'Long_term_Debt_service', label: 'Long-Term Debt Service' },
  { key: 'Longterm_liabilities_due_after_one_year', label: 'Long-Term Liabilities Due After One Year' },
  { key: 'Total_Liabilities', label: 'Total Liabilities' },
  { key: 'Deferred_inflows_of_resources_related_to_pensions', label: 'Deferred Inflows Related to Pensions' },
  { key: 'Deferred_inflows_of_resources_related_to_OPEB', label: 'Deferred Inflows Related to OPEB' },
  { key: 'Total_liabilities_and_deferred_inflows_of_resources', label: 'Total Liabilities and Deferred Inflows of Resources' },
  { key: 'Invested_in_capital_assets_net_of_related_debt', label: 'Invested in Capital Assets Net of Related Debt' },
  { key: 'Restricted_federal_funds', label: 'Restricted Federal Funds' },
  { key: 'Unrestricted', label: 'Unrestricted' },
  { key: 'Total_net_position', label: 'Total Net Position' },
];

const years = ['year6', 'year7', 'year8', 'year9'];

// Dynamically create the schema
const schemaDefinition = {};

/* schemaDefinition.companyName = {
  type: String,
  label: 'Company Name',
  optional: false, // Set to true if the field is optional
};

schemaDefinition.year = {
  type: Number,
  label: 'Year',
  optional: false,
}; */

fields.forEach(({ key }) => {
  // define the parent field as object
  schemaDefinition[key] = {
    type: Object,
    optional: true, // Optional if not always present
  };

  // define the subfields for each year
  years.forEach(year => {
    schemaDefinition[`${key}.${year}`] = {
      type: Number,
      defaultValue: 123, // Set default value
    };
  });
});

// Create the schema
const dynamicFormSchema = new SimpleSchema(schemaDefinition);

const bridge = new SimpleSchema2Bridge(dynamicFormSchema);

const AuditedBalanceInputTest = () => {
  // Default model to provide initial values for the form
  const defaultModel = fields.reduce((accumulatedModel, { key }) => {
    const updatedModel = { ...accumulatedModel }; // Create a new object instead of mutating
    years.forEach(year => {
      updatedModel[`${key}.${year}`] = 123; // Default value for each field
    });
    return updatedModel;
  }, {});

  // On submit, insert data
  const submit = (data, formRef) => {
    const owner = Meteor.user().username;
    const collectionName = AuditedBalance.getCollectionName();

    // Prepare the data to define in the collection
    const definitionData = { ...data, owner };

    defineMethod.callPromise({ collectionName, definitionData })
      .catch(error => swal('Error', error.message, 'error'))
      .then(() => {
        swal('Success', 'Item added successfully', 'success');
        formRef.reset();
      });
  };

  // Render the form with dynamically generated fields
  let fRef = null;
  return (
    <Container id={PAGE_IDS.ADD_STUFF} className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Add Audited Balance Sheet</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} model={defaultModel} onSubmit={data => submit(data, fRef)}>
            <h5 className="section-title">Cash and Cash Equivalents</h5>
            {fields.map(({ key, label }) => (
              <Row key={key}>
                {years.map((year) => (
                  <Col key={`${key}.${year}`} xs={6} md={4} lg={3}>
                    <NumField
                      name={`${key}.${year}`}
                      decimal={null}
                      label={`${label} (${year})`}
                    />
                  </Col>
                ))}
              </Row>
            ))}
            <hr />
            <Row>
              <Col>
                <SubmitField value="Submit" />
                <ErrorsField />
              </Col>
            </Row>
          </AutoForm>
        </Col>
      </Row>
    </Container>

  );
};

export default AuditedBalanceInputTest;
