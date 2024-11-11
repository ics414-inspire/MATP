import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { PAGE_IDS } from '../utilities/PageIDs';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

const SignInForm = () => {
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [validationError, setValidationError] = useState(''); // New state for validation error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
    setValidationError(''); // Clear validation error when user starts typing
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = state;

    // Basic validation before submitting
    if (!validateEmail(email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!validatePassword(password)) {
      setValidationError('Password must be at least 6 characters long.');
      return;
    }

    // authenticate user with Meteor
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setRedirect(true);
      }
    });
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div id="sign-in-container">
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmit} id={PAGE_IDS.SIGN_IN}>
          <h1>Sign in</h1>
          <input
            type="email"
            name="email"
            id={COMPONENT_IDS.SIGN_IN_FORM_EMAIL}
            placeholder="email"
            value={state.email}
            onChange={handleChange}

          />
          <input
            type="password"
            name="password"
            id={COMPONENT_IDS.SIGN_IN_FORM_PASSWORD}
            placeholder="password"
            value={state.password}
            onChange={handleChange}

          />
          {validationError && <p className="validation-error">{validationError}</p>}
          <button type="submit" id={COMPONENT_IDS.SIGN_IN_FORM_SUBMIT} className="my-2">Sign In</button>

          {error && (
            <div className="error-message">
              <h3>Login was not successful</h3>
              <p>{error}</p>
            </div>
          )}

        </form>

      </div>
    </div>
  );
};

export default SignInForm;
