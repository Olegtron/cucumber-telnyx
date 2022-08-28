const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor");

import mainPage from '../../e2e/page_objects/mainPage'
import supportCenterPage from '../../e2e/page_objects/supportCenterPage';

Given("I Visit telnyx.com Website Main Page^", () => {
  cy.visit("https://telnyx.com/");
});
When("When This site uses Cookies Window appears I ClosE It", () => {
  mainPage.cookieCloseButton()
});
Then("I click on Support Center button", () => {
  mainPage.supportCenterButton()
});
Then("I enter valid text into search field", () => {
  supportCenterPage.searchTextInputValid()
});
And("I receive in search results articles that includes searched text", () => {
  supportCenterPage.resultArticle1()
  supportCenterPage.resultArticle2()
});
