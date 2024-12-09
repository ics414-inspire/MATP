import { Meteor } from 'meteor/meteor';
import { AdminProfiles } from '../user/AdminProfileCollection';
import { UserProfiles } from '../user/UserProfileCollection';
// inputing ABS collections
import { AuditedBalanceSheet } from '../Inputs/AuditedBalanceSheetCollection.js';
import { Budget } from '../Inputs/BudgetP&LCollection';
import { AccountantProfiles } from '../user/AccountantProfileCollection';
import { ClientProfiles } from '../user/ClientProfileCollection';
import { BossAccountantProfiles } from '../user/BossAccountantProfileCollection';

// inputing ABS collections

class MATPClass {
  collections;

  collectionLoadSequence;

  collectionAssociation;

  constructor() {
    // list of all the MATPCollections collections
    this.collections = [
      AdminProfiles,
      AuditedBalanceSheet, // inputing ABS collections
      Budget,
      UserProfiles,
      AccountantProfiles,
      ClientProfiles,
      BossAccountantProfiles,
    ];
    /*
     * A list of collection class instances in the order required for them to be sequentially loaded from a file.
     */
    this.collectionLoadSequence = [
      AdminProfiles,
      UserProfiles,
      AccountantProfiles,
      ClientProfiles,
      BossAccountantProfiles,
      AuditedBalanceSheet, // inputing ABS collections
      Budget,
    ];

    /*
     * An object with keys equal to the collection name and values the associated collection instance.
     */
    this.collectionAssociation = {};
    this.collections.forEach((collection) => {
      this.collectionAssociation[collection.getCollectionName()] = collection;
    });

  }

  /**
   * Return the collection class instance given its name.
   * @param collectionName The name of the collection.
   * @returns The collection class instance.
   * @throws { Meteor.Error } If collectionName does not name a collection.
   */
  getCollection(collectionName) {
    // console.log('MATPCollections', collectionName, this.collectionAssociation);
    const collection = this.collectionAssociation[collectionName];
    if (!collection) {
      throw new Meteor.Error(`Called MATPCollections.getCollection with unknown collection name: ${collectionName}`);
    }
    return collection;
  }
}

export const MATPCollections = new MATPClass();
