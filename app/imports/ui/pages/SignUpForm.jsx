import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Col, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import { UserProfiles } from '../../api/user/UserProfileCollection';
import { defineMethod } from '../../api/base/BaseCollection.methods';
/**
 * SignUpForm component is similar to signin component, but we create a new user instead.
 */
const SignUpForm = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [redirectToReferer, setRedirectToRef] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const schema = new SimpleSchema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      schema.validate(formData); // Correct schema reference

      const collectionName = UserProfiles.getCollectionName();
      const definitionData = formData;

      defineMethod.callPromise({ collectionName, definitionData })
        .then(() => {
          const { email, password } = formData;
          Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
              setError(err.reason);
            } else {
              setError('');
              setRedirectToRef(true);
            }
          });
        })
        .catch((err) => setError(err.reason));

    } catch (validationError) {
      setError(validationError.message);
    }
  };

  if (redirectToReferer) {
    return <Navigate to="/" />;
  }

  return (
    <div id={PAGE_IDS.SIGN_UP} className="form-container sign-up-container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <Row>
          <Col>
            <input
              id={COMPONENT_IDS.SIGN_UP_FORM_FIRST_NAME}
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Col>
          <Col>
            <input
              id={COMPONENT_IDS.SIGN_UP_FORM_LAST_NAME}
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>

        <input
          id={COMPONENT_IDS.SIGN_UP_FORM_EMAIL}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          id={COMPONENT_IDS.SIGN_UP_FORM_PASSWORD}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button id={COMPONENT_IDS.SIGN_UP_FORM_SUBMIT} type="submit" className="custom-button my-2">
          Sign Up
        </button>
      </form>

      <div className="custom-alert">
        Already have an account? Login <Link to="/signin">here</Link>
      </div>

      {error && (
        <div className="custom-error">
          <h3>Registration was not successful</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
