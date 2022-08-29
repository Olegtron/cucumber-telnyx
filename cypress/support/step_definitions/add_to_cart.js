const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor");

import mainPage from '../../e2e/page_objects/mainPage'
import logInPage from '../../e2e/page_objects/logInPage'
import homePage from '../../e2e/page_objects/homePage';
import cartPage from '../../e2e/page_objects/cartPage';
import searchNumbersPage from '../../e2e/page_objects/searchNumbersPage';

Given("I Visit telnyx.com Website Main page", () => {
  cy.visit("https://telnyx.com/");
});
When("When This site uses Cookies Window appears I close it", () => {
  mainPage.cookieCloseButton()
  cy.wait(2000)
});
Then("I click on Log In Button", () => {
  mainPage.logInButton()
  cy.wait(3000)
});
And("In opened page I enter valid data to login form and click Log In button", () => {
  logInPage.bussinessEmailField()
  logInPage.passwordField()
  logInPage.logInButton()
  cy.wait(3000)
});
Then("In opened home page i click on Cart button", () => {
  cy.wait(8000)
  homePage.cartButton()
});
And("I check that cart is empty", () => {
  cartPage.emptyCartText()
});
Then("I click on Search for Numbers button", () => {
  cartPage.searchForNumbersButton()
});
And("I add some product to my cart and check that product added", () => {
  searchNumbersPage.exampleSearchesToggle()
  searchNumbersPage.searchNumbersButton()
  searchNumbersPage.addProductButton()
  cy.wait(4000)
  searchNumbersPage.cartButton()

  cartPage.checkMark()
  cartPage.emptyCartButton()
  cartPage.totalCredit()
  }); 