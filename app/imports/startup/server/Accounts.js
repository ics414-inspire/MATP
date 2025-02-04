import { Meteor } from 'meteor/meteor';
import { ROLE } from '../../api/role/Role';
import { AdminProfiles } from '../../api/user/AdminProfileCollection';
import { UserProfiles } from '../../api/user/UserProfileCollection';
import { AccountantProfiles } from '../../api/user/AccountantProfileCollection';
import { ClientProfiles } from '../../api/user/ClientProfileCollection';
import { BossAccountantProfiles } from '../../api/user/BossAccountantProfileCollection';

/* eslint-disable no-console */

function createUser(email, role, firstName, lastName, password, clients) {
  console.log(`  Creating user ${email} with role ${role} and clients ${clients}.`);
  if (role === ROLE.ADMIN) {
    AdminProfiles.define({ email, firstName, lastName, password, clients });
  } else if (role === ROLE.USER) { // everyone else is just a user.
    UserProfiles.define({ email, firstName, lastName, password, clients });
  } else if (role === ROLE.ACCOUNTANT) {
    AccountantProfiles.define({ email, firstName, lastName, password, clients });
  } else if (role === ROLE.CLIENT) {
    ClientProfiles.define({ email, firstName, lastName, password, clients });
  } else if (role === ROLE.BOSSACCOUNTANT) {
    BossAccountantProfiles.define({ email, firstName, lastName, password, clients });
  }
}

// When running app for first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.forEach(({ email, password, role, firstName, lastName, clients }) => createUser(email, role, firstName, lastName, password, clients));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
