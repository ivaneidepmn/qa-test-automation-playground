Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type(password);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("loginAsStandardUser", () => {
  cy.fixture("users").then((users) => {
    cy.login(users.standardUser.username, users.standardUser.password);
  });
});

Cypress.Commands.add("addBackpackToCart", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

Cypress.Commands.add("openCart", () => {
  cy.get(".shopping_cart_link").click();
});