import { Meteor } from 'meteor/meteor';
import { AuditedBalanceSheets } from '../../api/Inputs/auditedBalanceSheet';
/* eslint-disable no-console */

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

// Initialize the AuditedBalanceSheetsCollection if empty.
if (AuditedBalanceSheets.count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data for AuditedBalanceSheets.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  } else {
    console.log('No default data found in Meteor.settings');
  }
} else {
  console.log(`AuditedBalanceSheets collection is not empty, count: ${AuditedBalanceSheets.count()}`);
}
