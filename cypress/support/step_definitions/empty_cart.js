const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor");

import mainPage from '../../e2e/page_objects/mainPage'
import logInPage from '../../e2e/page_objects/logInPage'
import homePage from '../../e2e/page_objects/homePage';
import cartPage from '../../e2e/page_objects/cartPage';
import searchNumbersPage from '../../e2e/page_objects/searchNumbersPage';

after(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
})

Given("I Visit telnyx.com Website Main Page", () => {
  cy.visit("https://telnyx.com/");
});
When("When This site uses Cookies Window appears I close It", () => {
  mainPage.cookieCloseButton()
});
Then("I Click on Log In Button", () => {
  mainPage.logInButton()  
  cy.wait(5000)
});
And("In Opened page I enter valid data to login form and click Log In button", () => {
  logInPage.bussinessEmailField()
  logInPage.passwordField()
  logInPage.logInButton()
  cy.wait(5000)
});
Then("In Opened home page i click on Cart button", () => {
  homePage.cartButton()
});
And("I Check that cart is empty", () => {
  cartPage.emptyCartText()
});
Then("I Click on Search for Numbers button", () => {
  cartPage.searchForNumbersButton()
});
And("I Add some product to my cart and check that product added", () => {
  searchNumbersPage.exampleSearchesToggle()
  searchNumbersPage.searchNumbersButton()
  searchNumbersPage.addProductButton()
  cy.wait(3000)
  searchNumbersPage.cartButton()

  cartPage.checkMark()
  cartPage.emptyCartButton()
  cartPage.totalCredit()
  });
Then("I empty cart and check that its empty", () => {
  cartPage.emptyCartButton().click()
  cartPage.emptyCartText()
});
