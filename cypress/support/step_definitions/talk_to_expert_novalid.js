const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor");

import mainPage from '../../e2e/page_objects/mainPage'
import contactUsPage from '../../e2e/page_objects/contactUsPage'

Given("I go to telnyx.com website main page$", () => {
  cy.visit("https://telnyx.com/");
});
When("When This site uses cookies window appears i close it$", () => {
  mainPage.cookieCloseButton()
});
Then("^I click on Talk to an expert button", () => {
  mainPage.talkExpertButton()
});
And("I fill contact form with valid data and not valid email in email text field and should see error notification", () => {
  contactUsPage.firstName()
  contactUsPage.lastName()
  contactUsPage.businessEmailNotValid()
  contactUsPage.emailErrorText()
});
And("I enter not valid website into website text field and should see error notification", () => {
  contactUsPage.companyWebsiteNotValid()
  contactUsPage.websiteErrorText()
});
