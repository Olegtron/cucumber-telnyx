const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor");

import mainPage from '../../e2e/page_objects/mainPage'
import signUpPage from '../../e2e/page_objects/signUpPage';

Given("I visit telnyx.com Website main pagE", () => {
  cy.visit("https://telnyx.com/");
});
When("When This site uses Cookies window appears i close It", () => {
  mainPage.cookieCloseButton()
});
Then("I scroll down to Switch + Save with Telnyx section and click Create a free trial account button", () => {
  mainPage.switchAndSaveBlock()
  mainPage.createTrialAccButton()
  cy.wait(4000)
  });
And("I should be redirected to sign-up page", () => {
  signUpPage.checkUrl()
});