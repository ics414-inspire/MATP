import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';

export const BudgetPublications = {
  Budget: 'Budget',
  BudgetAdmin: 'BudgetAdmin',
};

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

function getPercentageForYear(year, key) {
  const yearData = percentages.find((entry) => entry.year === year);
  return yearData?.percentages?.[key] || 0; // Return 0 if no match is found
}

class BudgetCollection extends BaseCollection {
  constructor() {
    super('Budget', new SimpleSchema({
      owner: String,
      year: Number,

      revenue: {
        type: Array,
        optional: true,
        defaultValue: [],
      },
      'revenue.$': Object,
      'revenue.$.a': { type: Number, defaultValue: 0, optional: true },
      'revenue.$.revenues': { type: Number, defaultValue: 0, optional: true },
      'revenue.$.generalFund': { type: Number, defaultValue: 0, optional: true },
      'revenue.$.coreOpBudgetNotAuth': { type: Number, defaultValue: 0, optional: true },
      revenueTotal: { type: Number, optional: true },

      expenses: {
        type: Array,
        optional: true,
        defaultValue: [],
      },
      'expenses.$': Object,
      'expenses.$.personnel': { type: Number, defaultValue: 0, optional: true },
      'expenses.$.program': { type: Number, defaultValue: 0, optional: true },
      'expenses.$.contracts': { type: Number, defaultValue: 0, optional: true },
      'expenses.$.grants': { type: Number, defaultValue: 0, optional: true },
      'expenses.$.travel': { type: Number, defaultValue: 0, optional: true },
      'expenses.$.equipment': { type: Number, defaultValue: 0, optional: true },
      'expenses.$.overhead': { type: Number, defaultValue: 0, optional: true },
      'expenses.$.debtService': { type: Number, defaultValue: 0, optional: true },
      'expenses.$.other': { type: Number, defaultValue: 0, optional: true },
      expensesTotal: { type: Number, optional: true },

      adminSalary: { type: Number, optional: true },
      adminTotal: { type: Number, optional: true },

      fringeBenefitsAdmin: {
        type: Array,
        optional: true,
        defaultValue: [],
      },
      'fringeBenefitsAdmin.$': Object,
      'fringeBenefitsAdmin.$.pensionAccumulation': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdmin.$.retireeHealthIns': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdmin.$.postEmploymentBen': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdmin.$.employeeHealthFund': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdmin.$.socialSecurity': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdmin.$.medicare': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdmin.$.workersComp': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdmin.$.unemploymentComp': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdmin.$.pensionAdmin': { type: Number, defaultValue: 0, optional: true },
      fringeBenefitsAdminTotal: { type: Number, optional: true },

      adStaffSalary: { type: Number, optional: true },
      adStaffTotal: { type: Number, optional: true },

      fringeBenefitsAdStaff: {
        type: Array,
        optional: true,
        defaultValue: [],
      },
      'fringeBenefitsAdStaff.$': Object,
      'fringeBenefitsAdStaff.$.pensionAccumulation': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdStaff.$.retireeHealthIns': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdStaff.$.postEmploymentBen': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdStaff.$.employeeHealthFund': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdStaff.$.socialSecurity': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdStaff.$.medicare': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdStaff.$.workersComp': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdStaff.$.unemploymentComp': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsAdStaff.$.pensionAdmin': { type: Number, defaultValue: 0, optional: true },
      fringeBenefitsAdStaffTotal: { type: Number, optional: true },

      manageSalary: { type: Number, defaultValue: 0, optional: true },
      manageTotal: { type: Number, optional: true },

      fringeBenefitsManage: {
        type: Array,
        optional: true,
        defaultValue: [],
      },
      'fringeBenefitsManage.$': Object,
      'fringeBenefitsManage.$.pensionAccumulation': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsManage.$.retireeHealthIns': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsManage.$.postEmploymentBen': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsManage.$.employeeHealthFund': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsManage.$.socialSecurity': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsManage.$.medicare': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsManage.$.workersComp': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsManage.$.unemploymentComp': { type: Number, defaultValue: 0, optional: true },
      'fringeBenefitsManage.$.pensionAdmin': { type: Number, defaultValue: 0, optional: true },
      fringeBenefitsManageTotal: { type: Number, optional: true },

      surplus: { type: Number, optional: true },

      expenditure: {
        type: Array,
        optional: true,
        defaultValue: [],
      },
      'expenditure.$': Object,
      'expenditure.$.management': { type: Number, defaultValue: 0, optional: true },
      'expenditure.$.supportServices': { type: Number, defaultValue: 0, optional: true },
      'expenditure.$.beneficialAdvocacy': { type: Number, defaultValue: 0, optional: true },
    }));
  }

  /** Defines a new Budget item.
  * @param {Object} data - Contains fields for AuditedBalanceSheet.
  * @return {String} docID - The docID of the newly inserted document.
  */
  define({ owner, year, revenue, expenses, fringeBenefitsAdmin, fringeBenefitsAdStaff, fringeBenefitsManage, manageSalary, expenditure }) {
    const docID = this._collection.insert({
      owner,
      year,
      revenue,
      expenses,
      fringeBenefitsAdmin,
      fringeBenefitsAdStaff,
      fringeBenefitsManage,
      manageSalary,
      expenditure,
    });
    this.updateTotals(docID);
    return docID;
  }

