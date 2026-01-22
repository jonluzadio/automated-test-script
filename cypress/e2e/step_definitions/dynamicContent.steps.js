import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageManager } from "../pages/PageManager";

const pageManager = new PageManager();
const dynamicContentPage = pageManager.getDynamicContentPage();

Given("the user is internet herokuapp home page", () => {
  cy.visit("/");
});

When("the user clicks the link for dynamic content", () => {
  dynamicContentPage.clickDynamicContentLink();
});

Then("the user should be redirected to the dynamic content page", () => {
  dynamicContentPage.dynamicContentPageRedirect();
});

When("the user captures the current content", () => {
  dynamicContentPage.contentBeforeRefresh();
});

When("the user refreshes the dynamic content page", () => {
  dynamicContentPage.refreshDybamicContentPage();
});

Then("the content should change upon refresh", () => {
  dynamicContentPage.contentAfterRefresh();
});
