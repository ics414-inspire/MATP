import { Meteor } from 'meteor/meteor';

import { AuditedBalanceSheets } from '../../api/Inputs/auditedBalanceSheet';
/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  AuditedBalanceSheets.define(data);
}

// Initialize the AuditedBalanceSheetsCollection if empty.
if (AuditedBalanceSheets.count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}
