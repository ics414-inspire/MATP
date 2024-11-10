import { Selector, t } from 'testcafe';
import { PAGE_IDS } from '../imports/ui/utilities/PageIDs';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

fixture`Sign In and Sign Up Page Tests`
  .page`http://localhost:3000/signin-signup`; // Adjust the URL as per your routing

// Define page model for selectors
class SignInSignUpPage {
  constructor() {
    // Use COMPONENT_IDS and PAGE_IDS for selectors if available
    this.signInEmail = Selector(`#${COMPONENT_IDS.SIGN_IN_FORM_EMAIL}`);
    this.signInPassword = Selector(`#${COMPONENT_IDS.SIGN_IN_FORM_PASSWORD}`);
    this.signInButton = Selector(`#${COMPONENT_IDS.SIGN_IN_FORM_SUBMIT}`);
    this.signInError = Selector(`#${PAGE_IDS.SIGN_IN} .error-message`);

    this.signUpEmail = Selector(`#${COMPONENT_IDS.SIGN_UP_FORM_EMAIL}`);
    this.signUpPassword = Selector(`#${COMPONENT_IDS.SIGN_UP_FORM_PASSWORD}`);
    this.signUpFirstName = Selector(`#${COMPONENT_IDS.SIGN_UP_FORM_FIRST_NAME}`);
    this.signUpLastName = Selector(`#${COMPONENT_IDS.SIGN_UP_FORM_LAST_NAME}`);
    this.signUpNextButton = Selector(`#${PAGE_IDS.SIGN_UP} button`).withText('Next');
    this.signUpSubmitButton = Selector(`#${COMPONENT_IDS.SIGN_UP_FORM_SUBMIT}`);
    this.signUpError = Selector(`#${PAGE_IDS.SIGN_UP} .error-message`);
  }
}

const page = new SignInSignUpPage();

test('Sign In - Valid Credentials', async t => {
  await t
    .typeText(page.signInEmail, 'validuser@example.com') // Replace with valid credentials
    .typeText(page.signInPassword, 'validpassword')
    .click(page.signInButton)
    .expect(Selector('h1').withText('Welcome Back!').exists)
    .ok(); // Expect a welcome message or redirect after sign-in
});

test('Sign In - Invalid Credentials', async t => {
  await t
      .typeText(page.signInEmail, 'invaliduser@example.com')
      .typeText(page.signInPassword, 'wrongpassword')
      .click(page.signInButton)
      .expect(Selector('#sign-in-container h3').withText('Login was not successful').exists)
      .ok('Error heading should be displayed when invalid credentials are entered')
      .expect(Selector('#sign-in-container p').withText('User not found').exists)
      .ok('Error detail should display "User not found" when invalid credentials are entered');
});

