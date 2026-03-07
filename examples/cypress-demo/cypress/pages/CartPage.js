class CartPage {
  getCartIcon() {
    return cy.get(".shopping_cart_link");
  }

  getCartBadge() {
    return cy.get(".shopping_cart_badge");
  }

  openCart() {
    this.getCartIcon().click();
  }

  addBackpackToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  removeBackpackFromCart() {
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
  }

  getCartItemName() {
    return cy.get(".inventory_item_name");
  }

  getCartItems() {
    return cy.get(".cart_item");
  }
}

export default new CartPage();