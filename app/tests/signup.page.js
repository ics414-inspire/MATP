import { Selector, t } from 'testcafe';
import { PAGE_IDS } from '../imports/ui/utilities/PageIDs';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

fixture`Sign In and Sign Up Page Tests`
  .page`http://localhost:3000/signin-signup`; // Adjust the URL as per your routing

// Define page model for selectors
class SignInSignUpPage {
  constructor() {
    // Sign In selectors
    this.signInEmail = Selector(`#${COMPONENT_IDS.SIGN_IN_FORM_EMAIL}`);
    this.signInPassword = Selector(`#${COMPONENT_IDS.SIGN_IN_FORM_PASSWORD}`);
    this.signInButton = Selector(`#${COMPONENT_IDS.SIGN_IN_FORM_SUBMIT}`);
    this.signInError = Selector(`#${PAGE_IDS.SIGN_IN} .error-message`);

    // Sign Up selectors
    this.signUpEmail = Selector(`#${COMPONENT_IDS.SIGN_UP_FORM_EMAIL}`);
    this.signUpPassword = Selector(`#${COMPONENT_IDS.SIGN_UP_FORM_PASSWORD}`);
    this.signUpFirstName = Selector(`#${COMPONENT_IDS.SIGN_UP_FORM_FIRST_NAME}`);
    this.signUpLastName = Selector(`#${COMPONENT_IDS.SIGN_UP_FORM_LAST_NAME}`);
    this.signUpNextButton = Selector(`#${PAGE_IDS.SIGN_UP} button`).withText('Next');
    this.signUpSubmitButton = Selector(`#${COMPONENT_IDS.SIGN_UP_FORM_SUBMIT}`);
    this.signUpError = Selector(`#${PAGE_IDS.SIGN_UP} .error-message`);

    // Landing page validation selector
    this.landingWelcomeText = Selector('h1').withText('Welcome to InSpire Hawai’i');
  }
}

const page = new SignInSignUpPage();

test('Sign In - Valid Credentials', async t => {
  await t
    .typeText(page.signInEmail, 'validuser@example.com') // Replace with valid credentials
    .typeText(page.signInPassword, 'validpassword')
    .click(page.signInButton)
    .expect(page.landingWelcomeText.exists)
    .ok(); // Validate that the user lands on the welcome page
});

test('Sign In - Invalid Credentials', async t => {
  await t
    .typeText(page.signInEmail, 'invaliduser@example.com')
    .typeText(page.signInPassword, 'wrongpassword')
    .click(page.signInButton)
    .expect(page.signInError.exists)
    .ok()
    .expect(page.signInError.innerText)
    .contains('Login was not successful'); // Check for the error message
});

test('Sign Up - Valid New User', async t => {
  await t
    .typeText(page.signUpEmail, 'newuser@example.com') // Use a unique email for each test run
    .typeText(page.signUpPassword, 'newpassword')
    .click(page.signUpNextButton)
    .typeText(page.signUpFirstName, 'John')
    .typeText(page.signUpLastName, 'Doe')
    .click(page.signUpSubmitButton)
    .expect(page.landingWelcomeText.exists)
    .ok(); // Validate that the user lands on the welcome page
});

test('Sign Up - Missing Email', async t => {
  await t
    .typeText(page.signUpPassword, 'somepassword')
    .click(page.signUpNextButton)
    .expect(page.signUpError.exists)
    .ok()
    .expect(page.signUpError.innerText)
    .contains('Please enter a valid email address'); // Check for specific validation message
});

test('Sign Up - Missing First Name and Last Name', async t => {
  await t
    .typeText(page.signUpEmail, 'user@example.com')
    .typeText(page.signUpPassword, 'password123')
    .click(page.signUpNextButton)
    .click(page.signUpSubmitButton)
    .expect(page.signUpError.exists)
    .ok()
    .expect(page.signUpError.innerText)
    .contains('Please enter a valid first name'); // Check for specific validation message
});
