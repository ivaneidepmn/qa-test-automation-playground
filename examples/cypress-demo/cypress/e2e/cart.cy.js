import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/CartPage";

describe("Cart Flow - SauceDemo", () => {
  beforeEach(() => {
    cy.fixture("users").then((users) => {
      LoginPage.visit();
      LoginPage.login(users.standardUser.username, users.standardUser.password);

      cy.url().should("include", "/inventory.html");
    });
  });

  it("should add a product to the cart", () => {
    CartPage.addBackpackToCart();

    CartPage.getCartBadge()
      .should("be.visible")
      .and("contain", "1");

    CartPage.openCart();

    cy.url().should("include", "/cart.html");
    CartPage.getCartItemName().should("contain", "Sauce Labs Backpack");
  });

  it("should remove a product from the cart", () => {
    CartPage.addBackpackToCart();
    CartPage.openCart();

    CartPage.removeBackpackFromCart();
    CartPage.getCartItems().should("not.exist");
  });
});