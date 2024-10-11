import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { AuditedBalanceSheets } from '../../imports/api/Inputs/auditedBalanceSheet';

Meteor.methods({
  /**
   * Function to add 50 to petty_cash.year6 for the given owner.
   * @param {String} owner - The owner (typically the user's email or username).
   */
  'ws1007.addToPettyCashYear6'(owner) {
    check(owner, String);

    console.log(`Attempting to update petty_cash.year6 for owner: ${owner}`);

    // Fetch the balance sheet for the given owner
    const balanceSheet = AuditedBalanceSheets.findOne({ owner });

    if (!balanceSheet) {
      console.error(`No balance sheet found for owner: ${owner}`);
      throw new Meteor.Error('not-found', `No balance sheet found for owner: ${owner}`);
    }

    // Add 50 to petty_cash.year6
    const currentPettyCashYear6 = balanceSheet.Petty_cash?.year6 || 0;
    const newPettyCashYear6 = currentPettyCashYear6 + 50;

    console.log(`Current petty_cash.year6: ${currentPettyCashYear6}, New petty_cash.year6: ${newPettyCashYear6}`);

    // Update the database with the new value
    const updateResult = AuditedBalanceSheets.update({ _id: balanceSheet._id }, {
      $set: {
        'Petty_cash.year6': newPettyCashYear6,
      },
    });

    // Log the result of the update operation
    if (updateResult) {
      console.log(`Successfully updated petty_cash.year6 for owner ${owner}`);
      return newPettyCashYear6;
    }
    console.error(`Failed to update petty_cash.year6 for owner ${owner}`);
    throw new Meteor.Error('update-failed', `Failed to update petty_cash.year6 for owner: ${owner}`);

  },
});
