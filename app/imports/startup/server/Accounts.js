import { Meteor } from 'meteor/meteor';
import { ROLE } from '../../api/role/Role';
import { AdminProfiles } from '../../api/user/AdminProfileCollection';
import { UserProfiles } from '../../api/user/UserProfileCollection';
<<<<<<< HEAD

/* eslint-disable no-console */

=======
import { AuditedBalanceSheets } from '../../api/Inputs/auditedBalanceSheet.js';
import { BudgetPLs } from '../../api/Inputs/BudgetP&L.js';

/* eslint-disable no-console */

// Function to create a new AuditedBalanceSheet with all fields set to zero
function createAuditedBalanceSheet(userId) {
  console.log(`Creating audited balance sheet for user ${userId}`);
  const auditedBalanceSheetData = {
    owner: userId,
    Petty_cash_year6: 0,
    Petty_cash_year7: 0,
    Petty_cash_year8: 0,
    Petty_cash_year9: 0,
    Cash_year6: 0,
    Cash_year7: 0,
    Cash_year8: 0,
    Cash_year9: 0,
    Cash_in_banksDraw_on_Line_of_Credit_year6: 0,
    Cash_in_banksDraw_on_Line_of_Credit_year7: 0,
    Cash_in_banksDraw_on_Line_of_Credit_year8: 0,
    Cash_in_banksDraw_on_Line_of_Credit_year9: 0,
    Total_Cash_and_Cash_Equivalents_year6: 0,
    Total_Cash_and_Cash_Equivalents_year7: 0,
    Total_Cash_and_Cash_Equivalents_year8: 0,
    Total_Cash_and_Cash_Equivalents_year9: 0,
    Accounts_receivable_year6: 0,
    Accounts_receivable_year7: 0,
    Accounts_receivable_year8: 0,
    Accounts_receivable_year9: 0,
    Due_from_other_fund_year6: 0,
    Due_from_other_fund_year7: 0,
    Due_from_other_fund_year8: 0,
    Due_from_other_fund_year9: 0,
    Interest_and_dividends_receivable_year6: 0,
    Interest_and_dividends_receivable_year7: 0,
    Interest_and_dividends_receivable_year8: 0,
    Interest_and_dividends_receivable_year9: 0,
    Inventory_prepaid_items_and_other_assets_year6: 0,
    Inventory_prepaid_items_and_other_assets_year7: 0,
    Inventory_prepaid_items_and_other_assets_year8: 0,
    Inventory_prepaid_items_and_other_assets_year9: 0,
    Notes_receivable_due_within_one_year_year6: 0,
    Notes_receivable_due_within_one_year_year7: 0,
    Notes_receivable_due_within_one_year_year8: 0,
    Notes_receivable_due_within_one_year_year9: 0,
    Notes_receivable_due_after_one_year_year6: 0,
    Notes_receivable_due_after_one_year_year7: 0,
    Notes_receivable_due_after_one_year_year8: 0,
    Notes_receivable_due_after_one_year_year9: 0,
    Security_Deposits_year6: 0,
    Security_Deposits_year7: 0,
    Security_Deposits_year8: 0,
    Security_Deposits_year9: 0,
    Cash_held_by_investment_manager_year6: 0,
    Cash_held_by_investment_manager_year7: 0,
    Cash_held_by_investment_manager_year8: 0,
    Cash_held_by_investment_manager_year9: 0,
    Mutual_Funds_year6: 0,
    Mutual_Funds_year7: 0,
    Mutual_Funds_year8: 0,
    Mutual_Funds_year9: 0,
    Commingled_funds_year6: 0,
    Commingled_funds_year7: 0,
    Commingled_funds_year8: 0,
    Commingled_funds_year9: 0,
    Hedge_funds_year6: 0,
    Hedge_funds_year7: 0,
    Hedge_funds_year8: 0,
    Hedge_funds_year9: 0,
    Private_equity_year6: 0,
    Private_equity_year7: 0,
    Private_equity_year8: 0,
    Private_equity_year9: 0,
    Common_trust_fund_year6: 0,
    Common_trust_fund_year7: 0,
    Common_trust_fund_year8: 0,
    Common_trust_fund_year9: 0,
    Common_preferred_stock_year6: 0,
    Common_preferred_stock_year7: 0,
    Common_preferred_stock_year8: 0,
    Common_preferred_stock_year9: 0,
    Private_debt_year6: 0,
    Private_debt_year7: 0,
    Private_debt_year8: 0,
    Private_debt_year9: 0,
    Other_year6: 0,
    Other_year7: 0,
    Other_year8: 0,
    Other_year9: 0,
    Subtotal_Investment_year6: 0,
    Subtotal_Investment_year7: 0,
    Subtotal_Investment_year8: 0,
    Subtotal_Investment_year9: 0,
    US_treasuries_year6: 0,
    US_treasuries_year7: 0,
    US_treasuries_year8: 0,
    US_treasuries_year9: 0,
    US_agencies_year6: 0,
    US_agencies_year7: 0,
    US_agencies_year8: 0,
    US_agencies_year9: 0,
    Subtotal_Loan_Fund_year6: 0,
    Subtotal_Loan_Fund_year7: 0,
    Subtotal_Loan_Fund_year8: 0,
    Subtotal_Loan_Fund_year9: 0,
    Investments_year6: 0,
    Investments_year7: 0,
    Investments_year8: 0,
    Investments_year9: 0,
    Buildings_year6: 0,
    Buildings_year7: 0,
    Buildings_year8: 0,
    Buildings_year9: 0,
    Leasehold_improvements_year6: 0,
    Leasehold_improvements_year7: 0,
    Leasehold_improvements_year8: 0,
    Leasehold_improvements_year9: 0,
    Furniture_fixtures_and_equipment_year6: 0,
    Furniture_fixtures_and_equipment_year7: 0,
    Furniture_fixtures_and_equipment_year8: 0,
    Furniture_fixtures_and_equipment_year9: 0,
    Less_accumulated_depreciation_year6: 0,
    Less_accumulated_depreciation_year7: 0,
    Less_accumulated_depreciation_year8: 0,
    Less_accumulated_depreciation_year9: 0,
    Net_year6: 0,
    Net_year7: 0,
    Net_year8: 0,
    Net_year9: 0,
    Land_A_year6: 0,
    Land_A_year7: 0,
    Land_A_year8: 0,
    Land_A_year9: 0,
    Land_B_year6: 0,
    Land_B_year7: 0,
    Land_B_year8: 0,
    Land_B_year9: 0,
    Construction_in_Progress_year6: 0,
    Construction_in_Progress_year7: 0,
    Construction_in_Progress_year8: 0,
    Construction_in_Progress_year9: 0,
    Subtotal_Capital_Assets_net_year6: 0,
    Subtotal_Capital_Assets_net_year7: 0,
    Subtotal_Capital_Assets_net_year8: 0,
    Subtotal_Capital_Assets_net_year9: 0,
    Capital_Assets_net_year6: 0,
    Capital_Assets_net_year7: 0,
    Capital_Assets_net_year8: 0,
    Capital_Assets_net_year9: 0,
    Restricted_cash_year6: 0,
    Restricted_cash_year7: 0,
    Restricted_cash_year8: 0,
    Restricted_cash_year9: 0,
    Total_Other_Assets_year6: 0,
    Total_Other_Assets_year7: 0,
    Total_Other_Assets_year8: 0,
    Total_Other_Assets_year9: 0,
    Deferred_outflows_of_resources_related_to_pensions_year6: 0,
    Deferred_outflows_of_resources_related_to_pensions_year7: 0,
    Deferred_outflows_of_resources_related_to_pensions_year8: 0,
    Deferred_outflows_of_resources_related_to_pensions_year9: 0,
    Deferred_outflows_of_resources_related_to_OPEB_year6: 0,
    Deferred_outflows_of_resources_related_to_OPEB_year7: 0,
    Deferred_outflows_of_resources_related_to_OPEB_year8: 0,
    Deferred_outflows_of_resources_related_to_OPEB_year9: 0,
    Total_assets_and_deferred_outflows_of_resources_year6: 0,
    Total_assets_and_deferred_outflows_of_resources_year7: 0,
    Total_assets_and_deferred_outflows_of_resources_year8: 0,
    Total_assets_and_deferred_outflows_of_resources_year9: 0,
    Accounts_payable_and_accrued_liabilities_year6: 0,
    Accounts_payable_and_accrued_liabilities_year7: 0,
    Accounts_payable_and_accrued_liabilities_year8: 0,
    Accounts_payable_and_accrued_liabilities_year9: 0,
    Due_to_fund_year6: 0,
    Due_to_fund_year7: 0,
    Due_to_fund_year8: 0,
    Due_to_fund_year9: 0,
    Due_to_other_fund_year6: 0,
    Due_to_other_fund_year7: 0,
    Due_to_other_fund_year8: 0,
    Due_to_other_fund_year9: 0,
    Accrued_vacation_year6: 0,
    Accrued_vacation_year7: 0,
    Accrued_vacation_year8: 0,
    Accrued_vacation_year9: 0,
    Workers_compensation_year6: 0,
    Workers_compensation_year7: 0,
    Workers_compensation_year8: 0,
    Workers_compensation_year9: 0,
    Accrued_management_retirement_plan_year6: 0,
    Accrued_management_retirement_plan_year7: 0,
    Accrued_management_retirement_plan_year8: 0,
    Accrued_management_retirement_plan_year9: 0,
    Accrued_lease_guaranty_obligation_year6: 0,
    Accrued_lease_guaranty_obligation_year7: 0,
    Accrued_lease_guaranty_obligation_year8: 0,
    Accrued_lease_guaranty_obligation_year9: 0,
    Capital_lease_obligation_year6: 0,
    Capital_lease_obligation_year7: 0,
    Capital_lease_obligation_year8: 0,
    Capital_lease_obligation_year9: 0,
    Notes_payable_Building_A_acquisition_year6: 0,
    Notes_payable_Building_A_acquisition_year7: 0,
    Notes_payable_Building_A_acquisition_year8: 0,
    Notes_payable_Building_A_acquisition_year9: 0,
    Net_Pension_Liability_year6: 0,
    Net_Pension_Liability_year7: 0,
    Net_Pension_Liability_year8: 0,
    Net_Pension_Liability_year9: 0,
    Net_OPEB_Liability_year6: 0,
    Net_OPEB_Liability_year7: 0,
    Net_OPEB_Liability_year8: 0,
    Net_OPEB_Liability_year9: 0,
    Line_of_Credit_Building_A_year6: 0,
    Line_of_Credit_Building_A_year7: 0,
    Line_of_Credit_Building_A_year8: 0,
    Line_of_Credit_Building_A_year9: 0,
    Line_of_Credit_Building_B_year6: 0,
    Line_of_Credit_Building_B_year7: 0,
    Line_of_Credit_Building_B_year8: 0,
    Line_of_Credit_Building_B_year9: 0,
    Debt_service_year6: 0,
    Debt_service_year7: 0,
    Debt_service_year8: 0,
    Debt_service_year9: 0,
    Longterm_liabilities_due_within_one_year_year6: 0,
    Longterm_liabilities_due_within_one_year_year7: 0,
    Longterm_liabilities_due_within_one_year_year8: 0,
    Longterm_liabilities_due_within_one_year_year9: 0,
    Long_term_Accrued_vacation_year6: 0,
    Long_term_Accrued_vacation_year7: 0,
    Long_term_Accrued_vacation_year8: 0,
    Long_term_Accrued_vacation_year9: 0,
    Long_term_Workers_compensation_year6: 0,
    Long_term_Workers_compensation_year7: 0,
    Long_term_Workers_compensation_year8: 0,
    Long_term_Workers_compensation_year9: 0,
    Long_term_Accrued_management_retirement_plan_year6: 0,
    Long_term_Accrued_management_retirement_plan_year7: 0,
    Long_term_Accrued_management_retirement_plan_year8: 0,
    Long_term_Accrued_management_retirement_plan_year9: 0,
    Long_term_Accrued_lease_guaranty_obligation_year6: 0,
    Long_term_Accrued_lease_guaranty_obligation_year7: 0,
    Long_term_Accrued_lease_guaranty_obligation_year8: 0,
    Long_term_Accrued_lease_guaranty_obligation_year9: 0,
    Long_term_Capital_lease_obligation_year6: 0,
    Long_term_Capital_lease_obligation_year7: 0,
    Long_term_Capital_lease_obligation_year8: 0,
    Long_term_Capital_lease_obligation_year9: 0,
    Long_term_Notes_payable_Building_A_acquisition_year6: 0,
    Long_term_Notes_payable_Building_A_acquisition_year7: 0,
    Long_term_Notes_payable_Building_A_acquisition_year8: 0,
    Long_term_Notes_payable_Building_A_acquisition_year9: 0,
    Long_term_Net_Pension_Liability_year6: 0,
    Long_term_Net_Pension_Liability_year7: 0,
    Long_term_Net_Pension_Liability_year8: 0,
    Long_term_Net_Pension_Liability_year9: 0,
    Long_term_Net_OPEB_Liability_year6: 0,
    Long_term_Net_OPEB_Liability_year7: 0,
    Long_term_Net_OPEB_Liability_year8: 0,
    Long_term_Net_OPEB_Liability_year9: 0,
    Long_term_Line_of_Credit_Building_A_year6: 0,
    Long_term_Line_of_Credit_Building_A_year7: 0,
    Long_term_Line_of_Credit_Building_A_year8: 0,
    Long_term_Line_of_Credit_Building_A_year9: 0,
    Long_term_Line_of_Credit_Building_B_year6: 0,
    Long_term_Line_of_Credit_Building_B_year7: 0,
    Long_term_Line_of_Credit_Building_B_year8: 0,
    Long_term_Line_of_Credit_Building_B_year9: 0,
    Long_term_Debt_service_year6: 0,
    Long_term_Debt_service_year7: 0,
    Long_term_Debt_service_year8: 0,
    Long_term_Debt_service_year9: 0,
    Longterm_liabilities_due_after_one_year_year6: 0,
    Longterm_liabilities_due_after_one_year_year7: 0,
    Longterm_liabilities_due_after_one_year_year8: 0,
    Longterm_liabilities_due_after_one_year_year9: 0,
    Total_Liabilities_year6: 0,
    Total_Liabilities_year7: 0,
    Total_Liabilities_year8: 0,
    Total_Liabilities_year9: 0,
    Deferred_inflows_of_resources_related_to_pensions_year6: 0,
    Deferred_inflows_of_resources_related_to_pensions_year7: 0,
    Deferred_inflows_of_resources_related_to_pensions_year8: 0,
    Deferred_inflows_of_resources_related_to_pensions_year9: 0,
    Deferred_inflows_of_resources_related_to_OPEB_year6: 0,
    Deferred_inflows_of_resources_related_to_OPEB_year7: 0,
    Deferred_inflows_of_resources_related_to_OPEB_year8: 0,
    Deferred_inflows_of_resources_related_to_OPEB_year9: 0,
    Total_liabilities_and_deferred_inflows_of_resources_year6: 0,
    Total_liabilities_and_deferred_inflows_of_resources_year7: 0,
    Total_liabilities_and_deferred_inflows_of_resources_year8: 0,
    Total_liabilities_and_deferred_inflows_of_resources_year9: 0,
    Invested_in_capital_assets_net_of_related_debt_year6: 0,
    Invested_in_capital_assets_net_of_related_debt_year7: 0,
    Invested_in_capital_assets_net_of_related_debt_year8: 0,
    Invested_in_capital_assets_net_of_related_debt_year9: 0,
    Restricted_federal_funds_year6: 0,
    Restricted_federal_funds_year7: 0,
    Restricted_federal_funds_year8: 0,
    Restricted_federal_funds_year9: 0,
    Unrestricted_year6: 0,
    Unrestricted_year7: 0,
    Unrestricted_year8: 0,
    Unrestricted_year9: 0,
    Total_net_position_year6: 0,
    Total_net_position_year7: 0,
    Total_net_position_year8: 0,
    Total_net_position_year9: 0,
    Total_Liabilities_Deferred_Inflows_of_Resources_and_Net_Position_year6: 0,
    Total_Liabilities_Deferred_Inflows_of_Resources_and_Net_Position_year7: 0,
    Total_Liabilities_Deferred_Inflows_of_Resources_and_Net_Position_year8: 0,
    Total_Liabilities_Deferred_Inflows_of_Resources_and_Net_Position_year9: 0,
  };

  try {
    const docID = AuditedBalanceSheets.define(auditedBalanceSheetData);
    console.log(`Audited balance sheet created with docID: ${docID}`);
  } catch (error) {
    console.error('Error creating audited balance sheet:', error);
  }
}
function createBudgetPL(userId) {
  console.log(`Creating audited balance sheet for user ${userId}`);
  const BudgetPLData = {
    owner: userId,
    Investment_Portfolio_5_percent_year6: 0,
    Investment_Portfolio_5_percent_year7: 0,
    Investment_Portfolio_5_percent_year8: 0,
    Investment_Portfolio_5_percent_year9: 0,

    Revenues_year6: 0,
    Revenues_year7: 0,
    Revenues_year8: 0,
    Revenues_year9: 0,

    General_Fund_year6: 0,
    General_Fund_year7: 0,
    General_Fund_year8: 0,
    General_Fund_year9: 0,

    Core_Operating_Budget_NOT_Authorized_year6: 0,
    Core_Operating_Budget_NOT_Authorized_year7: 0,
    Core_Operating_Budget_NOT_Authorized_year8: 0,
    Core_Operating_Budget_NOT_Authorized_year9: 0,

    Total_Revenue_year6: 0,
    Total_Revenue_year7: 0,
    Total_Revenue_year8: 0,
    Total_Revenue_year9: 0,

    Admin_Salary_year6: 0,
    Admin_Salary_year7: 0,
    Admin_Salary_year8: 0,
    Admin_Salary_year9: 0,

    Admin_Pension_Accumulation_year6: 0,
    Admin_Pension_Accumulation_year7: 0,
    Admin_Pension_Accumulation_year8: 0,
    Admin_Pension_Accumulation_year9: 0,

    Admin_Retiree_Health_Insurance_year6: 0,
    Admin_Retiree_Health_Insurance_year7: 0,
    Admin_Retiree_Health_Insurance_year8: 0,
    Admin_Retiree_Health_Insurance_year9: 0,

    Admin_Other_Post_Employment_Benefits_year6: 0,
    Admin_Other_Post_Employment_Benefits_year7: 0,
    Admin_Other_Post_Employment_Benefits_year8: 0,
    Admin_Other_Post_Employment_Benefits_year9: 0,

    Admin_Employees_Health_Fund_year6: 0,
    Admin_Employees_Health_Fund_year7: 0,
    Admin_Employees_Health_Fund_year8: 0,
    Admin_Employees_Health_Fund_year9: 0,

    Admin_Social_Security_year6: 0,
    Admin_Social_Security_year7: 0,
    Admin_Social_Security_year8: 0,
    Admin_Social_Security_year9: 0,

    Admin_Medicare_year6: 0,
    Admin_Medicare_year7: 0,
    Admin_Medicare_year8: 0,
    Admin_Medicare_year9: 0,

    Admin_Workers_Compensation_year6: 0,
    Admin_Workers_Compensation_year7: 0,
    Admin_Workers_Compensation_year8: 0,
    Admin_Workers_Compensation_year9: 0,

    Admin_Unemployment_Compensation_year6: 0,
    Admin_Unemployment_Compensation_year7: 0,
    Admin_Unemployment_Compensation_year8: 0,
    Admin_Unemployment_Compensation_year9: 0,

    Admin_Pension_Administration_year6: 0,
    Admin_Pension_Administration_year7: 0,
    Admin_Pension_Administration_year8: 0,
    Admin_Pension_Administration_year9: 0,

    Admin_Fringe_Benefits_year6: 0,
    Admin_Fringe_Benefits_year7: 0,
    Admin_Fringe_Benefits_year8: 0,
    Admin_Fringe_Benefits_year9: 0,

    Admin_Personnel_Fring_year6: 0,
    Admin_Personnel_Fring_year7: 0,
    Admin_Personnel_Fring_year8: 0,
    Admin_Personnel_Fring_year9: 0,

    Admin_Staff_Salary_year6: 0,
    Admin_Staff_Salary_year7: 0,
    Admin_Staff_Salary_year8: 0,
    Admin_Staff_Salary_year9: 0,

    Admin_Staff_Pension_Accumulation_year6: 0,
    Admin_Staff_Pension_Accumulation_year7: 0,
    Admin_Staff_Pension_Accumulation_year8: 0,
    Admin_Staff_Pension_Accumulation_year9: 0,

    Admin_Staff_Retiree_Health_Insurance_year6: 0,
    Admin_Staff_Retiree_Health_Insurance_year7: 0,
    Admin_Staff_Retiree_Health_Insurance_year8: 0,
    Admin_Staff_Retiree_Health_Insurance_year9: 0,

    Admin_Staff_Other_Post_Employment_Benefits_year6: 0,
    Admin_Staff_Other_Post_Employment_Benefits_year7: 0,
    Admin_Staff_Other_Post_Employment_Benefits_year8: 0,
    Admin_Staff_Other_Post_Employment_Benefits_year9: 0,

    Admin_Staff_Employees_Health_Fund_year6: 0,
    Admin_Staff_Employees_Health_Fund_year7: 0,
    Admin_Staff_Employees_Health_Fund_year8: 0,
    Admin_Staff_Employees_Health_Fund_year9: 0,

    Admin_Staff_Social_Security_year6: 0,
    Admin_Staff_Social_Security_year7: 0,
    Admin_Staff_Social_Security_year8: 0,
    Admin_Staff_Social_Security_year9: 0,

    Admin_Staff_Medicare_year6: 0,
    Admin_Staff_Medicare_year7: 0,
    Admin_Staff_Medicare_year8: 0,
    Admin_Staff_Medicare_year9: 0,

    Admin_Staff_Workers_Compensation_year6: 0,
    Admin_Staff_Workers_Compensation_year7: 0,
    Admin_Staff_Workers_Compensation_year8: 0,
    Admin_Staff_Workers_Compensation_year9: 0,

    Admin_Staff_Unemployment_Compensation_year6: 0,
    Admin_Staff_Unemployment_Compensation_year7: 0,
    Admin_Staff_Unemployment_Compensation_year8: 0,
    Admin_Staff_Unemployment_Compensation_year9: 0,

    Admin_Staff_Pension_Administration_year6: 0,
    Admin_Staff_Pension_Administration_year7: 0,
    Admin_Staff_Pension_Administration_year8: 0,
    Admin_Staff_Pension_Administration_year9: 0,

    Management_Salary_year6: 0,
    Management_Salary_year7: 0,
    Management_Salary_year8: 0,
    Management_Salary_year9: 0,

    Management_Pension_Accumulation_year6: 0,
    Management_Pension_Accumulation_year7: 0,
    Management_Pension_Accumulation_year8: 0,
    Management_Pension_Accumulation_year9: 0,

    Management_Retiree_Health_Insurance_year6: 0,
    Management_Retiree_Health_Insurance_year7: 0,
    Management_Retiree_Health_Insurance_year8: 0,
    Management_Retiree_Health_Insurance_year9: 0,

    Management_Other_Post_Employment_Benefits_year6: 0,
    Management_Other_Post_Employment_Benefits_year7: 0,
    Management_Other_Post_Employment_Benefits_year8: 0,
    Management_Other_Post_Employment_Benefits_year9: 0,

    Management_Employees_Health_Fund_year6: 0,
    Management_Employees_Health_Fund_year7: 0,
    Management_Employees_Health_Fund_year8: 0,
    Management_Employees_Health_Fund_year9: 0,

    Management_Social_Security_year6: 0,
    Management_Social_Security_year7: 0,
    Management_Social_Security_year8: 0,
    Management_Social_Security_year9: 0,

    Management_Medicare_year6: 0,
    Management_Medicare_year7: 0,
    Management_Medicare_year8: 0,
    Management_Medicare_year9: 0,

    Management_Workers_Compensation_year6: 0,
    Management_Workers_Compensation_year7: 0,
    Management_Workers_Compensation_year8: 0,
    Management_Workers_Compensation_year9: 0,

    Management_Unemployment_Compensation_year6: 0,
    Management_Unemployment_Compensation_year7: 0,
    Management_Unemployment_Compensation_year8: 0,
    Management_Unemployment_Compensation_year9: 0,

    Management_Pension_Administration_year6: 0,
    Management_Pension_Administration_year7: 0,
    Management_Pension_Administration_year8: 0,
    Management_Pension_Administration_year9: 0,

    Program_year6: 0,
    Program_year7: 0,
    Program_year8: 0,
    Program_year9: 0,

    Contracts_year6: 0,
    Contracts_year7: 0,
    Contracts_year8: 0,
    Contracts_year9: 0,

    Grants_year6: 0,
    Grants_year7: 0,
    Grants_year8: 0,
    Grants_year9: 0,

    Travel_year6: 0,
    Travel_year7: 0,
    Travel_year8: 0,
    Travel_year9: 0,

    Equipment_year6: 0,
    Equipment_year7: 0,
    Equipment_year8: 0,
    Equipment_year9: 0,

    Overhead_year6: 0,
    Overhead_year7: 0,
    Overhead_year8: 0,
    Overhead_year9: 0,

    Debt_Service_year6: 0,
    Debt_Service_year7: 0,
    Debt_Service_year8: 0,
    Debt_Service_year9: 0,

    Other_year6: 0,
    Other_year7: 0,
    Other_year8: 0,
    Other_year9: 0,

    Total_Expenses_year6: 0,
    Total_Expenses_year7: 0,
    Total_Expenses_year8: 0,
    Total_Expenses_year9: 0,

    Surplus_Deficit_year6: 0,
    Surplus_Deficit_year7: 0,
    Surplus_Deficit_year8: 0,
    Surplus_Deficit_year9: 0,

    Management_year6: 0,
    Management_year7: 0,
    Management_year8: 0,
    Management_year9: 0,

    Support_Services_year6: 0,
    Support_Services_year7: 0,
    Support_Services_year8: 0,
    Support_Services_year9: 0,

    Beneficiary_Advocacy_year6: 0,
    Beneficiary_Advocacy_year7: 0,
    Beneficiary_Advocacy_year8: 0,
    Beneficiary_Advocacy_year9: 0,

  };

  try {
    const docID = BudgetPLs.define(BudgetPLData);
    console.log(`BudgetPL created with docID: ${docID}`);
  } catch (error) {
    console.error('Error creating BudgetPL:', error);
  }
}

>>>>>>> issue-70
// Function to create a new user and then their balance sheet
function createUser(email, role, firstName, lastName, password) {
  console.log(`  Creating user ${email} with role ${role}.`);

  // User creation process
  if (role === ROLE.ADMIN) {
    AdminProfiles.define({ email, firstName, lastName, password });
  } else { // everyone else is just a user.
    UserProfiles.define({ email, firstName, lastName, password });
  }
<<<<<<< HEAD
=======

  // Make sure the user is created before creating the audited balance sheet
  Meteor.setTimeout(() => {
    const user = Meteor.users.findOne({ 'emails.address': email });
    if (user) {
      createAuditedBalanceSheet(user._id);
      createBudgetPL(user._id);
    } else {
      console.error(`Error: Unable to find user with email ${email} to create balance sheet.`);
    }
  }, 10000); // Small delay to allow user creation before trying to find the userId
>>>>>>> issue-70
}

// When running app for the first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.forEach(({ email, password, role, firstName, lastName }) => createUser(email, role, firstName, lastName, password));
  } else {
    console.log('Cannot initialize the database! Please invoke meteor with a settings file.');
  }
}
