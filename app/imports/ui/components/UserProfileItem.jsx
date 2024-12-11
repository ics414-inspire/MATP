import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

/** Renders a single row in the List Profiles table. See pages/ListProfiles.jsx. */

const UserProfileItem = ({ profile }) => (
  <tr>
    <td style={{ verticalAlign: 'middle' }}>{profile.email}</td>
    <td style={{ verticalAlign: 'middle' }}>{profile.firstName}</td>
    <td style={{ verticalAlign: 'middle' }}>{profile.lastName}</td>
    <td style={{ verticalAlign: 'middle' }}>{profile.role}</td>
    <td style={{ textAlign: 'center' }}>
      <Link
        className={`btn btn-primary btn-sm ${COMPONENT_IDS.LIST_PROFILES_EDIT}`}
        to={`/edit/${profile._id}`}
      >
        Edit
      </Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
UserProfileItem.propTypes = {
  profile: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default UserProfileItem;
