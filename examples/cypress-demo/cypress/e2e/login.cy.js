import LoginPage from "../pages/LoginPage";

describe("Login Flow - SauceDemo", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("should login successfully with valid credentials", () => {
    cy.fixture("users").then((users) => {
      LoginPage.login(
        users.standardUser.username,
        users.standardUser.password
      );
    });

    cy.url().should("include", "/inventory");
    cy.contains("Products").should("be.visible");
  });

  it("should show error message with invalid credentials", () => {
    cy.fixture("users").then((users) => {
      LoginPage.login(
        users.invalidUser.username,
        users.invalidUser.password
      );
    });

    LoginPage.errorMessageShouldBeVisible();
  });
});