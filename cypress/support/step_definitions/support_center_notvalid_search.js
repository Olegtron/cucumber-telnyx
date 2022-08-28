const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor");

import mainPage from '../../e2e/page_objects/mainPage'
import supportCenterPage from '../../e2e/page_objects/supportCenterPage';

Given("^I Visit telnyx.com Website Main Page^", () => {
  cy.visit("https://telnyx.com/");
});
When("^When This site uses Cookies Window appears I ClosE It", () => {
  mainPage.cookieCloseButton()
});
Then("I click on Support Center button^", () => {
  mainPage.supportCenterButton()
});
Then("I enter not valid text into search field", () => {
  supportCenterPage.searchTextInputNotValid()
});
And("I receive search error text notification", () => {
    supportCenterPage.errorSearchText()
  });
