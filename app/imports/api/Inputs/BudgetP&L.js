/* eslint-disable no-unused-vars */
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';

export const BudgetPLPublications = {
  BudgetPL: 'BudgetPL',
  BudgetPLAdmin: 'BudgetPLAdmin',
};

class BudgetPLCollection extends BaseCollection {
  constructor() {
    super('BudgetPLs', new SimpleSchema({
      owner: String,
      Investment_Portfolio_5_percent_year6: Number,
      Investment_Portfolio_5_percent_year7: Number,
      Investment_Portfolio_5_percent_year8: Number,
      Investment_Portfolio_5_percent_year9: Number,

      Revenues_year6: Number,
      Revenues_year7: Number,
      Revenues_year8: Number,
      Revenues_year9: Number,

      General_Fund_year6: Number,
      General_Fund_year7: Number,
      General_Fund_year8: Number,
      General_Fund_year9: Number,

      Core_Operating_Budget_NOT_Authorized_year6: Number,
      Core_Operating_Budget_NOT_Authorized_year7: Number,
      Core_Operating_Budget_NOT_Authorized_year8: Number,
      Core_Operating_Budget_NOT_Authorized_year9: Number,

      Total_Revenue_year6: Number,
      Total_Revenue_year7: Number,
      Total_Revenue_year8: Number,
      Total_Revenue_year9: Number,

      Admin_Salary_year6: Number,
      Admin_Salary_year7: Number,
      Admin_Salary_year8: Number,
      Admin_Salary_year9: Number,

      Admin_Pension_Accumulation_year6: Number,
      Admin_Pension_Accumulation_year7: Number,
      Admin_Pension_Accumulation_year8: Number,
      Admin_Pension_Accumulation_year9: Number,

      Admin_Retiree_Health_Insurance_year6: Number,
      Admin_Retiree_Health_Insurance_year7: Number,
      Admin_Retiree_Health_Insurance_year8: Number,
      Admin_Retiree_Health_Insurance_year9: Number,

      Admin_Other_Post_Employment_Benefits_year6: Number,
      Admin_Other_Post_Employment_Benefits_year7: Number,
      Admin_Other_Post_Employment_Benefits_year8: Number,
      Admin_Other_Post_Employment_Benefits_year9: Number,

      Admin_Employees_Health_Fund_year6: Number,
      Admin_Employees_Health_Fund_year7: Number,
      Admin_Employees_Health_Fund_year8: Number,
      Admin_Employees_Health_Fund_year9: Number,

      Admin_Social_Security_year6: Number,
      Admin_Social_Security_year7: Number,
      Admin_Social_Security_year8: Number,
      Admin_Social_Security_year9: Number,

      Admin_Medicare_year6: Number,
      Admin_Medicare_year7: Number,
      Admin_Medicare_year8: Number,
      Admin_Medicare_year9: Number,

      Admin_Workers_Compensation_year6: Number,
      Admin_Workers_Compensation_year7: Number,
      Admin_Workers_Compensation_year8: Number,
      Admin_Workers_Compensation_year9: Number,

      Admin_Unemployment_Compensation_year6: Number,
      Admin_Unemployment_Compensation_year7: Number,
      Admin_Unemployment_Compensation_year8: Number,
      Admin_Unemployment_Compensation_year9: Number,

      Admin_Pension_Administration_year6: Number,
      Admin_Pension_Administration_year7: Number,
      Admin_Pension_Administration_year8: Number,
      Admin_Pension_Administration_year9: Number,

      Admin_Fringe_Benefits_year6: Number,
      Admin_Fringe_Benefits_year7: Number,
      Admin_Fringe_Benefits_year8: Number,
      Admin_Fringe_Benefits_year9: Number,

      Admin_Personnel_Fring_year6: Number,
      Admin_Personnel_Fring_year7: Number,
      Admin_Personnel_Fring_year8: Number,
      Admin_Personnel_Fring_year9: Number,

      Admin_Staff_Salary_year6: Number,
      Admin_Staff_Salary_year7: Number,
      Admin_Staff_Salary_year8: Number,
      Admin_Staff_Salary_year9: Number,

      Admin_Staff_Pension_Accumulation_year6: Number,
      Admin_Staff_Pension_Accumulation_year7: Number,
      Admin_Staff_Pension_Accumulation_year8: Number,
      Admin_Staff_Pension_Accumulation_year9: Number,

      Admin_Staff_Retiree_Health_Insurance_year6: Number,
      Admin_Staff_Retiree_Health_Insurance_year7: Number,
      Admin_Staff_Retiree_Health_Insurance_year8: Number,
      Admin_Staff_Retiree_Health_Insurance_year9: Number,

      Admin_Staff_Other_Post_Employment_Benefits_year6: Number,
      Admin_Staff_Other_Post_Employment_Benefits_year7: Number,
      Admin_Staff_Other_Post_Employment_Benefits_year8: Number,
      Admin_Staff_Other_Post_Employment_Benefits_year9: Number,

      Admin_Staff_Employees_Health_Fund_year6: Number,
      Admin_Staff_Employees_Health_Fund_year7: Number,
      Admin_Staff_Employees_Health_Fund_year8: Number,
      Admin_Staff_Employees_Health_Fund_year9: Number,

      Admin_Staff_Social_Security_year6: Number,
      Admin_Staff_Social_Security_year7: Number,
      Admin_Staff_Social_Security_year8: Number,
      Admin_Staff_Social_Security_year9: Number,

      Admin_Staff_Medicare_year6: Number,
      Admin_Staff_Medicare_year7: Number,
      Admin_Staff_Medicare_year8: Number,
      Admin_Staff_Medicare_year9: Number,

      Admin_Staff_Workers_Compensation_year6: Number,
      Admin_Staff_Workers_Compensation_year7: Number,
      Admin_Staff_Workers_Compensation_year8: Number,
      Admin_Staff_Workers_Compensation_year9: Number,

      Admin_Staff_Unemployment_Compensation_year6: Number,
      Admin_Staff_Unemployment_Compensation_year7: Number,
      Admin_Staff_Unemployment_Compensation_year8: Number,
      Admin_Staff_Unemployment_Compensation_year9: Number,

      Admin_Staff_Pension_Administration_year6: Number,
      Admin_Staff_Pension_Administration_year7: Number,
      Admin_Staff_Pension_Administration_year8: Number,
      Admin_Staff_Pension_Administration_year9: Number,

      Management_Salary_year6: Number,
      Management_Salary_year7: Number,
      Management_Salary_year8: Number,
      Management_Salary_year9: Number,

      Management_Pension_Accumulation_year6: Number,
      Management_Pension_Accumulation_year7: Number,
      Management_Pension_Accumulation_year8: Number,
      Management_Pension_Accumulation_year9: Number,

      Management_Retiree_Health_Insurance_year6: Number,
      Management_Retiree_Health_Insurance_year7: Number,
      Management_Retiree_Health_Insurance_year8: Number,
      Management_Retiree_Health_Insurance_year9: Number,

      Management_Other_Post_Employment_Benefits_year6: Number,
      Management_Other_Post_Employment_Benefits_year7: Number,
      Management_Other_Post_Employment_Benefits_year8: Number,
      Management_Other_Post_Employment_Benefits_year9: Number,

      Management_Employees_Health_Fund_year6: Number,
      Management_Employees_Health_Fund_year7: Number,
      Management_Employees_Health_Fund_year8: Number,
      Management_Employees_Health_Fund_year9: Number,

      Management_Social_Security_year6: Number,
      Management_Social_Security_year7: Number,
      Management_Social_Security_year8: Number,
      Management_Social_Security_year9: Number,

      Management_Medicare_year6: Number,
      Management_Medicare_year7: Number,
      Management_Medicare_year8: Number,
      Management_Medicare_year9: Number,

      Management_Workers_Compensation_year6: Number,
      Management_Workers_Compensation_year7: Number,
      Management_Workers_Compensation_year8: Number,
      Management_Workers_Compensation_year9: Number,

      Management_Unemployment_Compensation_year6: Number,
      Management_Unemployment_Compensation_year7: Number,
      Management_Unemployment_Compensation_year8: Number,
      Management_Unemployment_Compensation_year9: Number,

      Management_Pension_Administration_year6: Number,
      Management_Pension_Administration_year7: Number,
      Management_Pension_Administration_year8: Number,
      Management_Pension_Administration_year9: Number,

      Program_year6: Number,
      Program_year7: Number,
      Program_year8: Number,
      Program_year9: Number,

      Contracts_year6: Number,
      Contracts_year7: Number,
      Contracts_year8: Number,
      Contracts_year9: Number,

      Grants_year6: Number,
      Grants_year7: Number,
      Grants_year8: Number,
      Grants_year9: Number,

      Travel_year6: Number,
      Travel_year7: Number,
      Travel_year8: Number,
      Travel_year9: Number,

      Equipment_year6: Number,
      Equipment_year7: Number,
      Equipment_year8: Number,
      Equipment_year9: Number,

      Overhead_year6: Number,
      Overhead_year7: Number,
      Overhead_year8: Number,
      Overhead_year9: Number,

      Debt_Service_year6: Number,
      Debt_Service_year7: Number,
      Debt_Service_year8: Number,
      Debt_Service_year9: Number,

      Other_year6: Number,
      Other_year7: Number,
      Other_year8: Number,
      Other_year9: Number,

      Total_Expenses_year6: Number,
      Total_Expenses_year7: Number,
      Total_Expenses_year8: Number,
      Total_Expenses_year9: Number,

      Surplus_Deficit_year6: Number,
      Surplus_Deficit_year7: Number,
      Surplus_Deficit_year8: Number,
      Surplus_Deficit_year9: Number,

      Management_year6: Number,
      Management_year7: Number,
      Management_year8: Number,
      Management_year9: Number,

      Support_Services_year6: Number,
      Support_Services_year7: Number,
      Support_Services_year8: Number,
      Support_Services_year9: Number,

      Beneficiary_Advocacy_year6: Number,
      Beneficiary_Advocacy_year7: Number,
      Beneficiary_Advocacy_year8: Number,
      Beneficiary_Advocacy_year9: Number,
    }));
  }

