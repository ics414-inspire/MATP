import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';

export const auditedBalanceSheetPublications = {
  auditedBalanceSheet: 'AuditedBalanceSheet',
  auditedBalanceSheetAdmin: 'AuditedBalanceSheetAdmin',
};

class AuditedBalanceSheetCollection extends BaseCollection {
  constructor() {
    super('AuditedBalanceSheets', new SimpleSchema({
      owner: String,
      year: Number,

      cashStuff: {
        type: Array,
        optional: true,
        defaultValue: [],
      },
      'cashStuff.$': Object,
      'cashStuff.$.pettyCash': { type: Number, defaultValue: 0, optional: true },
      'cashStuff.$.cash': { type: Number, defaultValue: 0, optional: true },
      'cashStuff.$.cashInBanksLineofCredit': { type: Number, defaultValue: 0, optional: true },
      cashTotal: { type: Number, optional: true },

      otherAssets: {
        type: Array,
        optional: true,
        defaultValue: [],
      },
      'otherAssets.$': Object,
      'otherAssets.$.accountsRec': { type: Number, defaultValue: 0, optional: true },
      'otherAssets.$.dueFromOtherFund': { type: Number, defaultValue: 0, optional: true },
      'otherAssets.$.interestAndDividends': { type: Number, defaultValue: 0, optional: true },
      'otherAssets.$.invPrepaidItems': { type: Number, defaultValue: 0, optional: true },
      'otherAssets.$.notesRecWithinYr': { type: Number, defaultValue: 0, optional: true },
      'otherAssets.$.notesRecAfterYr': { type: Number, defaultValue: 0, optional: true },
      'otherAssets.$.secDeposits': { type: Number, defaultValue: 0, optional: true },
      'otherAssets.$.cashHeldByInvMgr': { type: Number, defaultValue: 0, optional: true },
      otherAssetsSubtotal: { type: Number, optional: true },

      investments: {
        type: Array,
        optional: true,
      },
      'investments.$': Object,
      'investments.$.mutualFunds': { type: Number, defaultValue: 0, optional: true },
      'investments.$.commingledFunds': { type: Number, defaultValue: 0, optional: true },
      'investments.$.hedgeFunds': { type: Number, defaultValue: 0, optional: true },
      'investments.$.privateEquity': { type: Number, defaultValue: 0, optional: true },
      'investments.$.commonTrustFund': { type: Number, defaultValue: 0, optional: true },
      'investments.$.commonPreferredStock': { type: Number, defaultValue: 0, optional: true },
      'investments.$.privateDebt': { type: Number, defaultValue: 0, optional: true },
      'investments.$.other': { type: Number, defaultValue: 0, optional: true },
      investmentsTotal: { type: Number, optional: true },

      loanFund: {
        type: Array,
        optional: true,
      },
      'loanFund.$': Object,
      'loanFund.$.USTreasuries': { type: Number, defaultValue: 0, optional: true },
      'loanFund.$.USAgencies': { type: Number, defaultValue: 0, optional: true },
      loanFundTotal: { type: Number, optional: true },
      investLoanTotal: { type: Number, optional: true },

      assets: {
        type: Array,
        optional: true,
      },
      'assets.$': Object,
      'assets.$.buildings': { type: Number, defaultValue: 0, optional: true },
      'assets.$.leaseImprovements': { type: Number, defaultValue: 0, optional: true },
      'assets.$.furnitureFixtures': { type: Number, defaultValue: 0, optional: true },
      'assets.$.lessAccDep': { type: Number, defaultValue: 0, optional: true },
      assetsTotal: { type: Number, optional: true },

      land: {
        type: Array,
        optional: true,
      },
      'land.$': Object,
      'land.$.landA': { type: Number, defaultValue: 0, optional: true },
      'land.$.landB': { type: Number, defaultValue: 0, optional: true },
      'land.$.construction': { type: Number, defaultValue: 0, optional: true },
      landTotal: { type: Number, optional: true },

      compBAssets: {
        type: Array,
        optional: true,
      },
      'compBAssets.$': Object,
      'compBAssets.$.buildingd': { type: Number, defaultValue: 0, optional: true },
      'compBAssets.$.leaseImprovements': { type: Number, defaultValue: 0, optional: true },
      'compBAssets.$.furnitureFixtures': { type: Number, defaultValue: 0, optional: true },
      'compBAssets.$.vehicles': { type: Number, defaultValue: 0, optional: true },
      'compBAssets.$.lessAccDep': { type: Number, defaultValue: 0, optional: true },
      'compBAssets.$.land': { type: Number, defaultValue: 0, optional: true },
      compBAssetsTotal: { type: Number, optional: true },
      capAssetsTotal: { type: Number, optional: true },

      restrictedCash: { type: Number, optional: true },
      otherAssetsTotal: { type: Number, optional: true },
      defOutflowsPension: { type: Number, optional: true },
      defOutflowsOPEB: { type: Number, optional: true },
      assetsAndDefOutflowsTotal: { type: Number, optional: true },

      liabilities: {
        type: Array,
        optional: true,
      },
      'liabilities.$': Object,
      'liabilities.$.accountsPayable': { type: Number, defaultValue: 0, optional: true },
      'liabilities.$.dueToFund': { type: Number, defaultValue: 0, optional: true },
      'liabilities.$.dueToOtherFund': { type: Number, defaultValue: 0, optional: true },
      liabilitiesTotal: { type: Number, optional: true },

      liaWithinYr: {
        type: Array,
        optional: true,
      },
      'liaWithinYr.$': Object,
      'liaWithinYr.$.accVacation': { type: Number, defaultValue: 0, optional: true },
      'liaWithinYr.$.workComp': { type: Number, defaultValue: 0, optional: true },
      'liaWithinYr.$.accMgtRetPlan': { type: Number, defaultValue: 0, optional: true },
      'liaWithinYr.$.accLease': { type: Number, defaultValue: 0, optional: true },
      'liaWithinYr.$.capLease': { type: Number, defaultValue: 0, optional: true },
      'liaWithinYr.$.notesPayBldgA': { type: Number, defaultValue: 0, optional: true },
      'liaWithinYr.$.netPensionLia': { type: Number, defaultValue: 0, optional: true },
      'liaWithinYr.$.netPensionOPEB': { type: Number, defaultValue: 0, optional: true },
      'liaWithinYr.$.lineOfCredBldgA': { type: Number, defaultValue: 0, optional: true },
      'liaWithinYr.$.lineOfCredBldgB': { type: Number, defaultValue: 0, optional: true },
      'liaWithinYr.$.debtServ': { type: Number, defaultValue: 0, optional: true },
      liaWithinYrTotal: { type: Number, optional: true },

      liaAfterYr: {
        type: Array,
        optional: true,
      },
      'liaAfterYr.$': Object,
      'liaAfterYr.$.accVacation': { type: Number, defaultValue: 0, optional: true },
      'liaAfterYr.$.workComp': { type: Number, defaultValue: 0, optional: true },
      'liaAfterYr.$.accMgtRetPlan': { type: Number, defaultValue: 0, optional: true },
      'liaAfterYr.$.accLease': { type: Number, defaultValue: 0, optional: true },
      'liaAfterYr.$.capLease': { type: Number, defaultValue: 0, optional: true },
      'liaAfterYr.$.notesPayBldgA': { type: Number, defaultValue: 0, optional: true },
      'liaAfterYr.$.netPensionLia': { type: Number, defaultValue: 0, optional: true },
      'liaAfterYr.$.netPensionOPEB': { type: Number, defaultValue: 0, optional: true },
      'liaAfterYr.$.lineOfCredBldgA': { type: Number, defaultValue: 0, optional: true },
      'liaAfterYr.$.lineOfCredBldgB': { type: Number, defaultValue: 0, optional: true },
      'liaAfterYr.$.debtServ': { type: Number, defaultValue: 0, optional: true },
      liaAfterYrTotal: { type: Number, optional: true },
      allLiabilitiesTotal: { type: Number, optional: true },

      defInflowsPension: { type: Number, optional: true },
      defInflowsOPEB: { type: Number, optional: true },
      liaAndDefInflowsTotal: { type: Number, optional: true },

      commitAndContin: {
        type: Array,
        optional: true,
      },
      'commitAndContin.$': Object,
      'commitAndContin.$.capAssetInvestments': { type: Number, defaultValue: 0, optional: true },
      'commitAndContin.$.resFedFunds': { type: Number, defaultValue: 0, optional: true },
      'commitAndContin.$.unRes': { type: Number, defaultValue: 0, optional: true },
      totalNetPos: { type: Number, optional: true },
      totalLiaInflowsNetPos: { type: Number, optional: true },
    }));
  }

