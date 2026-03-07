class LoginPage {
  visit() {
    cy.visit("/");
  }

  fillUsername(username) {
    cy.get('[data-test="username"]').clear().type(username);
  }

  fillPassword(password) {
    cy.get('[data-test="password"]').clear().type(password);
  }

  clickLogin() {
    cy.get('[data-test="login-button"]').click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLogin();
  }

  errorMessageShouldBeVisible() {
    cy.get('[data-test="error"]').should("be.visible");
  }
}

export default new LoginPage();