import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { PAGE_IDS } from '../utilities/PageIDs';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import { UserProfiles } from '../../api/user/UserProfileCollection';
import { defineMethod } from '../../api/base/BaseCollection.methods';

const SignUpForm = () => {
  const [step, setStep] = useState(1); // State to track the form step
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [redirectToReferer, setRedirectToRef] = useState(false);
  const [validationError, setValidationError] = useState(''); // New state to track validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidationError(''); // Clear validation error when user starts typing
  };

  const schema = new SimpleSchema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => password.length >= 6;

  const validateName = (name) => name.trim() !== '';

  const nextStep = () => {
    if (step === 1) {
      // Validate email and password on Step 1
      if (!validateEmail(formData.email)) {
        setValidationError('Please enter a valid email address.');
      } else if (!validatePassword(formData.password)) {
        setValidationError('Password must be at least 6 characters long.');
      } else {
        setValidationError('');
        setStep(step + 1);
      }
    } else if (step === 2) {
      // Validate first and last names on Step 2
      if (!validateName(formData.firstName)) {
        setValidationError('Please enter a valid first name.');
      } else if (!validateName(formData.lastName)) {
        setValidationError('Please enter a valid last name.');
      } else {
        setValidationError('');
        handleSubmit(); // Call handleSubmit after both steps are validated
      }
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    // Validate all fields one last time before submission
    try {
      schema.validate(formData);

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

      // eslint-disable-next-line no-shadow
    } catch (validationError) {
      setValidationError(validationError.message);
    }
  };

  if (redirectToReferer) {
    return <Navigate to="/" />;
  }

  return (
    <div id={PAGE_IDS.SIGN_UP} className="form-container sign-up-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Create Account</h1>

        {step === 1 && (
          <>
            <input
              id={COMPONENT_IDS.SIGN_UP_FORM_EMAIL}
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              id={COMPONENT_IDS.SIGN_UP_FORM_PASSWORD}
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
            {validationError && <p className="validation-error">{validationError}</p>}
            <button type="button" onClick={nextStep} className="signin-button my-2">
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              id={COMPONENT_IDS.SIGN_UP_FORM_FIRST_NAME}
              type="text"
              name="firstName"
              placeholder="first name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              id={COMPONENT_IDS.SIGN_UP_FORM_LAST_NAME}
              type="text"
              name="lastName"
              placeholder="last name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {validationError && <p className="validation-error">{validationError}</p>}
            <div className="button-row">
              <button type="button" onClick={prevStep} className="signin-button my-2 mx-2">
                Previous
              </button>
              <button type="button" onClick={nextStep} className="signin-button my-2 mx-2">
                Sign Up
              </button>
            </div>
          </>
        )}

        {error && (
          <div className="custom-error ">
            <h3>Registration was not successful</h3>
            <p>{error}</p>
          </div>
        )}

      </form>

    </div>
  );
};

export default SignUpForm;
