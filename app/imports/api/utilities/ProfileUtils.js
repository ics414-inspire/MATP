import { ROLE } from '../role/Role';
import { UserProfiles } from '../user/UserProfileCollection';

/**
 * Changes the user's role and moves the user's profile to the appropriate collection.
 *
 * @param {Object} options - The parameters for the role change.
 * @param {string} options.currentRole - The user's current role.
 * @param {string} options.newRole - The user's new role.
 * @param {string} options.userID - The user's Meteor.users._id.
 * @param {string} options.email - The user's email.
 * @param {string} options.firstName - The user's first name.
 * @param {string} options.lastName - The user's last name.
 * @param {Object} options.profiles - An object containing references to all profile collections.
 */
export function changeUserRole({
  currentRole,
  newRole,
  userID,
  email,
  firstName,
  lastName,
  profiles,
}) {
  if (currentRole === newRole) {
    throw new Error(`User is already in the ${newRole} role.`);
  }

  // Remove the user from the current role's collection
  if (currentRole in profiles) {
    profiles[`${currentRole}Profiles`]?.removeIt(userID);
  }

  // Add the user to the new role's collection
  if (newRole in profiles) {
    profiles[`${newRole}Profiles`]?.changeRoleDefine({ userID, email, firstName, lastName });
  }

  // Update the role in the Meteor.users collection
  UserProfiles.changeRole(userID, ROLE[newRole.toUpperCase()]);
}

/**
 * Updates user data within their current profile collection.
 *
 * @param {Object} options - The parameters for the profile update.
 * @param {string} options.docID - The document ID in the user's profile collection.
 * @param {string} options.userID - The user's Meteor.users._id.
 * @param {Object} options.updateData - The fields to update (e.g., email, firstName, lastName).
 * @param {Object} options.profiles - An object containing references to all profile collections.
 * @param {string} options.currentRole - The user's current role.
 */
export function updateUserProfile({
  docID,
  userID,
  updateData,
  profiles,
  currentRole,
}) {
  const profileCollection = profiles[`${currentRole}Profiles`];
  if (!profileCollection) {
    throw new Error(`Profile collection for role ${currentRole} not found.`);
  }

  // Update the user's data in the profile collection
  profileCollection.update(docID, updateData);

  // Update the user's username and email in Meteor.users if the email is being changed
  if (updateData.email) {
    UserProfiles.updateUsernameAndEmail(userID, updateData.email);
  }
}

/**
 * Validates if the user's role change is permitted.
 *
 * @param {string} currentRole - The user's current role.
 * @param {string} newRole - The desired new role.
 */
export function validateRoleChange(currentRole, newRole) {
  const allowedRoles = Object.keys(ROLE);
  if (!allowedRoles.includes(currentRole)) {
    throw new Error(`Invalid current role: ${currentRole}`);
  }
  if (!allowedRoles.includes(newRole)) {
    throw new Error(`Invalid new role: ${newRole}`);
  }
}
