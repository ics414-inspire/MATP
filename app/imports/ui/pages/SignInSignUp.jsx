import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default function SignInSignUpPage() {
  const [type, setType] = useState('signInForm');

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  const containerClass = `container ${type === 'signUpForm' ? 'right-panel-active' : ''}`;

  return (
    <div id="signin-signup-page" className="App">
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Login to access your financial insights and stay on top of your data.</p>
              <button className="ghost" id="signInForm" onClick={() => handleOnClick('signInForm')}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome to Spire!</h1>
              <p>Begin your journey with us by entering your personal details below.</p>
              <button className="ghost" id="signUpForm" onClick={() => handleOnClick('signUpForm')}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
