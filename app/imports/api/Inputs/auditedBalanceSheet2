import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';

export const AuditedBalanceSheetPublications = {
  AuditedBalanceSheet: 'AuditedBalanceSheet',
  AuditedBalanceSheetAdmin: 'AuditedBalanceSheetAdmin',
};

class AuditedBalanceSheetCollection extends BaseCollection {
  constructor() {
    // Define the years dynamically
    const years = ['year6', 'year7', 'year8', 'year9'];

    // Define the list of all base fields
    const fields = [
      'Petty_cash',
      'Cash',
      'Cash_in_banksDraw_on_Line_of_Credit',
      'Total_Cash_and_Cash_Equivalents',
      'Accounts_receivable',
      'Due_from_other_fund',
      'Interest_and_dividends_receivable',
      'Inventory_prepaid_items_and_other_assets',
      'Notes_receivable_due_within_one_year',
      'Notes_receivable_due_after_one_year',
      'Security_Deposits',
      'Cash_held_by_investment_manager',
      'Mutual_Funds',
      'Commingled_funds',
      'Hedge_funds',
      'Private_equity',
      'Common_trust_fund',
      'Common_preferred_stock',
      'Private_debt',
      'Other',
      'Subtotal_Investment',
      'US_treasuries',
      'US_agencies',
      'Subtotal_Loan_Fund',
      'Investments',
      'Buildings',
      'Leasehold_improvements',
      'Furniture_fixtures_and_equipment',
      'Less_accumulated_depreciation',
      'Net',
      'Land_A',
      'Land_B',
      'Construction_in_Progress',
      'Subtotal_Capital_Assets_net',
      'Investments_Buildings',
      'Investments_Leasehold_improvements',
      'Investments_Furniture',
      'Investments_fixtures_and_equipment',
      'Vehicles',
      'Investments_Less_accumulated_depreciation',
      'Investments_Net',
      'Land',
      'Subtotal_Limited_Liability_Company_Bs_assets_net',
      'Capital_Assets_net',
      'Restricted_cash',
      'Total_Other_Assets',
      'Deferred_outflows_of_resources_related_to_pensions',
      'Deferred_outflows_of_resources_related_to_OPEB',
      'Total_assets_and_deferred_outflows_of_resources',
      'Accounts_payable_and_accrued_liabilities',
      'Due_to_fund',
      'Due_to_other_fund',
      'Accrued_vacation',
      'Workers_compensation',
      'Accrued_management_retirement_plan',
      'Accrued_lease_guaranty_obligation',
      'Capital_lease_obligation',
      'Notes_payable_Building_A_acquisition',
      'Net_Pension_Liability',
      'Net_OPEB_Liability',
      'Line_of_Credit_Building_A',
      'Line_of_Credit_Building_B',
      'Debt_service',
      'Longterm_liabilities_due_within_one_year',
      'Long_term_Accrued_vacation',
      'Long_term_Workers_compensation',
      'Long_term_Accrued_management_retirement_plan',
      'Long_term_Accrued_lease_guaranty_obligation',
      'Long_term_Capital_lease_obligation',
      'Long_term_Notes_payable_Building_A_acquisition',
      'Long_term_Net_Pension_Liability',
      'Long_term_Net_OPEB_Liability',
      'Long_term_Line_of_Credit_Building_A',
      'Long_term_Line_of_Credit_Building_B',
      'Long_term_Debt_service',
      'Longterm_liabilities_due_after_one_year',
      'Total_Liabilities',
      'Deferred_inflows_of_resources_related_to_pensions',
      'Deferred_inflows_of_resources_related_to_OPEB',
      'Total_liabilities_and_deferred_inflows_of_resources',
      'Invested_in_capital_assets_net_of_related_debt',
      'Restricted_federal_funds',
      'Unrestricted',
      'Total_net_position',
      'Total_Liabilities_Deferred_Inflows_of_Resources_and_Net_Position',
    ];

    // Generating schema dynamically
    const schemaDefinition = {};

    fields.forEach(field => {
      schemaDefinition[field] = { type: Object, blackbox: true };
      years.forEach(year => {
        schemaDefinition[`${field}.${year}`] = Number;
      });
    });

    // Pass generated schema to the constructor
    super('AuditedBalanceSheets', new SimpleSchema(schemaDefinition));
  }

  define(data) {
    const docID = this._collection.insert(data);
    return docID;
  }

  update(docID, data) {
    const updateData = {};

    Object.entries(data).forEach(([key, value]) => {
      if (_.isNumber(value)) {
        updateData[key] = value;
      }
    });

    this._collection.update(docID, { $set: updateData });
  }

  removeIt(name) {
    const doc = this.findDoc(name);
    check(doc, Object);
    this._collection.remove(doc._id);
    return true;
  }

  publish() {
    if (Meteor.isServer) {
      const instance = this;
      Meteor.publish(AuditedBalanceSheetPublications.AuditedBalanceSheet, function () {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      Meteor.publish(AuditedBalanceSheetPublications.AuditedBalanceSheetAdmin, function () {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.ADMIN)) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  subscribeAuditedBalanceSheet() {
    if (Meteor.isClient) {
      return Meteor.subscribe(AuditedBalanceSheetPublications.AuditedBalanceSheet);
    }
    return null;
  }

  subscribeAuditedBalanceSheetAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(AuditedBalanceSheetPublications.AuditedBalanceSheetAdmin);
    }
    return null;
  }

  assertValidRoleForMethod(userId) {
    this.assertRole(userId, [ROLE.ADMIN, ROLE.USER]);
  }

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const result = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const key in doc) {
      if (Object.prototype.hasOwnProperty.call(doc, key)) {
        result[key] = doc[key];
      }
    }
    return result;
  }
}

export const AuditedBalanceSheets = new AuditedBalanceSheetCollection();
