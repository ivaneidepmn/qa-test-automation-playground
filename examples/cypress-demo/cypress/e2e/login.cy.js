import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

describe("Login Flow - SauceDemo", () => {

  let users;

  beforeEach(() => {
    cy.fixture("users").then((data) => {
      users = data;
    });

    LoginPage.visit();
  });

  it("should login successfully with valid credentials", () => {
    LoginPage.login(users.standardUser.username, users.standardUser.password);

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain", "Products");
  });

  it("should show error message with invalid credentials", () => {
    LoginPage.login(users.invalidUser.username, users.invalidUser.password);

    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Username and password do not match");
  });

  it("should show error message when trying to login with empty fields", () => {
    LoginPage.clickLogin();

    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Username is required");
  });

  it("should validate inventory page elements after successful login", () => {
    LoginPage.login(users.standardUser.username, users.standardUser.password);

    cy.url().should("include", "/inventory.html");

    InventoryPage.getProductsList().should("be.visible");

    cy.get(".inventory_item")
      .should("have.length.greaterThan", 0);

    InventoryPage.getCartIcon().should("be.visible");

    cy.get("#react-burger-menu-btn")
      .should("be.visible");
  });

  it("should logout successfully", () => {
    LoginPage.login(users.standardUser.username, users.standardUser.password);

    InventoryPage.openMenu();
    InventoryPage.clickLogout();

    cy.url().should("eq", "https://www.saucedemo.com/");

    cy.get('[data-test="login-button"]')
      .should("be.visible");
  });

});