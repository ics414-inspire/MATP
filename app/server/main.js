import '/imports/startup/server/Accounts';
import '/imports/startup/server/Publications';
import '/imports/startup/server/Mongo';
// be sure to import the methods.
import '../imports/api/base/BaseCollection.methods';
import '../imports/api/user/UserProfileCollection.methods';

import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

Meteor.methods({
  'contact.sendEmail': function ({ name, email, subject, message }) {
    Email.send({
      to: 'ContactUs@spirehi.com',
      from: email,
      subject: `Contact form submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
  },
});
