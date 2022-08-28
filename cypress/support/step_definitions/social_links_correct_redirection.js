const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import mainPage from '../../e2e/page_objects/mainPage'

Given("I Visit telnyx.com Website Main PagE", () => {
  cy.visit("https://telnyx.com/");
});
When("When This site uses Cookies Window appears I Close It", () => {
  mainPage.cookieCloseButton()
});
Then("In site footer i click on each social link and each social link should redirect to relevant social network", () => {
  mainPage.linkedInLink()
  mainPage.twitterLink()
  mainPage.facebookLink()
});


