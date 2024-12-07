import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { Card, Col, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, NumField, SubmitField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Budget } from '../../api/Inputs/BudgetP&LCollection';
import { updateMethod } from '../../api/base/BaseCollection.methods';

const bridge = new SimpleSchema2Bridge(Budget._schema);

const percentages = [
  {
    year: 2,
    percentages: {
      pension_accumulation: 15.00,
      retiree_health_insurance: 7.96,
      other_post_employment_benefits: 0.00,
      employees_health_fund: 7.02,
      social_security: 6.20,
      medicarep: 1.45,
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
      medicarep: 1.45,
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
      medicarep: 1.45,
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
      medicarep: 1.45,
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
      medicarep: 1.45,
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
      medicarep: 1.45,
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
      medicarep: 1.45,
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
      medicarep: 1.45,
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
      medicarep: 1.45,
      workers_compensation: 1.24,
      unemployment_compensation: 0.02,
      pension_administration: 0.01,
      composite_rate: 63.08,
    },
  },
];

function getPercentageForYear(year, key) {
  const yearData = percentages.find((entry) => entry.year === year);
  return yearData?.percentages?.[key] || 0; // Return 0 if no match is found
}

const sumArray = (array) => array.reduce((sum, item) => sum + Object.values(item).reduce((innerSum, value) => innerSum + (typeof value === 'number' ? value : 0), 0), 0);

const submit = (budget, data) => {
  const { revenue, expenses, fringeBenefitsAdmin, fringeBenefitsAdStaff, fringeBenefitsManage, manageSalary, expenditure } = data;
  const docID = budget._id;
  const collectionName = Budget.getCollectionName();
  const updateData = {
    id: docID, revenue, expenses, fringeBenefitsAdmin, fringeBenefitsAdStaff, fringeBenefitsManage, manageSalary, expenditure };

  updateMethod.callPromise({ collectionName, updateData })
    .catch(error => swal('Error', error.message, 'error'))
    .then(() => swal('Success', 'Item updated successfully', 'success'));
};