  /* Defines a new AuditedBalanceSheet item.
    * @param {Object} data - Contains fields for AuditedBalanceSheet.
    * @return {String} docID - The docID of the newly inserted document.
    */
  define({ owner, year, cashStuff, otherAssets, investments, loanFund, assets, land, compBAssets, restrictedCash, defOutflowsPension, defOutflowsOPEB, liabilities, liaWithinYr, liaAfterYr, defInflowsPension, defInflowsOPEB, commitAndContin }) {
    const auditedBalanceSheetData = {
      owner,
      year,
      cashStuff,
      otherAssets,
      investments,
      loanFund,
      assets,
      land,
      compBAssets,
      restrictedCash,
      defOutflowsPension,
      defOutflowsOPEB,
      liabilities,
      liaWithinYr,
      liaAfterYr,
      defInflowsPension,
      defInflowsOPEB,
      commitAndContin,
    };
    const docID = this._collection.insert(auditedBalanceSheetData);
    return docID;
  }

  /**
    * Updates the given document with new field values.
    * @param {String} docID - The ID of the document to update.
    * @param {Object} updatedFields - The new values for the fields.
    */
  update(docID, { cashStuff, otherAssets, investments, loanFund, assets, land, compBAssets, restrictedCash, defOutflowsPension, defOutflowsOPEB, liabilities, liaWithinYr, liaAfterYr, defInflowsPension, defInflowsOPEB, commitAndContin }) {
    const updateData = {};
    if (_.isArray(cashStuff)) { updateData.cashStuff = cashStuff; }
    if (_.isArray(otherAssets)) { updateData.otherAssets = otherAssets; }
    if (_.isArray(investments)) { updateData.investments = investments; }
    if (_.isArray(loanFund)) { updateData.loanFund = loanFund; }
    if (_.isArray(assets)) { updateData.assets = assets; }
    if (_.isArray(land)) { updateData.land = land; }
    if (_.isArray(compBAssets)) { updateData.compBAssets = compBAssets; }
    updateData.restrictedCash = restrictedCash;
    updateData.defOutflowsPension = defOutflowsPension;
    updateData.defOutflowsOPEB = defOutflowsOPEB;
    if (_.isArray(liabilities)) { updateData.liabilities = liabilities; }
    if (_.isArray(liaWithinYr)) { updateData.liaWithinYr = liaWithinYr; }
    if (_.isArray(liaAfterYr)) { updateData.liaAfterYr = liaAfterYr; }
    updateData.defInflowsPension = defInflowsPension;
    updateData.defInflowsOPEB = defInflowsOPEB;
    if (_.isArray(commitAndContin)) { updateData.commitAndContin = commitAndContin; }
    this._collection.updateTotals(docID, { $set: updateData });
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

      // Publish only documents associated with the logged-in user
      Meteor.publish(auditedBalanceSheetPublications.auditedBalanceSheet, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      // Publishes all documents regardless of user, but only if the logged in user is the Admin.
      Meteor.publish(auditedBalanceSheetPublications.auditedBalanceSheetAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.ADMIN)) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  /**
    * Subscription method for AuditedBalanceSheet owned by the current user.
    */
  subscribeAuditedBalanceSheet() {
    if (Meteor.isClient) {
      return Meteor.subscribe(auditedBalanceSheetPublications.auditedBalanceSheet);
    }
    return null;
  }

  /**
    * Subscription method for admin users.
    * It subscribes to the entire collection.
    */
  subscribeAuditedBalanceSheetAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(auditedBalanceSheetPublications.auditedBalanceSheetAdmin);
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
    const cashStuff = doc.cashStuff;
    const cashTotal = doc.cashTotal;
    const otherAssets = doc.otherAssets;
    const otherAssetsSubtotal = doc.otherAssetsSubtotal;
    const investments = doc.investments;
    const investmentsTotal = doc.investmentsTotal;
    const loanFund = doc.loanFund;
    const loanFundTotal = doc.loanFundTotal;
    const investLoanTotal = doc.investLoanTotal;
    const assets = doc.assets;
    const assetsTotal = doc.assetsTotal;
    const land = doc.land;
    const landTotal = doc.landTotal;
    const compBAssets = doc.compBAssets;
    const compBAssetsTotal = doc.compBAssetsTotal;
    const capAssetsTotal = doc.capAssetsTotal;
    const restrictedCash = doc.restrictedCash;
    const otherAssetsTotal = doc.otherAssetsTotal;
    const defOutflowsPension = doc.defOutflowsPension;
    const defOutflowsOPEB = doc.defOutflowsOPEB;
    const assetsAndDefOutflowsTotal = doc.assetsAndDefOutflowsTotal;
    const liabilities = doc.liabilities;
    const liabilitiesTotal = doc.liabilitiesTotal;
    const liaWithinYr = doc.liaWithinYr;
    const liaWithinYrTotal = doc.liaWithinYrTotal;
    const liaAfterYr = doc.liaAfterYr;
    const liaAfterYrTotal = doc.liaAfterYrTotal;
    const allLiabilitiesTotal = doc.allLiabilitiesTotal;
    const defInflowsPension = doc.defInflowsPension;
    const defInflowsOPEB = doc.defInflowsOPEB;
    const liaAndDefInflowsTotal = doc.liaAndDefInflowsTotal;
    const commitAndContin = doc.commitAndContin;
    const totalNetPos = doc.totalNetPos;
    const totalLiaInflowsNetPos = doc.totalLiaInflowsNetPos;
    return {
      year,
      owner,
      cashStuff,
      cashTotal,
      otherAssets,
      otherAssetsSubtotal,
      investments,
      investmentsTotal,
      loanFund,
      loanFundTotal,
      investLoanTotal,
      assets,
      assetsTotal,
      land,
      landTotal,
      compBAssets,
      compBAssetsTotal,
      capAssetsTotal,
      restrictedCash,
      otherAssetsTotal,
      defOutflowsPension,
      defOutflowsOPEB,
      assetsAndDefOutflowsTotal,
      liabilities,
      liabilitiesTotal,
      liaWithinYr,
      liaWithinYrTotal,
      liaAfterYr,
      liaAfterYrTotal,
      allLiabilitiesTotal,
      defInflowsPension,
      defInflowsOPEB,
      liaAndDefInflowsTotal,
      commitAndContin,
      totalNetPos,
      totalLiaInflowsNetPos,
    };
  }

