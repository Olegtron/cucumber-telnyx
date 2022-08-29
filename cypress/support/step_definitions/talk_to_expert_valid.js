const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor");

import mainPage from '../../e2e/page_objects/mainPage'
import contactUsPage from '../../e2e/page_objects/contactUsPage'

Given("I visit telnyx.com website main page", () => {
  cy.visit("https://telnyx.com/");
});
When("When This site uses cookies window appears i close it", () => {
  mainPage.cookieCloseButton()
});
Then("I click on Talk to an expert button", () => {
  mainPage.talkExpertButton()
});
And("I enter all valid data to text boxes and click Submit button", () => {
  contactUsPage.reasonDropDown()
  contactUsPage.firstName()
  contactUsPage.lastName()
  contactUsPage.businessEmail()
  contactUsPage.countryDropDown()
  contactUsPage.phoneNumber()
  contactUsPage.companyWebsite()
  contactUsPage.submitButton()
});
And("check that ticket was succesfully submited", () => {
  contactUsPage.confirmationText()
}); 