const DisplayBudgetPl = ({ budget }) => {
  // State variables for totals and key calculations
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [manageTotal, setManageTotal] = useState(0);
  const [adStaffTotal, setAdStaffTotal] = useState(0);
  const [adminTotal, setAdminTotal] = useState(0);
  const [fringeBenefitsManageTotal, setFringeBenefitsManageTotal] = useState(0);
  const [fringeBenefitsAdminTotal, setFringeBenefitsAdminTotal] = useState(0);
  const [fringeBenefitsAdStaffTotal, setFringeBenefitsAdStaffTotal] = useState(0);
  const [adminSalary, setAdminSalary] = useState(0);
  const [adStaffSalary, setAdStaffSalary] = useState(0);
  const [surplus, setSurplus] = useState(0);
  const fringeBenefitsAdmin = budget.fringeBenefitsAdmin || [];
  const fringeBenefitsAdStaff = budget.fringeBenefitsAdStaff || [];
  const fringeBenefitsManage = budget.fringeBenefitsManage || [];

  // Dynamic calculations using `useEffect`
  useEffect(() => {
    if (!budget) return;

    // Extract budget arrays and values
    const revenueArray = budget.revenue || [];
    const expensesArray = budget.expenses || [];
    const fringeBenefitsManageArray = budget.fringeBenefitsManage || [];
    const fringeBenefitsAdminArray = budget.fringeBenefitsAdmin || [];
    const fringeBenefitsAdStaffArray = budget.fringeBenefitsAdStaff || [];
    const expenditureArray = budget.expenditure || [];

    // Calculate totals
    const totalRevenueValue = sumArray(revenueArray);
    const totalExpensesValue = sumArray(expensesArray);

    const fringeBenefitsManageTotalValue = sumArray(fringeBenefitsManageArray);
    const fringeBenefitsAdminTotalValue = sumArray(fringeBenefitsAdminArray);
    const fringeBenefitsAdStaffTotalValue = sumArray(fringeBenefitsAdStaffArray);

    const surplusValue = totalRevenueValue - totalExpensesValue;

    const manageSalary = budget.manageSalary || 0;
    const personnelExpenses = expensesArray[0]?.personnel || 0;
    const manageTotalValue = manageSalary + fringeBenefitsManageTotalValue;
    const adStaffTotalValue = (expenditureArray[0]?.management || 0) - manageTotalValue;
    const adminTotalValue = personnelExpenses - manageTotalValue - adStaffTotalValue;

    const compositeRate = getPercentageForYear(budget.year, 'composite_rate') || 0;

    const adminSalaryValue = adminTotalValue / (1 + compositeRate);
    const adStaffSalaryValue = adStaffTotalValue / (1 + compositeRate);

    // Update state
    setTotalRevenue(totalRevenueValue);
    setTotalExpenses(totalExpensesValue);
    setSurplus(surplusValue);

    setFringeBenefitsManageTotal(fringeBenefitsManageTotalValue);
    setFringeBenefitsAdminTotal(fringeBenefitsAdminTotalValue);
    setFringeBenefitsAdStaffTotal(fringeBenefitsAdStaffTotalValue);

    setManageTotal(manageTotalValue);
    setAdStaffTotal(adStaffTotalValue);
    setAdminTotal(adminTotalValue);

    setAdminSalary(adminSalaryValue);
    setAdStaffSalary(adStaffSalaryValue);
  }, [budget]);
  return (
    <AutoForm schema={bridge} onSubmit={data => submit(budget, data)} model={Budget.findOne(budget._id)}>
      <Card.Body className="custom-card-body">
        <Row className="justify-content-center" style={{ paddingLeft: '5px' }}>
          Year {budget.year}
          <hr className="solid" />
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '20px' }}>
          <Col>
            <NumField name="revenue.0.a" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="revenue.0.revenues" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="revenue.0.generalFund" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="revenue.0.coreOpBudgetNotAuth" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${totalRevenue.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '20px' }}>
          <Col>
            <NumField name="expenses.0.personnel" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="expenses.0.program" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col>
            <NumField name="expenses.0.contracts" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col>
            <NumField name="expenses.0.grants" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col>
            <NumField name="expenses.0.travel" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col>
            <NumField name="expenses.0.equipment" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col>
            <NumField name="expenses.0.overhead" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="expenses.0.debtService" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center" style={{ paddingTop: '20px' }}>
          <Col>
            <NumField name="expenses.0.other" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${totalExpenses.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${adminSalary.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdmin.0.pensionAccumulation" value={fringeBenefitsAdmin[0]?.pensionAccumulation || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdmin.0.retireeHealthIns" value={fringeBenefitsAdmin[0]?.retireeHealthIns || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdmin.0.postEmploymentBen" value={fringeBenefitsAdmin[0]?.postEmploymentBen || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdmin.0.employeeHealthFund" value={fringeBenefitsAdmin[0]?.employeeHealthFund || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdmin.0.socialSecurity" value={fringeBenefitsAdmin[0]?.socialSecurity || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdmin.0.medicare" value={fringeBenefitsAdmin[0]?.medicare || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdmin.0.workersComp" value={fringeBenefitsAdmin[0]?.workersComp || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdmin.0.unemploymentComp" value={fringeBenefitsAdmin[0]?.unemploymentComp || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdmin.0.pensionAdmin" value={fringeBenefitsAdmin[0]?.pensionAdmin || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${fringeBenefitsAdminTotal.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${adminTotal.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${adStaffSalary.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdStaff.0.pensionAccumulation" value={fringeBenefitsAdStaff[0]?.pensionAccumulation || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdStaff.0.retireeHealthIns" value={fringeBenefitsAdStaff[0]?.retireeHealthIns || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdStaff.0.postEmploymentBen" value={fringeBenefitsAdStaff[0]?.postEmploymentBen || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdStaff.0.employeeHealthFund" value={fringeBenefitsAdStaff[0]?.employeeHealthFund || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdStaff.0.socialSecurity" value={fringeBenefitsAdStaff[0]?.socialSecurity || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdStaff.0.medicare" value={fringeBenefitsAdStaff[0]?.medicare || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdStaff.0.workersComp" value={fringeBenefitsAdStaff[0]?.workersComp || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdStaff.0.unemploymentComp" value={fringeBenefitsAdStaff[0]?.unemploymentComp || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsAdStaff.0.pensionAdmin" value={fringeBenefitsAdStaff[0]?.pensionAdmin || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${fringeBenefitsAdStaffTotal.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${adStaffTotal.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="manageSalary" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsManage.0.pensionAccumulation" value={fringeBenefitsManage[0]?.pensionAccumulation || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsManage.0.retireeHealthIns" value={fringeBenefitsManage[0]?.retireeHealthIns || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsManage.0.postEmploymentBen" value={fringeBenefitsManage[0]?.postEmploymentBen || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsManage.0.employeeHealthFund" value={fringeBenefitsManage[0]?.employeeHealthFund || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsManage.0.socialSecurity" value={fringeBenefitsManage[0]?.socialSecurity || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsManage.0.medicare" value={fringeBenefitsManage[0]?.medicare || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsManage.0.workersComp" value={fringeBenefitsManage[0]?.workersComp || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsManage.0.unemploymentComp" value={fringeBenefitsManage[0]?.unemploymentComp || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="fringeBenefitsManage.0.pensionAdmin" value={fringeBenefitsManage[0]?.pensionAdmin || 0} style={{ height: '25px' }} decimal label={null} readOnly />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${fringeBenefitsManageTotal.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${manageTotal.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h6>${surplus.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="expenditure.0.management" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="expenditure.0.supportServices" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <NumField name="expenditure.0.beneficialAdvocacy" style={{ height: '25px' }} decimal label={null} />
          </Col>
        </Row>
        <Col>
          <SubmitField value="Update" />
        </Col>
        <ErrorsField />
        <HiddenField name="owner" />
      </Card.Body>
    </AutoForm>
  );
};

// Require a document to be passed to this component.
DisplayBudgetPl.propTypes = {
  budget: PropTypes.shape({
    owner: PropTypes.string,
    year: PropTypes.number.isRequired,
    revenue: PropTypes.arrayOf(PropTypes.shape({
      a: PropTypes.number,
      revenues: PropTypes.number,
      generalFund: PropTypes.number,
      coreOpBudgetNotAuth: PropTypes.number,
    })),
    revenueTotal: PropTypes.number,
    expenses: PropTypes.arrayOf(PropTypes.shape({
      personnel: PropTypes.number,
      program: PropTypes.number,
      contracts: PropTypes.number,
      grants: PropTypes.number,
      travel: PropTypes.number,
      equipment: PropTypes.number,
      overhead: PropTypes.number,
      debtService: PropTypes.number,
      other: PropTypes.number,
    })),
    expensesTotal: PropTypes.number,
    adminSalary: PropTypes.number,
    adminTotal: PropTypes.number,
    fringeBenefitsAdmin: PropTypes.arrayOf(PropTypes.shape({
      pensionAccumulation: PropTypes.number,
      retireeHealthIns: PropTypes.number,
      postEmploymentBen: PropTypes.number,
      employeeHealthFund: PropTypes.number,
      socialSecurity: PropTypes.number,
      medicare: PropTypes.number,
      workersComp: PropTypes.number,
      unemploymentComp: PropTypes.number,
      pensionAdmin: PropTypes.number,
    })),
    fringeBenefitsAdminTotal: PropTypes.number,
    adStaffSalary: PropTypes.number,
    adStaffTotal: PropTypes.number,
    fringeBenefitsAdStaff: PropTypes.arrayOf(PropTypes.shape({
      pensionAccumulation: PropTypes.number,
      retireeHealthIns: PropTypes.number,
      postEmploymentBen: PropTypes.number,
      employeeHealthFund: PropTypes.number,
      socialSecurity: PropTypes.number,
      medicare: PropTypes.number,
      workersComp: PropTypes.number,
      unemploymentComp: PropTypes.number,
      pensionAdmin: PropTypes.number,
    })),
    fringeBenefitsAdStaffTotal: PropTypes.number,
    manageSalary: PropTypes.number,
    manageTotal: PropTypes.number,
    fringeBenefitsManage: PropTypes.arrayOf(PropTypes.shape({
      pensionAccumulation: PropTypes.number,
      retireeHealthIns: PropTypes.number,
      postEmploymentBen: PropTypes.number,
      employeeHealthFund: PropTypes.number,
      socialSecurity: PropTypes.number,
      medicare: PropTypes.number,
      workersComp: PropTypes.number,
      unemploymentComp: PropTypes.number,
      pensionAdmin: PropTypes.number,
    })),
    fringeBenefitsManageTotal: PropTypes.number,
    surplus: PropTypes.number,
    expenditure: PropTypes.arrayOf(PropTypes.shape({
      management: PropTypes.number,
      supportServices: PropTypes.number,
      beneficialAdvocacy: PropTypes.number,
    })),
    _id: PropTypes.string,
  }).isRequired,
};

export default DisplayBudgetPl;
