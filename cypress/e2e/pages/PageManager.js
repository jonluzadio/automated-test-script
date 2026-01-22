import { LoginFunctionality } from "./LoginFunctionality";
import { DynamicContentPage } from "./DynamicContentPage";
import { CheckboxesPage } from "./CheckboxesPage";

export class PageManager {
  constructor() {
    this.loginFunctionality = new LoginFunctionality();
    this.dynamicContentPage = new DynamicContentPage();
    this.checkboxesPage = new CheckboxesPage();
  }

  getLoginFunctionality() {
    return this.loginFunctionality;
  }

  getDynamicContentPage() {
    return this.dynamicContentPage;
  }

  getCheckboxesPage() {
    return this.checkboxesPage;
  }
}
