import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';

// Run this in meteor terminal to check the database: db.BudgetCollection.find().pretty();
export const BudgetPublications = {
  Budget: 'Budget',
  BudgetAdmin: 'BudgetAdmin',
};

class BudgetCollection extends BaseCollection {
  constructor() {
    super('Budget', new SimpleSchema({
      Year: Number,
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
    }));
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
      Meteor.publish(BudgetPublications.Budget, function () {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      Meteor.publish(BudgetPublications.BudgetAdmin, function () {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.ADMIN)) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  subscribeBudget() {
    if (Meteor.isClient) {
      return Meteor.subscribe(BudgetPublications.Budget);
    }
    return null;
  }

  subscribeBudgetSheet() {
    if (Meteor.isClient) {
      return Meteor.subscribe(BudgetPublications.BudgetAdmin);
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

export const Budget = new BudgetCollection();
