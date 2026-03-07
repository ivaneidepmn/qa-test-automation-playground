import CartPage from "../pages/CartPage";

describe("Cart Flow - SauceDemo", () => {
  beforeEach(() => {
    cy.loginAsStandardUser();
    cy.url().should("include", "/inventory.html");
  });

  it("[smoke] should add a product to the cart", () => {
    cy.addBackpackToCart();

    CartPage.getCartBadge()
      .should("be.visible")
      .and("contain", "1");

    cy.openCart();

    cy.url().should("include", "/cart.html");
    CartPage.getCartItemName().should("contain", "Sauce Labs Backpack");
  });

  it("[regression] should remove a product from the cart", () => {
    cy.addBackpackToCart();
    cy.openCart();

    CartPage.removeBackpackFromCart();
    CartPage.getCartItems().should("not.exist");
  });
});