import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check'; // Make sure to import 'check' for validation
import { AuditedBalanceSheets } from '../../imports/api/Inputs/AuditedBalanceSheet.js'; // Adjust the path based on your project structure

Meteor.methods({
  'getAuditedBalanceSheetByOwner'(owner) {
    check(owner, String);
    return AuditedBalanceSheets.findOne({ owner });
  },
});
