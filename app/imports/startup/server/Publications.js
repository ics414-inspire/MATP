import { Meteor } from 'meteor/meteor';
import { MATPCollections } from '../../api/matp/MATPCollections';
import { AuditedBalance } from '../../api/Inputs/auditedBalanceCollection';

// Call publish for all the collections.
MATPCollections.collections.forEach(c => c.publish());

// alanning:roles publication
// Recommended code to publish roles for each user.
// eslint-disable-next-line consistent-return
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  this.ready();
});

Meteor.publish(AuditedBalance, function () {
  if (this.userId) {
    return AuditedBalance.find({ 'user._id': this.userId });
  }
  return this.ready();
});
