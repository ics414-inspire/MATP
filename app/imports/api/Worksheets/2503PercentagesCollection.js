import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';

export const percentagePublications = {
  percentage: 'Percentage',
  percentageAdmin: 'PercentageAdmin',
};

class PercentageCollection extends BaseCollection {
  constructor() {
    super('Percentages', new SimpleSchema({
      year: {
        type: Number,
      },
      percentages: {
        type: Object,
      },
      'percentages.pension_accumulation': { type: Number },
      'percentages.retiree_health_insurance': { type: Number },
      'percentages.other_post_employment_benefits': { type: Number },
      'percentages.employees_health_fund': { type: Number },
      'percentages.social_security': { type: Number },
      'percentages.medicare': { type: Number },
      'percentages.workers_compensation': { type: Number },
      'percentages.unemployment_compensation': { type: Number },
      'percentages.pension_administration': { type: Number },
      'percentages.composite_rate': { type: Number },
      owner: { type: String, optional: true },
    }));
  }

  define({ year, percentages, owner }) {
    const docID = this._collection.insert({
      year,
      percentages,
      owner,
    });
    console.log(`Inserted document with ID: ${docID}`);
    console.log('Inserted data:', { year, percentages, owner });
    return docID;
  }

  update(docID, { year, percentages }) {
    const updateData = {};
    if (year) updateData.year = year;
    if (percentages) {
      updateData.percentages = { ...updateData.percentages, ...percentages };
    }

    this._collection.update(docID, { $set: updateData });
  }

  removeIt(year) {
    const doc = this.findDoc({ year });
    check(doc, Object);
    this._collection.remove(doc._id);
    return true;
  }

  publish() {
    if (Meteor.isServer) {
      const instance = this;

      Meteor.publish(percentagePublications.percentage, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      Meteor.publish(percentagePublications.percentageAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.ADMIN)) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  subscribePercentage() {
    if (Meteor.isClient) {
      return Meteor.subscribe(percentagePublications.percentage);
    }
    return null;
  }

  subscribePercentageAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(percentagePublications.percentageAdmin);
    }
    return null;
  }

  assertValidRoleForMethod(userId) {
    this.assertRole(userId, [ROLE.ADMIN, ROLE.USER]);
  }

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const year = doc.year;
    const percentages = doc.percentages;
    const owner = doc.owner;
    return { year, percentages, owner };
  }
}

export const Percentages = new PercentageCollection();
