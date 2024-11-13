/* global fixture, test */
/* eslint-disable no-unused-expressions */

import { Selector } from 'testcafe';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

fixture`Sign In and Sign Up Page Tests`
  .page`http://localhost:3000/signin-signup`;

// Define page model for selectors
class SignInSignUpPage {
  constructor() {
    this.signInEmail = Selector(`#${COMPONENT_IDS.SIGN_IN_FORM_EMAIL}`);
    this.signInPassword = Selector(`#${COMPONENT_IDS.SIGN_IN_FORM_PASSWORD}`);
    this.signInButton = Selector(`#${COMPONENT_IDS.SIGN_IN_FORM_SUBMIT}`);

    this.overlaySignUpButton = Selector('#signUpForm');
    this.signUpEmail = Selector(`#${COMPONENT_IDS.SIGN_UP_FORM_EMAIL}`);
    this.signUpPassword = Selector(`#${COMPONENT_IDS.SIGN_UP_FORM_PASSWORD}`);
    this.signUpFirstName = Selector(`#${COMPONENT_IDS.SIGN_UP_FORM_FIRST_NAME}`);
    this.signUpLastName = Selector(`#${COMPONENT_IDS.SIGN_UP_FORM_LAST_NAME}`);
  }
}

const page = new SignInSignUpPage();

// Tests
test('Sign In - Valid Credentials', async (t) => {
  await t
    .typeText(page.signInEmail, 'john@foo.com')
    .typeText(page.signInPassword, 'I50sAE05P?&')
    .click(page.signInButton)
    .expect(Selector('#root strong').withText('Welcome to InSpire Hawaiʻi').exists)
    .ok();
});

test('Sign In - Invalid Credentials', async (t) => {
  await t
    .typeText(page.signInEmail, 'invaliduser@example.com')
    .typeText(page.signInPassword, 'wrongpassword')
    .click(page.signInButton)
    .expect(Selector('#sign-in-container h3').withText('Login was not successful').exists)
    .ok('Error heading should be displayed when invalid credentials are entered')
    .expect(Selector('#sign-in-container p').withText('User not found').exists)
    .ok('Error detail should display "User not found" when invalid credentials are entered');
});

test('Sign Up - Missing Email', async (t) => {
  await t
    .click(page.overlaySignUpButton)
    .typeText(page.signUpPassword, 'somepassword')
    .click(Selector('#sign-up button').withText('NEXT'))
    .expect(Selector('#sign-up p').withText('Please enter a valid email address.').exists)
    .ok('Error message should be displayed when email is missing');
});

test('Sign Up - Password Length Requirement', async (t) => {
  await t
    .click(page.overlaySignUpButton)
    .typeText(page.signUpEmail, 'user@example.com')
    .typeText(page.signUpPassword, '123')
    .click(Selector('#sign-up button').withText('NEXT'))
    .expect(Selector('#sign-up p').withText('Password must be at least 6 characters long.').exists)
    .ok('Error message should be displayed when password is too short');
});

test('Sign Up - Missing First Name and Last Name', async (t) => {
  await t
    .click(page.overlaySignUpButton)
    .typeText(page.signUpEmail, 'user@example.com')
    .typeText(page.signUpPassword, 'password123')
    .click(Selector('#sign-up button').withText('NEXT'))
    .click(Selector('#sign-up button').withText('SIGN UP'))
    .expect(Selector('#sign-up p').withText('Please enter a valid first name.').exists)
    .ok('Error message should be displayed when first name or last name is missing');
});

test('Sign Up - Missing Last Name', async (t) => {
  await t
    .click(page.overlaySignUpButton)
    .typeText(page.signUpEmail, 'user@example.com')
    .typeText(page.signUpPassword, 'password123')
    .click(Selector('#sign-up button').withText('NEXT'))
    .typeText(page.signUpFirstName, 'John')
    .click(Selector('#sign-up button').withText('SIGN UP'))
    .expect(Selector('#sign-up p').withText('Please enter a valid last name.').exists)
    .ok('Error message should be displayed when last name is missing');
});

test('Sign Up - Duplicate Email', async (t) => {
  await t
    .click(page.overlaySignUpButton)
    .typeText(page.signUpEmail, 'john@foo.com')
    .typeText(page.signUpPassword, 'validpassword')
    .click(Selector('#sign-up button').withText('NEXT'))
    .typeText(page.signUpFirstName, 'John')
    .typeText(page.signUpLastName, 'Doe')
    .click(Selector('#sign-up button').withText('SIGN UP'))
    .expect(Selector('#sign-up h3').withText('Registration was not successful').exists)
    .ok('The "Registration was not successful" header should appear when duplicate email is used');
});

test('Sign Up - Valid New User', async (t) => {
  await t
    .click(page.overlaySignUpButton)
    .typeText(page.signUpEmail, 'newuser@example.com')
    .typeText(page.signUpPassword, 'newpassword')
    .click(Selector('#sign-up button').withText('NEXT'))
    .typeText(page.signUpFirstName, 'John')
    .typeText(page.signUpLastName, 'Doe')
    .click(Selector('#sign-up button').withText('SIGN UP'))
    .expect(Selector('#root strong').withText('Welcome to InSpire Hawaiʻi').exists)
    .ok();
});
