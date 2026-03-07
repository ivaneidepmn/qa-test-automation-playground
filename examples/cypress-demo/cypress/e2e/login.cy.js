import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
import { buildUser } from "../support/dataBuilder";

describe("Login Flow - SauceDemo", () => {
  it("[smoke] should login successfully with valid credentials", () => {
    const user = buildUser();

    LoginPage.visit();
    LoginPage.login(user.username, user.password);

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain", "Products");
  });

  it("[regression] should show error message with invalid credentials", () => {
    const invalidUser = buildUser({
      username: "locked_out_user",
      password: "wrong_password",
    });

    LoginPage.visit();
    LoginPage.login(invalidUser.username, invalidUser.password);

    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Username and password do not match");
  });

  it("[regression] should show error message when trying to login with empty fields", () => {
    LoginPage.visit();
    LoginPage.clickLogin();

    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Username is required");
  });

  it("[regression] should validate inventory page elements after successful login", () => {
    cy.loginAsStandardUser();

    cy.url().should("include", "/inventory.html");
    InventoryPage.getProductsList().should("be.visible");
    cy.get(".inventory_item").should("have.length.greaterThan", 0);
    InventoryPage.getCartIcon().should("be.visible");
    cy.get("#react-burger-menu-btn").should("be.visible");
  });

  it("[smoke] should logout successfully", () => {
    cy.loginAsStandardUser();

    InventoryPage.openMenu();
    InventoryPage.clickLogout();

    cy.url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="login-button"]').should("be.visible");
  });
});