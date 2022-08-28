const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor");

import mainPage from '../../e2e/page_objects/mainPage'
import storagePage from '../../e2e/page_objects/storagePage'
import confirmationPage from '../../e2e/page_objects/confirmationPage'

Given("^I visit telnyx.com website main page", () => {
  cy.visit("https://telnyx.com/");
});
When("^When this site uses cookies window appears i close it", () => {
  mainPage.cookieCloseButton()
});
Then("I click on Join the waitlist link", () => {
  mainPage.waitListLink()
});
And("In opened page I click on Join the waitlist button", () => {
  storagePage.joinButton()
});
Then("In join form I enter valid data and click Apply Now button", () => {
  storagePage.firstNameField()
  storagePage.lastNameField()
  storagePage.emailFieldValid()
  storagePage.applyNowButton()
});
And("I redirected to new page and see confirmation text", () => {
  confirmationPage.urlCheck()
  confirmationPage.confirmationText()
});