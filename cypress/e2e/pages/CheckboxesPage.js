export class CheckboxesPage {
  elements = {
    checkboxLink: () => cy.get('a[href="/checkboxes"]'),
    checkboxPageHeaderText: () => cy.contains("h3", "Checkboxes"),
    checkbox1: () => cy.get('input[type="checkbox"]').first(),
    checkbox2: () => cy.get('input[type="checkbox"]').last(),
  };

  // Navigate
  navigateToCheckboxesPage() {
    this.elements.checkboxLink().click();
  }

  checkboxsPageRedirection() {
    cy.url().should("include", "/checkboxes");
    this.elements.checkboxPageHeaderText().should("be.visible");
  }

  // Actions
  checkCheckbox1() {
    this.elements.checkbox1().check({ force: true });
  }

  uncheckCheckbox2IfChecked() {
    this.elements.checkbox2().then(($checkbox) => {
      if ($checkbox.is(":checked")) {
        cy.wrap($checkbox).uncheck({ force: true });
      }
    });
  }

  // Assertions
  verifyCheckbox1Checked() {
    this.elements.checkbox1().should("be.checked");
  }

  verifyCheckbox2Unchecked() {
    this.elements.checkbox2().should("not.be.checked");
  }
}
