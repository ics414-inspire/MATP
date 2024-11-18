import { Meteor } from 'meteor/meteor';
import { AuditedBalanceSheet } from '../../api/Inputs/AuditedBalanceSheetCollection';
import { Stuffs } from '../../api/stuff/StuffCollection';
import { Percentages } from '../../api/Worksheets/2503PercentagesCollection';
/* eslint-disable no-console */

function addData(data, collection) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  collection.define(data);
}

// Initialize the AuditedBalanceSheetsCollection if empty.
if (Stuffs.count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

// Initialize the AuditedBalanceSheetsCollection if empty.
if (AuditedBalanceSheet.count() === 0) {
  if (Meteor.settings.defaultAuditedBalanceSheets) {
    console.log('Creating default data for AuditedBalanceSheets.');
    Meteor.settings.defaultAuditedBalanceSheets.forEach(data => addData(data, AuditedBalanceSheet));
  } else {
    console.log('No default data found in Meteor.settings');
  }
} else {
  console.log(`AuditedBalanceSheets collection is not empty, count: ${AuditedBalanceSheet.count()}`);
}

// Initialize the PercentagesCollection if empty.
if (Percentages.count() === 0) {
  if (Meteor.settings.defaultPercentages) {
    console.log('Creating default data for Percentages.');
    Meteor.settings.defaultPercentages.forEach(data => {
      console.log(`  Adding percentages for year: ${data.year}`);
      addData(data, Percentages); // Call addData with Percentages collection
    });
  } else {
    console.log('No default percentages found in Meteor.settings');
  }
} else {
  console.log(`Percentages collection is not empty, count: ${Percentages.count()}`);
}

Percentages._collection.insert({
  year: 5,
  percentages: {
    pension_accumulation: 15.0,
    retiree_health_insurance: 7.96,
    other_post_employment_benefits: 0.0,
    employees_health_fund: 7.02,
    social_security: 6.2,
    medicare: 1.45,
    workers_compensation: 1.22,
    unemployment_compensation: 0.91,
    pension_administration: 0.0,
    composite_rate: 39.76,
  },
  owner: 'admin@foo.com',
});
