export class LoginFunctionality {
  elements = {
    usernameInput: () => cy.get("#username"),
    passwordInput: () => cy.get("#password"),
    loginButton: () => cy.get("button[type='submit']"),
    successMessage: () => cy.get("#flash"),
    secureAreaText: () => cy.contains("h2", "Secure Area"),
    subHeaderText: () => cy.get(".subheader"),
  };

  // action methods
  enterUsername(username) {
    if (username) {
      this.elements.usernameInput().type(username);
    }
  }

  enterPassword(password) {
    if (password) {
      this.elements.passwordInput().type(password);
    }
  }

  clickLoginButton() {
    this.elements.loginButton().click();
  }

  dashboardPageVisible() {
    this.elements.successMessage().should("be.visible");
    this.elements.secureAreaText().should("be.visible");
    this.elements
      .subHeaderText()
      .should(
        "have.text",
        "Welcome to the Secure Area. When you are done click logout below.",
      );
  }

  errorMessageVisible() {
    this.elements
      .successMessage()
      .should("be.visible")
      .and("contain.text", "Your username is invalid!");
  }
}
