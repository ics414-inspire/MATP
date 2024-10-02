import { Meteor } from 'meteor/meteor';
import { AuditedBalanceSheets } from '../../api/Inputs/auditedBalanceSheet2.js';
/* eslint-disable no-console */

function addData(data) {
  console.log('Inserting data:', JSON.stringify(data, null, 2)); // Log the data structure
  try {
    AuditedBalanceSheets.define(data);
  } catch (e) {
    console.error('Error inserting data:', e.message);
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
