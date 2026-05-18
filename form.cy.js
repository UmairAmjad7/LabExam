describe('Form Test', () => {

  it('Checkout Form', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    cy.get('.shopping_cart_link')
      .click()

    cy.get('[data-test="checkout"]')
      .click()

    cy.get('[data-test="firstName"]')
      .type('Umair')

    cy.get('[data-test="lastName"]')
      .type('Amjad')

    cy.get('[data-test="postalCode"]')
      .type('54000')

    cy.get('[data-test="continue"]')
      .click()

    cy.get('.title')
      .should('contain', 'Checkout')
  })

})