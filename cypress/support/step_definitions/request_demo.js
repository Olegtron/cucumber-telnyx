const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor");

import mainPage from '../../e2e/page_objects/mainPage'
import contactUsPage from '../../e2e/page_objects/contactUsPage'

Given("^I visit telnyx.com website main page^", () => {
  cy.visit("https://telnyx.com/")
});
When("^When this site uses cookies window appears i close it^", () => {
  mainPage.cookieCloseButton()
});
Then("I click on Request a demo link", () => {
  mainPage.requestDemoLink()
});
And("In new opened page I enter valid credentials in contact form", () => {
  contactUsPage.reasonDropDown()
  contactUsPage.firstName()
  contactUsPage.lastName()
  contactUsPage.businessEmail()
  contactUsPage.countryDropDown()
  contactUsPage.phoneNumber()
  contactUsPage.companyWebsite()
  });
Then("I click on Submit button", () => {
  contactUsPage.submitButton()
});
And("I in new opened page i receive confirmation text", () => {
  contactUsPage.confirmationText()
}); 