  /**
   * Updates the given document with new field values.
   * @param {String} docID - The ID of the document to update.
   * @param {Object} updatedFields - The new values for the fields.
   */
  update(docID, { revenue, expenses, fringeBenefitsAdmin, fringeBenefitsAdStaff, fringeBenefitsManage, manageSalary, expenditure }) {
    const updateData = {};
    if (_.isArray(revenue)) { updateData.revenue = revenue; }
    if (_.isArray(expenses)) { updateData.expenses = expenses; }
    if (_.isArray(fringeBenefitsAdmin)) { updateData.fringeBenefitsAdmin = fringeBenefitsAdmin; }
    if (_.isArray(fringeBenefitsAdStaff)) { updateData.fringeBenefitsAdStaff = fringeBenefitsAdStaff; }
    if (_.isArray(fringeBenefitsManage)) { updateData.fringeBenefitsManage = fringeBenefitsManage; }
    updateData.manageSalary = manageSalary;
    if (_.isArray(expenditure)) { updateData.expenditure = expenditure; }
    this._collection.update(docID, { $set: updateData });
    this.updateTotals(docID);
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
   * It publishes the entire collection for admin and just the AuditedBalanceSheet associated to an owner.
   */
  publish() {
    if (Meteor.isServer) {
      const instance = this;
      Meteor.publish(BudgetPublications.Budget, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
        // return instance._collection.find();
      });

      Meteor.publish(BudgetPublications.BudgetAdmin, function publish() {
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
    const year = doc.year;
    const owner = doc.owner;
    const revenue = doc.revenue;
    const revenueTotal = doc.revenueTotal;
    const expenses = doc.expenses;
    const expensesTotal = doc.expensesTotal;
    const adminSalary = doc.adminSalary;
    const adminTotal = doc.adminTotal;
    const fringeBenefitsAdmin = doc.fringeBenefitsAdmin;
    const fringeBenefitsAdminTotal = doc.fringeBenefitsAdminTotal;
    const adStaffSalary = doc.adStaffSalary;
    const adStaffTotal = doc.adStaffTotal;
    const fringeBenefitsAdStaff = doc.fringeBenefitsAdStaff;
    const fringeBenefitsAdStaffTotal = doc.fringeBenefitsAdStaffTotal;
    const manageSalary = doc.manageSalary;
    const manageTotal = doc.manageTotal;
    const fringeBenefitsManage = doc.fringeBenefitsManage;
    const fringeBenefitsManageTotal = doc.fringeBenefitsManageTotal;
    const surplus = doc.surplus;
    const expenditure = doc.expenditure;
    return {
      year,
      owner,
      revenue,
      revenueTotal,
      expenses,
      expensesTotal,
      adminSalary,
      adminTotal,
      fringeBenefitsAdmin,
      fringeBenefitsAdminTotal,
      adStaffSalary,
      adStaffTotal,
      fringeBenefitsAdStaff,
      fringeBenefitsAdStaffTotal,
      manageSalary,
      manageTotal,
      fringeBenefitsManage,
      fringeBenefitsManageTotal,
      surplus,
      expenditure,
    };
  }

  sumArray(array) {
    if (!array || !array.length) return 0;
    return array.reduce((total, item) => total + Object.values(item).reduce((innerSum, value) => innerSum + (typeof value === 'number' ? value : 0), 0), 0);
  }

  updateTotals(docId) {
    const doc = this.findOne(docId);
    // Retrieve the year from the document
    const year = doc.year;

    // Retrieve the percentage for the year
    const pensionAccumulationPercentage = getPercentageForYear(year, 'pension_accumulation');
    const retireeHealthPercentage = getPercentageForYear(year, 'retiree_health_insurance');
    const otherPostEmpBenefitsPercentage = getPercentageForYear(year, 'other_post_employment_benefits');
    const employeeHealthFundPercentage = getPercentageForYear(year, 'employee_health_fund');
    const socialSecurityPercentage = getPercentageForYear(year, 'social_security');
    const medicarePercentage = getPercentageForYear(year, 'medicare');
    const workersCompPercentage = getPercentageForYear(year, 'workers_compensation');
    const unemploymentCompPercentage = getPercentageForYear(year, 'unemployment_compensation');
    const pensionAdminPercentage = getPercentageForYear(year, 'pension_administration');
    const compositeRate = getPercentageForYear(year, 'composite_rate');

    const manageSalary = doc.manageSalary || 0;
    const personnelExpenses = doc.expenses?.[0]?.personnel || 0;
    const manageTotal = manageSalary + (doc.fringeBenefitsManageTotal || 0);
    const adStaffTotal = (doc.expenditure?.[0]?.management || 0) - manageTotal;
    const adminTotal = personnelExpenses - manageTotal - adStaffTotal;
    const adminSalary = adminTotal / (1 + compositeRate);
    const adStaffSalary = adStaffTotal / (1 + compositeRate);

    // Calculate fringeBenefitsManage array with updated values for all fields
    const fringeBenefitsManage = (doc.fringeBenefitsManage || []).map((entry) => {
      const pensionAccumulation = (manageSalary * pensionAccumulationPercentage) / 100;
      const retireeHealthIns = (manageSalary * retireeHealthPercentage) / 100;
      const postEmploymentBen = (manageSalary * otherPostEmpBenefitsPercentage) / 100;
      const employeeHealthFund = (manageSalary * employeeHealthFundPercentage) / 100;
      const socialSecurity = (manageSalary * socialSecurityPercentage) / 100;
      const medicare = (manageSalary * medicarePercentage) / 100;
      const workersComp = (manageSalary * workersCompPercentage) / 100;
      const unemploymentComp = (manageSalary * unemploymentCompPercentage) / 100;
      const pensionAdmin = (manageSalary * pensionAdminPercentage) / 100;

      return {
        ...entry,
        pensionAccumulation,
        retireeHealthIns,
        postEmploymentBen,
        employeeHealthFund,
        socialSecurity,
        medicare,
        workersComp,
        unemploymentComp,
        pensionAdmin,
      };
    });

    // Calculate fringeBenefitsAdmin values
    const fringeBenefitsAdmin = (doc.fringeBenefitsAdmin || []).map((entry) => {
      const adminCalculationBase = adminTotal / ((1 / compositeRate) + 1);

      const pensionAccumulation = (adminCalculationBase * pensionAccumulationPercentage) / compositeRate;
      const retireeHealthIns = (adminCalculationBase * retireeHealthPercentage) / compositeRate;
      const postEmploymentBen = (adminCalculationBase * otherPostEmpBenefitsPercentage) / compositeRate;
      const employeeHealthFund = (adminCalculationBase * employeeHealthFundPercentage) / compositeRate;
      const socialSecurity = (adminCalculationBase * socialSecurityPercentage) / compositeRate;
      const medicare = (adminCalculationBase * medicarePercentage) / compositeRate;
      const workersComp = (adminCalculationBase * workersCompPercentage) / compositeRate;
      const unemploymentComp = (adminCalculationBase * unemploymentCompPercentage) / compositeRate;
      const pensionAdmin = (adminCalculationBase * pensionAdminPercentage) / compositeRate;

      return {
        ...entry,
        pensionAccumulation,
        retireeHealthIns,
        postEmploymentBen,
        employeeHealthFund,
        socialSecurity,
        medicare,
        workersComp,
        unemploymentComp,
        pensionAdmin,
      };
    });

    // Calculate fringeBenefitsAdAdmin values
    const fringeBenefitsAdStaff = (doc.fringeBenefitsAdmin || []).map((entry) => {
      const adStaffCalculationBase = adStaffTotal / ((1 / compositeRate) + 1);

      const pensionAccumulation = (adStaffCalculationBase * pensionAccumulationPercentage) / compositeRate;
      const retireeHealthIns = (adStaffCalculationBase * retireeHealthPercentage) / compositeRate;
      const postEmploymentBen = (adStaffCalculationBase * otherPostEmpBenefitsPercentage) / compositeRate;
      const employeeHealthFund = (adStaffCalculationBase * employeeHealthFundPercentage) / compositeRate;
      const socialSecurity = (adStaffCalculationBase * socialSecurityPercentage) / compositeRate;
      const medicare = (adStaffCalculationBase * medicarePercentage) / compositeRate;
      const workersComp = (adStaffCalculationBase * workersCompPercentage) / compositeRate;
      const unemploymentComp = (adStaffCalculationBase * unemploymentCompPercentage) / compositeRate;
      const pensionAdmin = (adStaffCalculationBase * pensionAdminPercentage) / compositeRate;

      return {
        ...entry,
        pensionAccumulation,
        retireeHealthIns,
        postEmploymentBen,
        employeeHealthFund,
        socialSecurity,
        medicare,
        workersComp,
        unemploymentComp,
        pensionAdmin,
      };
    });

    const totalRevenue = this.sumArray(doc.revenue) || 0;
    const totalExpenses = this.sumArray(doc.expenses) || 0;
    const totalFriBenAdmin = this.sumArray(doc.fringeBenefitsAdmin) || 0;
    const totalFriBenAdStaff = this.sumArray(doc.fringeBenefitsAdStaff) || 0;
    const totalFriBenManage = this.sumArray(doc.fringeBenefitsManage) || 0;

    this._collection.update(docId, {
      $set: {
        fringeBenefitsManage,
        fringeBenefitsManageTotal: totalFriBenManage,
        fringeBenefitsAdmin,
        fringeBenefitsAdminTotal: totalFriBenAdmin,
        fringeBenefitsAdStaff,
        fringeBenefitsAdStaffTotal: totalFriBenAdStaff,
        manageTotal,
        adStaffTotal,
        adminTotal,
        adminSalary,
        adStaffSalary,
        manageSalary,

        revenueTotal: totalRevenue,
        expensesTotal: totalExpenses + personnelExpenses,
        surplus: totalRevenue - totalExpenses,
      },
    });
  }
}

export const Budget = new BudgetCollection();