  sumArray(array) {
    if (!array || !array.length) return 0;
    return array.reduce((total, item) => total + Object.values(item).reduce((innerSum, value) => innerSum + (typeof value === 'number' ? value : 0), 0), 0);
  }

  updateTotals(docId) {
    const doc = this.findOne(docId);
    const totalCash = this.sumArray(doc.cashStuff);
    const subtotalOtherAssets = this.sumArray(doc.otherAssets);
    const totalInvestments = this.sumArray(doc.investments);
    const totalLoanFund = this.sumArray(doc.loanFund);
    const totalAssets = this.sumArray(doc.assets);
    const totalLand = this.sumArray(doc.land);
    const totalCompBAssets = this.sumArray(doc.compBAssets);
    const restrictedCash = doc.restrictedCash;
    const defOutflowsPension = doc.defOutflowsPension;
    const defOutflowsOPEB = doc.defOutflowsOPEB;
    const totalLiabilities = this.sumArray(doc.liabilities);
    const totalLiaWithinYr = this.sumArray(doc.liaWithinYr);
    const totalLiaAfterYr = this.sumArray(doc.liaAfterYr);
    const defInflowsPension = doc.defInflowsPension;
    const defInflowsOPEB = doc.defInflowsOPEB;
    const totalCommitAndContin = this.sumArray(doc.commitAndContin);

    this._collection.update(docId, {
      $set: {
        cashTotal: totalCash,
        otherAssetsSubtotal: subtotalOtherAssets,
        investmentsTotal: totalInvestments,
        loanFundTotal: totalLoanFund,
        investLoanTotal: totalInvestments + totalLoanFund,
        assetsTotal: totalAssets,
        landTotal: totalLand,
        compBAssetsTotal: totalCompBAssets,
        capAssetsTotal: totalAssets + totalLand + totalCompBAssets,
        otherAssetsTotal: restrictedCash + totalAssets + totalLand + totalCompBAssets + totalInvestments + totalLoanFund + subtotalOtherAssets,
        assetsAndDefOutflowsTotal: defOutflowsPension + defOutflowsOPEB + restrictedCash + totalAssets + totalLand + totalCompBAssets + totalInvestments + totalLoanFund + subtotalOtherAssets,
        liabilitiesTotal: totalLiabilities,
        liaWithinYrTotal: totalLiaWithinYr,
        liaAfterYrTotal: totalLiaAfterYr,
        allLiabilitiesTotal: totalLiabilities + totalLiaWithinYr + totalLiaAfterYr,
        defInflowsOPEBTotal: totalLiabilities + totalLiaWithinYr + totalLiaAfterYr + defInflowsOPEB + defInflowsPension,
        totalNet: totalCommitAndContin,
        totalLiaInflowsNetPos: totalLiabilities + totalLiaWithinYr + totalLiaAfterYr + defInflowsOPEB + defInflowsPension + totalCommitAndContin,
      },
    });
  }
}
export const AuditedBalanceSheets = new AuditedBalanceSheetCollection();
