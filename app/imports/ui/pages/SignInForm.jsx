import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { PAGE_IDS } from '../utilities/PageIDs';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

// Schema definition for validation
const schema = new SimpleSchema({
  email: String,
  password: String,
});
const bridge = new SimpleSchema2Bridge(schema);

const SignInForm = () => {
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = state;

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
            required
          />
          <input
            type="password"
            name="password"
            id={COMPONENT_IDS.SIGN_IN_FORM_PASSWORD}
            placeholder="password"
            value={state.password}
            onChange={handleChange}
            required
          />
          <button type="submit" id={COMPONENT_IDS.SIGN_IN_FORM_SUBMIT} className="my-2">Sign In</button>
        </form>
        <div className="link-container">
          <Link to="/signup">Click here to Register</Link>
        </div>

        {error && (
          <div className="error-message">
            <h3>Login was not successful</h3>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInForm;
