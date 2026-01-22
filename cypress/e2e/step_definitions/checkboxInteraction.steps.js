import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageManager } from "../pages/PageManager";

const pageManager = new PageManager();
const checkboxesPage = pageManager.getCheckboxesPage();

When("the user clicks the link for checkboxes", () => {
  checkboxesPage.navigateToCheckboxesPage();
});

Then("the user should be redirected to the checkboxes page", () => {
  checkboxesPage.checkboxsPageRedirection();
});

When("the user checks the first checkbox", () => {
  checkboxesPage.checkCheckbox1();
});

Then("the first checkbox should be checked", () => {
  checkboxesPage.verifyCheckbox1Checked();
});

When("the user unchecks the second checkbox if it is checked", () => {
  checkboxesPage.uncheckCheckbox2IfChecked();
});

Then("the second checkbox should be unchecked", () => {
  checkboxesPage.verifyCheckbox2Unchecked();
});
