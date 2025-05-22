import {loginPage} from "../support/pageObjects/loginPage";
const {I} = inject()

Feature('Login');

Scenario('User logs in successfully', () => {
  I.amOnPage('/');
  loginPage.login('student', secret('Password123'));
  I.see('Logged In Successfully');
  I.see('Congratulations student. You successfully logged in!');
});
