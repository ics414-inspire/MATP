import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';

export const AuditedBalanceSheetPublications = {
  AuditedBalanceSheet: 'AuditedBalanceSheet',
  AuditedBalanceSheetAdmin: 'AuditedBalanceSheetAdmin',
};

class AuditedBalanceSheetCollection extends BaseCollection {
  constructor() {
    const years = ['year6', 'year7', 'year8', 'year9'];
    const fields = [
      'Petty_cash',
      'Cash',
      'Cash_in_banksDraw_on_Line_of_Credit',
      'Total_Cash_and_Cash_Equivalents',
      'Accounts_receivable',
      // Add all other fields
    ];

    // Dynamically generating the schema
    const schemaDefinition = {};

    // Add companyName field to the schema
    schemaDefinition.companyName = {
      type: String,
      label: 'Company Name',
      optional: false, // Set to true if you want the field to be optional
    };

    fields.forEach(field => {
      // First, define the top-level field as an object
      schemaDefinition[field] = {
        type: Object,
        optional: true, // Allow it to be optional if necessary
      };

      // Then, define the subfields for each year under the top-level field
      years.forEach(year => {
        schemaDefinition[`${field}.${year}`] = {
          type: Number,
          defaultValue: 123, // Set a default value if needed
        };
      });
    });

    // Create the schema using SimpleSchema
    super('AuditedBalanceSheets', new SimpleSchema(schemaDefinition));
  }

  define(data) {
    const docID = this._collection.insert(data);
    return docID;
  }

  update(docID, data) {
    const updateData = {};

    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === 'number') {
        updateData[key] = value;
      }
    });

    this._collection.update(docID, { $set: updateData });
  }

  removeIt(name) {
    const doc = this.findDoc(name);
    check(doc, Object);
    this._collection.remove(doc._id);
    return true;
  }

  publish() {
    if (Meteor.isServer) {
      const instance = this;
      Meteor.publish(AuditedBalanceSheetPublications.AuditedBalanceSheet, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      Meteor.publish(AuditedBalanceSheetPublications.AuditedBalanceSheetAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.ADMIN)) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  subscribeAuditedBalanceSheet() {
    if (Meteor.isClient) {
      return Meteor.subscribe(AuditedBalanceSheetPublications.AuditedBalanceSheet);
    }
    return null;
  }

  subscribeAuditedBalanceSheetAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(AuditedBalanceSheetPublications.AuditedBalanceSheetAdmin);
    }
    return null;
  }

  assertValidRoleForMethod(userId) {
    this.assertRole(userId, [ROLE.ADMIN, ROLE.USER]);
  }

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const result = {};

    for (const key in doc) {
      if (Object.prototype.hasOwnProperty.call(doc, key)) {
        result[key] = doc[key];
      }
    }
    return result;
  }
}

export const AuditedBalanceSheets = new AuditedBalanceSheetCollection();
