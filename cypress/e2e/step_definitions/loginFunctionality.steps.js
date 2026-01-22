import {
  Given,
  When,
  Then,
  log,
} from "@badeball/cypress-cucumber-preprocessor";
import { PageManager } from "../pages/PageManager";

const pageManager = new PageManager();
const loginFunctionality = pageManager.getLoginFunctionality();

Given("the user is on the login page", () => {
  cy.visit("/login");
});

// Successful login with valid credentials
When("the user enters a valid username and password", () => {
  loginFunctionality.enterUsername("tomsmith");
  loginFunctionality.enterPassword("SuperSecretPassword!");
});

When("the user clicks the login button", () => {
  loginFunctionality.clickLoginButton();
});

Then("the user should be redirected to the dashboard page", () => {
  loginFunctionality.dashboardPageVisible();
});

// Unsuccessful login with invalid credentials
When("the user enters an invalid username or password", () => {
  loginFunctionality.enterUsername("invalidUser");
  loginFunctionality.enterPassword("invalidPass");
});

Then("an error message should be displayed", () => {
  loginFunctionality.errorMessageVisible();
});

// Empty username and password fields
When("the user leaves the username and password fields empty", () => {
  loginFunctionality.enterUsername("");
  loginFunctionality.enterPassword("");
});

Then("a validation message should be displayed", () => {
  loginFunctionality.errorMessageVisible();
});