  define({ owner }) {
    const BudgetPLData = {
      owner,
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

    const docID = this._collection.insert(BudgetPLData);
    return docID;
  }

  /**
* Updates the given document with new field values.
* @param {String} docID - The ID of the document to update.
* @param {Object} updatedFields - The new values for the fields.
*/
  update(docID, updatedFields) {
    const updateData = {};
    Object.entries(updatedFields).forEach(([key, value]) => {
      if (_.isNumber(value)) {
        updateData[key] = value;
      }
    });
    this._collection.update(docID, { $set: updateData });
  }

  /**
* A stricter form of remove that throws an error if the document or docID could not be found.
* @param {String | Object} name - A document or docID in this collection.
* @return {Boolean} true
*/
  removeIt(name) {
    const doc = this.findDoc(name);
    check(doc, Object);
    this._collection.remove(doc._id);
    return true;
  }

  /**
* Default publication method for entities.
* It publishes the entire collection for admin and just the BudgetPL associated to an owner.
*/
  publish() {
    if (Meteor.isServer) {
      const instance = this;

      // Publish only documents associated with the logged-in user
      Meteor.publish(BudgetPLPublications.BudgetPL, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      // Publish all documents, but only for admin users
      Meteor.publish('BudgetPLs', function () {
        // eslint-disable-next-line no-use-before-define
        return BudgetPLs.find(); // Ensure it is correctly publishing documents
      });

    }
  }

  /**
* Subscription method for BudgetPL owned by the current user.
*/
  subscribeBudgetPL() {
    return Meteor.subscribe('BudgetPL');
  }

  getCollectionName() {
    return this._collection._name;
  }

  /**
* Subscription method for admin users.
* It subscribes to the entire collection.
*/
  subscribeBudgetPLAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(BudgetPLPublications.BudgetPLAdmin);
    }
    return null;
  }

