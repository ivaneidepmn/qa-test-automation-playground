class InventoryPage {

  getProductsList() {
    return cy.get(".inventory_list");
  }

  getCartIcon() {
    return cy.get(".shopping_cart_link");
  }

  openMenu() {
    cy.get("#react-burger-menu-btn").click();
  }

  clickLogout() {
    cy.get("#logout_sidebar_link").click();
  }

  addBackpackToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

}

export default new InventoryPage();