  /**
* Default implementation of assertValidRoleForMethod. Asserts that userId is logged in as an Admin or User.
* This is used in the define, update, and removeIt Meteor methods.
* @param {String} userId - The userId of the logged in user.
* @throws {Meteor.Error} If the user is not logged in as an Admin or User.
*/
  assertValidRoleForMethod(userId) {
    this.assertRole(userId, [ROLE.ADMIN, ROLE.USER]);
  }

  /**
* Returns an object representing the definition of docID in a format appropriate to the restoreOne or define function.
* @param {String} docID - The ID of the document.
* @return {Object} - The document's data.
*/

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    return {
      Investment_Portfolio_5_percent_year6: doc.Investment_Portfolio_5_percent_year6,
      Investment_Portfolio_5_percent_year7: doc.Investment_Portfolio_5_percent_year7,
      Investment_Portfolio_5_percent_year8: doc.Investment_Portfolio_5_percent_year8,
      Investment_Portfolio_5_percent_year9: doc.Investment_Portfolio_5_percent_year9,

      Revenues_year6: doc.Revenues_year6,
      Revenues_year7: doc.Revenues_year7,
      Revenues_year8: doc.Revenues_year8,
      Revenues_year9: doc.Revenues_year9,

      General_Fund_year6: doc.General_Fund_year6,
      General_Fund_year7: doc.General_Fund_year7,
      General_Fund_year8: doc.General_Fund_year8,
      General_Fund_year9: doc.General_Fund_year9,

      Core_Operating_Budget_NOT_Authorized_year6: doc.Core_Operating_Budget_NOT_Authorized_year6,
      Core_Operating_Budget_NOT_Authorized_year7: doc.Core_Operating_Budget_NOT_Authorized_year7,
      Core_Operating_Budget_NOT_Authorized_year8: doc.Core_Operating_Budget_NOT_Authorized_year8,
      Core_Operating_Budget_NOT_Authorized_year9: doc.Core_Operating_Budget_NOT_Authorized_year9,

      Total_Revenue_year6: doc.Total_Revenue_year6,
      Total_Revenue_year7: doc.Total_Revenue_year7,
      Total_Revenue_year8: doc.Total_Revenue_year8,
      Total_Revenue_year9: doc.Total_Revenue_year9,

      Admin_Salary_year6: doc.Admin_Salary_year6,
      Admin_Salary_year7: doc.Admin_Salary_year7,
      Admin_Salary_year8: doc.Admin_Salary_year8,
      Admin_Salary_year9: doc.Admin_Salary_year9,

      Admin_Pension_Accumulation_year6: doc.Admin_Pension_Accumulation_year6,
      Admin_Pension_Accumulation_year7: doc.Admin_Pension_Accumulation_year7,
      Admin_Pension_Accumulation_year8: doc.Admin_Pension_Accumulation_year8,
      Admin_Pension_Accumulation_year9: doc.Admin_Pension_Accumulation_year9,

      Admin_Retiree_Health_Insurance_year6: doc.Admin_Retiree_Health_Insurance_year6,
      Admin_Retiree_Health_Insurance_year7: doc.Admin_Retiree_Health_Insurance_year7,
      Admin_Retiree_Health_Insurance_year8: doc.Admin_Retiree_Health_Insurance_year8,
      Admin_Retiree_Health_Insurance_year9: doc.Admin_Retiree_Health_Insurance_year9,

      Admin_Other_Post_Employment_Benefits_year6: doc.Admin_Other_Post_Employment_Benefits_year6,
      Admin_Other_Post_Employment_Benefits_year7: doc.Admin_Other_Post_Employment_Benefits_year7,
      Admin_Other_Post_Employment_Benefits_year8: doc.Admin_Other_Post_Employment_Benefits_year8,
      Admin_Other_Post_Employment_Benefits_year9: doc.Admin_Other_Post_Employment_Benefits_year9,

      Admin_Employees_Health_Fund_year6: doc.Admin_Employees_Health_Fund_year6,
      Admin_Employees_Health_Fund_year7: doc.Admin_Employees_Health_Fund_year7,
      Admin_Employees_Health_Fund_year8: doc.Admin_Employees_Health_Fund_year8,
      Admin_Employees_Health_Fund_year9: doc.Admin_Employees_Health_Fund_year9,

      Admin_Social_Security_year6: doc.Admin_Social_Security_year6,
      Admin_Social_Security_year7: doc.Admin_Social_Security_year7,
      Admin_Social_Security_year8: doc.Admin_Social_Security_year8,
      Admin_Social_Security_year9: doc.Admin_Social_Security_year9,

      Admin_Medicare_year6: doc.Admin_Medicare_year6,
      Admin_Medicare_year7: doc.Admin_Medicare_year7,
      Admin_Medicare_year8: doc.Admin_Medicare_year8,
      Admin_Medicare_year9: doc.Admin_Medicare_year9,

      Admin_Workers_Compensation_year6: doc.Admin_Workers_Compensation_year6,
      Admin_Workers_Compensation_year7: doc.Admin_Workers_Compensation_year7,
      Admin_Workers_Compensation_year8: doc.Admin_Workers_Compensation_year8,
      Admin_Workers_Compensation_year9: doc.Admin_Workers_Compensation_year9,

      Admin_Unemployment_Compensation_year6: doc.Admin_Unemployment_Compensation_year6,
      Admin_Unemployment_Compensation_year7: doc.Admin_Unemployment_Compensation_year7,
      Admin_Unemployment_Compensation_year8: doc.Admin_Unemployment_Compensation_year8,
      Admin_Unemployment_Compensation_year9: doc.Admin_Unemployment_Compensation_year9,

      Admin_Pension_Administration_year6: doc.Admin_Pension_Administration_year6,
      Admin_Pension_Administration_year7: doc.Admin_Pension_Administration_year7,
      Admin_Pension_Administration_year8: doc.Admin_Pension_Administration_year8,
      Admin_Pension_Administration_year9: doc.Admin_Pension_Administration_year9,

      Admin_Fringe_Benefits_year6: doc.Admin_Fringe_Benefits_year6,
      Admin_Fringe_Benefits_year7: doc.Admin_Fringe_Benefits_year7,
      Admin_Fringe_Benefits_year8: doc.Admin_Fringe_Benefits_year8,
      Admin_Fringe_Benefits_year9: doc.Admin_Fringe_Benefits_year9,

      Admin_Personnel_Fring_year6: doc.Admin_Personnel_Fring_year6,
      Admin_Personnel_Fring_year7: doc.Admin_Personnel_Fring_year7,
      Admin_Personnel_Fring_year8: doc.Admin_Personnel_Fring_year8,
      Admin_Personnel_Fring_year9: doc.Admin_Personnel_Fring_year9,

      Admin_Staff_Salary_year6: doc.Admin_Staff_Salary_year6,
      Admin_Staff_Salary_year7: doc.Admin_Staff_Salary_year7,
      Admin_Staff_Salary_year8: doc.Admin_Staff_Salary_year8,
      Admin_Staff_Salary_year9: doc.Admin_Staff_Salary_year9,

      Admin_Staff_Pension_Accumulation_year6: doc.Admin_Staff_Pension_Accumulation_year6,
      Admin_Staff_Pension_Accumulation_year7: doc.Admin_Staff_Pension_Accumulation_year7,
      Admin_Staff_Pension_Accumulation_year8: doc.Admin_Staff_Pension_Accumulation_year8,
      Admin_Staff_Pension_Accumulation_year9: doc.Admin_Staff_Pension_Accumulation_year9,

      Admin_Staff_Retiree_Health_Insurance_year6: doc.Admin_Staff_Retiree_Health_Insurance_year6,
      Admin_Staff_Retiree_Health_Insurance_year7: doc.Admin_Staff_Retiree_Health_Insurance_year7,
      Admin_Staff_Retiree_Health_Insurance_year8: doc.Admin_Staff_Retiree_Health_Insurance_year8,
      Admin_Staff_Retiree_Health_Insurance_year9: doc.Admin_Staff_Retiree_Health_Insurance_year9,

      Admin_Staff_Other_Post_Employment_Benefits_year6: doc.Admin_Staff_Other_Post_Employment_Benefits_year6,
      Admin_Staff_Other_Post_Employment_Benefits_year7: doc.Admin_Staff_Other_Post_Employment_Benefits_year7,
      Admin_Staff_Other_Post_Employment_Benefits_year8: doc.Admin_Staff_Other_Post_Employment_Benefits_year8,
      Admin_Staff_Other_Post_Employment_Benefits_year9: doc.Admin_Staff_Other_Post_Employment_Benefits_year9,

      Admin_Staff_Employees_Health_Fund_year6: doc.Admin_Staff_Employees_Health_Fund_year6,
      Admin_Staff_Employees_Health_Fund_year7: doc.Admin_Staff_Employees_Health_Fund_year7,
      Admin_Staff_Employees_Health_Fund_year8: doc.Admin_Staff_Employees_Health_Fund_year8,
      Admin_Staff_Employees_Health_Fund_year9: doc.Admin_Staff_Employees_Health_Fund_year9,

      Admin_Staff_Social_Security_year6: doc.Admin_Staff_Social_Security_year6,
      Admin_Staff_Social_Security_year7: doc.Admin_Staff_Social_Security_year7,
      Admin_Staff_Social_Security_year8: doc.Admin_Staff_Social_Security_year8,
      Admin_Staff_Social_Security_year9: doc.Admin_Staff_Social_Security_year9,

      Admin_Staff_Medicare_year6: doc.Admin_Staff_Medicare_year6,
      Admin_Staff_Medicare_year7: doc.Admin_Staff_Medicare_year7,
      Admin_Staff_Medicare_year8: doc.Admin_Staff_Medicare_year8,
      Admin_Staff_Medicare_year9: doc.Admin_Staff_Medicare_year9,

      Admin_Staff_Workers_Compensation_year6: doc.Admin_Staff_Workers_Compensation_year6,
      Admin_Staff_Workers_Compensation_year7: doc.Admin_Staff_Workers_Compensation_year7,
      Admin_Staff_Workers_Compensation_year8: doc.Admin_Staff_Workers_Compensation_year8,
      Admin_Staff_Workers_Compensation_year9: doc.Admin_Staff_Workers_Compensation_year9,

      Admin_Staff_Unemployment_Compensation_year6: doc.Admin_Staff_Unemployment_Compensation_year6,
      Admin_Staff_Unemployment_Compensation_year7: doc.Admin_Staff_Unemployment_Compensation_year7,
      Admin_Staff_Unemployment_Compensation_year8: doc.Admin_Staff_Unemployment_Compensation_year8,
      Admin_Staff_Unemployment_Compensation_year9: doc.Admin_Staff_Unemployment_Compensation_year9,

      Admin_Staff_Pension_Administration_year6: doc.Admin_Staff_Pension_Administration_year6,
      Admin_Staff_Pension_Administration_year7: doc.Admin_Staff_Pension_Administration_year7,
      Admin_Staff_Pension_Administration_year8: doc.Admin_Staff_Pension_Administration_year8,
      Admin_Staff_Pension_Administration_year9: doc.Admin_Staff_Pension_Administration_year9,

      Management_Salary_year6: doc.Management_Salary_year6,
      Management_Salary_year7: doc.Management_Salary_year7,
      Management_Salary_year8: doc.Management_Salary_year8,
      Management_Salary_year9: doc.Management_Salary_year9,

      Management_Pension_Accumulation_year6: doc.Management_Pension_Accumulation_year6,
      Management_Pension_Accumulation_year7: doc.Management_Pension_Accumulation_year7,
      Management_Pension_Accumulation_year8: doc.Management_Pension_Accumulation_year8,
      Management_Pension_Accumulation_year9: doc.Management_Pension_Accumulation_year9,

      Management_Retiree_Health_Insurance_year6: doc.Management_Retiree_Health_Insurance_year6,
      Management_Retiree_Health_Insurance_year7: doc.Management_Retiree_Health_Insurance_year7,
      Management_Retiree_Health_Insurance_year8: doc.Management_Retiree_Health_Insurance_year8,
      Management_Retiree_Health_Insurance_year9: doc.Management_Retiree_Health_Insurance_year9,

      Management_Other_Post_Employment_Benefits_year6: doc.Management_Other_Post_Employment_Benefits_year6,
      Management_Other_Post_Employment_Benefits_year7: doc.Management_Other_Post_Employment_Benefits_year7,
      Management_Other_Post_Employment_Benefits_year8: doc.Management_Other_Post_Employment_Benefits_year8,
      Management_Other_Post_Employment_Benefits_year9: doc.Management_Other_Post_Employment_Benefits_year9,

      Management_Employees_Health_Fund_year6: doc.Management_Employees_Health_Fund_year6,
      Management_Employees_Health_Fund_year7: doc.Management_Employees_Health_Fund_year7,
      Management_Employees_Health_Fund_year8: doc.Management_Employees_Health_Fund_year8,
      Management_Employees_Health_Fund_year9: doc.Management_Employees_Health_Fund_year9,

      Management_Social_Security_year6: doc.Management_Social_Security_year6,
      Management_Social_Security_year7: doc.Management_Social_Security_year7,
      Management_Social_Security_year8: doc.Management_Social_Security_year8,
      Management_Social_Security_year9: doc.Management_Social_Security_year9,

      Management_Medicare_year6: doc.Management_Medicare_year6,
      Management_Medicare_year7: doc.Management_Medicare_year7,
      Management_Medicare_year8: doc.Management_Medicare_year8,
      Management_Medicare_year9: doc.Management_Medicare_year9,

      Management_Workers_Compensation_year6: doc.Management_Workers_Compensation_year6,
      Management_Workers_Compensation_year7: doc.Management_Workers_Compensation_year7,
      Management_Workers_Compensation_year8: doc.Management_Workers_Compensation_year8,
      Management_Workers_Compensation_year9: doc.Management_Workers_Compensation_year9,

      Management_Unemployment_Compensation_year6: doc.Management_Unemployment_Compensation_year6,
      Management_Unemployment_Compensation_year7: doc.Management_Unemployment_Compensation_year7,
      Management_Unemployment_Compensation_year8: doc.Management_Unemployment_Compensation_year8,
      Management_Unemployment_Compensation_year9: doc.Management_Unemployment_Compensation_year9,

      Management_Pension_Administration_year6: doc.Management_Pension_Administration_year6,
      Management_Pension_Administration_year7: doc.Management_Pension_Administration_year7,
      Management_Pension_Administration_year8: doc.Management_Pension_Administration_year8,
      Management_Pension_Administration_year9: doc.Management_Pension_Administration_year9,

      Program_year6: doc.Program_year6,
      Program_year7: doc.Program_year7,
      Program_year8: doc.Program_year8,
      Program_year9: doc.Program_year9,

      Contracts_year6: doc.Contracts_year6,
      Contracts_year7: doc.Contracts_year7,
      Contracts_year8: doc.Contracts_year8,
      Contracts_year9: doc.Contracts_year9,

      Grants_year6: doc.Grants_year6,
      Grants_year7: doc.Grants_year7,
      Grants_year8: doc.Grants_year8,
      Grants_year9: doc.Grants_year9,

      Travel_year6: doc.Travel_year6,
      Travel_year7: doc.Travel_year7,
      Travel_year8: doc.Travel_year8,
      Travel_year9: doc.Travel_year9,

      Equipment_year6: doc.Equipment_year6,
      Equipment_year7: doc.Equipment_year7,
      Equipment_year8: doc.Equipment_year8,
      Equipment_year9: doc.Equipment_year9,

      Overhead_year6: doc.Overhead_year6,
      Overhead_year7: doc.Overhead_year7,
      Overhead_year8: doc.Overhead_year8,
      Overhead_year9: doc.Overhead_year9,

      Debt_Service_year6: doc.Debt_Service_year6,
      Debt_Service_year7: doc.Debt_Service_year7,
      Debt_Service_year8: doc.Debt_Service_year8,
      Debt_Service_year9: doc.Debt_Service_year9,

      Other_year6: doc.Other_year6,
      Other_year7: doc.Other_year7,
      Other_year8: doc.Other_year8,
      Other_year9: doc.Other_year9,

      Total_Expenses_year6: doc.Total_Expenses_year6,
      Total_Expenses_year7: doc.Total_Expenses_year7,
      Total_Expenses_year8: doc.Total_Expenses_year8,
      Total_Expenses_year9: doc.Total_Expenses_year9,

      Surplus_Deficit_year6: doc.Surplus_Deficit_year6,
      Surplus_Deficit_year7: doc.Surplus_Deficit_year7,
      Surplus_Deficit_year8: doc.Surplus_Deficit_year8,
      Surplus_Deficit_year9: doc.Surplus_Deficit_year9,

      Management_year6: doc.Management_year6,
      Management_year7: doc.Management_year7,
      Management_year8: doc.Management_year8,
      Management_year9: doc.Management_year9,

      Support_Services_year6: doc.Support_Services_year6,
      Support_Services_year7: doc.Support_Services_year7,
      Support_Services_year8: doc.Support_Services_year8,
      Support_Services_year9: doc.Support_Services_year9,

      Beneficiary_Advocacy_year6: doc.Beneficiary_Advocacy_year6,
      Beneficiary_Advocacy_year7: doc.Beneficiary_Advocacy_year7,
      Beneficiary_Advocacy_year8: doc.Beneficiary_Advocacy_year8,
      Beneficiary_Advocacy_year9: doc.Beneficiary_Advocacy_year9,

    };
  }
}
export const BudgetPLs = new BudgetPLCollection();
if (Meteor.isServer) {
  BudgetPLs._collection.allow({
    insert(userId, doc) {
      return !!userId; // Only logged-in users can insert
    },
    update(userId, doc, fields, modifier) {
      return doc.owner === Meteor.users.findOne(userId).username; // Only owners can update
    },
    remove(userId, doc) {
      return doc.owner === Meteor.users.findOne(userId).username; // Only owners can remove
    },
  });
}